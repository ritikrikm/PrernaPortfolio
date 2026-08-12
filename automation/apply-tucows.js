const { chromium } = require('playwright');

const JOB_URL = 'https://job-boards.greenhouse.io/domains/jobs/7773448003';
const RESUME = 'assets/resume/prerna-sharma-resume.pdf';

const answers = {
  firstName: 'Prerna',
  lastName: 'Sharma',
  email: 'Visualartist.prerna@gmail.com',
  phone: '4168256120',
  linkedin: 'https://www.linkedin.com/in/the-prerna-sharma/',
  portfolio: 'https://prerna-portfolio-six.vercel.app/#/',
  trends: 'I regularly follow design studios and creative work on Behance, LinkedIn and Instagram, and I pay attention to how brands are using motion, typography and AI tools. I also learn by trying new tools and applying relevant ideas to real projects rather than following trends for their own sake.',
  feedback: 'I try not to take feedback personally. I first understand the concern and the goal behind it, ask questions if anything is unclear, and then explore the strongest way to address it while protecting the design objective. I am comfortable iterating and showing options when that helps align everyone.',
  process: 'I start by understanding the brief, audience, objective, brand guidelines and deliverables. Then I research references, organize a direction or moodboard, sketch and explore concepts, and build the strongest route. I share early enough to get feedback, refine it, and finish with production checks so the final files are consistent and ready for the intended channels.',
  ai: 'I have used Adobe Firefly and DALL-E for visual exploration and ideation, and Runway for AI-assisted creative and video workflows. I use AI as a support tool for references, variations and faster exploration, while keeping final creative decisions, brand consistency and production quality under my control.',
  salary: '$75,000 CAD'
};

async function choose(page, id, text) {
  const input = page.locator(`#${id}`);
  await input.scrollIntoViewIfNeeded();
  await input.click({ force: true });
  const option = page.getByRole('option', { name: text, exact: true });
  await option.waitFor({ state: 'visible', timeout: 10000 });
  await option.click();
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  page.setDefaultTimeout(20000);

  const response = await page.goto(JOB_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  if (!response || response.status() !== 200) throw new Error(`Job page unavailable: HTTP ${response && response.status()}`);

  const heading = page.getByRole('heading', { name: 'Graphic Designer', exact: true }).first();
  await heading.waitFor({ state: 'visible', timeout: 20000 });
  const submit = page.getByRole('button', { name: /submit application/i });
  await submit.waitFor({ state: 'visible', timeout: 20000 });
  console.log('LIVE_APPLICATION_CONFIRMED');

  await page.locator('#first_name').fill(answers.firstName);
  await page.locator('#last_name').fill(answers.lastName);
  await page.locator('#email').fill(answers.email);

  await choose(page, 'country', 'Canada +1');
  await page.locator('#phone').fill(answers.phone);
  await page.locator('#resume').setInputFiles(RESUME);

  await page.locator('#question_31057593003').fill(answers.linkedin);
  await page.locator('#question_31057594003').fill(answers.portfolio);
  await page.locator('#question_31057595003').fill(answers.trends);
  await page.locator('#question_31057596003').fill(answers.feedback);
  await page.locator('#question_31057597003').fill(answers.process);
  await page.locator('#question_31057598003').fill(answers.ai);

  await choose(page, 'question_31057599003', 'No');
  await choose(page, 'question_31057600003', 'Job Board');
  await choose(page, 'question_31057601003', 'Yes');
  await choose(page, 'question_31226868003', 'Yes');
  await page.locator('#question_31057602003').fill(answers.salary);
  await choose(page, 'question_31057603003', 'Yes');

  // Optional demographic questions are intentionally left unanswered.

  const resumeName = await page.locator('#resume').evaluate(el => el.files && el.files[0] && el.files[0].name);
  if (resumeName !== 'prerna-sharma-resume.pdf') throw new Error(`Resume upload verification failed: ${resumeName || 'none'}`);

  const requiredTextIds = [
    'first_name','last_name','email','phone','question_31057594003','question_31057595003',
    'question_31057596003','question_31057597003','question_31057598003','question_31057602003'
  ];
  for (const id of requiredTextIds) {
    const value = await page.locator(`#${id}`).inputValue();
    if (!value.trim()) throw new Error(`Required field not filled: ${id}`);
  }

  console.log('FORM_READY: all required known fields populated and resume attached');
  await submit.scrollIntoViewIfNeeded();
  await submit.click();

  await page.waitForTimeout(6000);

  const captchaChallenge = page.frames().some(f => /recaptcha|captcha/i.test(f.url()) && /challenge|bframe/i.test(f.url()));
  const bodyText = (await page.locator('body').innerText()).replace(/\s+/g, ' ');
  if (captchaChallenge || /verify you are human|captcha challenge/i.test(bodyText)) {
    throw new Error('CAPTCHA_BLOCKED: employer site requested an interactive human verification');
  }

  const success = /thank you|application (has been )?(submitted|received)|received your application|thanks for applying/i.test(bodyText);
  const stillSubmit = await page.getByRole('button', { name: /submit application/i }).count();

  if (!success) {
    const errors = await page.locator('[role="alert"], .error, [class*="error"]').allTextContents().catch(() => []);
    console.log('FINAL_URL:', page.url());
    console.log('VALIDATION_ERRORS:', JSON.stringify(errors.map(x => x.trim()).filter(Boolean)));
    if (stillSubmit) throw new Error('SUBMISSION_NOT_CONFIRMED: form remains present after submit');
    throw new Error('SUBMISSION_NOT_CONFIRMED: no success confirmation detected');
  }

  console.log('APPLICATION_SUBMITTED_SUCCESSFULLY');
  console.log('FINAL_URL:', page.url());
  await browser.close();
})().catch(err => {
  console.error(err.stack || err);
  process.exit(1);
});
