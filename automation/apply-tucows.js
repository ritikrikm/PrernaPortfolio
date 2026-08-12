const { chromium } = require('playwright');
const { generateKeyPairSync, privateDecrypt, constants, randomBytes } = require('crypto');
const { execFileSync } = require('child_process');

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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function choose(page, id, text) {
  const input = page.locator(`#${id}`);
  await input.waitFor({ state: 'visible', timeout: 20000 });
  await input.scrollIntoViewIfNeeded();

  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      await input.click({ force: true });
      await sleep(350 * attempt);

      const exactOption = page.getByRole('option', { name: text, exact: true });
      if (await exactOption.isVisible().catch(() => false)) {
        await exactOption.click();
        return;
      }

      // Greenhouse uses a React combobox; typing forces its option list to render reliably.
      await input.fill('').catch(() => {});
      await input.type(text, { delay: 35 }).catch(() => {});
      await sleep(500);
      if (await exactOption.isVisible().catch(() => false)) {
        await exactOption.click();
        return;
      }

      // Fallback for runs where the virtualized option list is not exposed to ARIA immediately.
      const textOption = page.getByText(text, { exact: true }).last();
      if (await textOption.isVisible().catch(() => false)) {
        await textOption.click();
        return;
      }

      await page.keyboard.press('ArrowDown').catch(() => {});
      await page.keyboard.press('Enter').catch(() => {});
      await sleep(400);
      const value = await input.inputValue().catch(() => '');
      if (value && value.toLowerCase().includes(text.split(' ')[0].toLowerCase())) return;

      await page.keyboard.press('Escape').catch(() => {});
    } catch (err) {
      if (attempt === 5) throw err;
    }
  }

  throw new Error(`Could not select ${text} in ${id}`);
}

async function successVisible(page) {
  const text = (await page.locator('body').innerText()).replace(/\s+/g, ' ');
  return /thank you|application (has been )?(submitted|received)|received your application|thanks for applying/i.test(text);
}

async function findSecurityCodeInput(page) {
  const labelled = page.getByLabel(/security code/i).first();
  if (await labelled.count()) return labelled;

  const labels = page.locator('label');
  for (let i = 0; i < await labels.count(); i++) {
    const label = labels.nth(i);
    const text = ((await label.innerText().catch(() => '')) || '').replace(/\s+/g, ' ').trim();
    if (!/security code|verification code/i.test(text)) continue;
    const forId = await label.getAttribute('for');
    if (forId && await page.locator(`#${forId}`).count()) return page.locator(`#${forId}`);
    const nested = label.locator('input').first();
    if (await nested.count()) return nested;
  }

  const inputs = page.locator('input');
  for (let i = 0; i < await inputs.count(); i++) {
    const input = inputs.nth(i);
    const attrs = [
      await input.getAttribute('id'),
      await input.getAttribute('name'),
      await input.getAttribute('placeholder'),
      await input.getAttribute('aria-label')
    ].filter(Boolean).join(' ');
    if (/security.*code|verification.*code/i.test(attrs)) return input;
  }
  return null;
}

function readEncryptedOtp(requestId) {
  try {
    execFileSync('git', ['fetch', '--quiet', 'origin', 'job-apply-bot'], { stdio: ['ignore', 'ignore', 'ignore'] });
    return execFileSync(
      'git',
      ['show', `origin/job-apply-bot:.job-apply-otp/${requestId}.txt`],
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim();
  } catch {
    return null;
  }
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
  console.log('RESUME_ATTACHED');

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

  console.log('FORM_READY');
  await submit.scrollIntoViewIfNeeded();
  await submit.click();
  console.log('FIRST_SUBMIT_CLICKED');
  await sleep(3000);

  if (await successVisible(page)) {
    console.log('APPLICATION_SUBMITTED_SUCCESSFULLY');
    await browser.close();
    return;
  }

  const securityInput = await findSecurityCodeInput(page);
  if (!securityInput) {
    const captchaChallenge = page.frames().some(f => /recaptcha|captcha/i.test(f.url()) && /challenge|bframe/i.test(f.url()));
    if (captchaChallenge) throw new Error('CAPTCHA_BLOCKED: interactive human verification requested');
    throw new Error('SECURITY_CODE_FIELD_NOT_FOUND_AFTER_SUBMIT');
  }

  console.log('EMAIL_SECURITY_CODE_REQUIRED');

  const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
  });
  const requestId = randomBytes(12).toString('hex');
  const publicKeyB64 = Buffer.from(publicKey, 'utf8').toString('base64');
  console.log(`OTP_REQUEST_ID=${requestId}`);
  console.log(`OTP_PUBLIC_KEY_B64=${publicKeyB64}`);
  console.log('OTP_BRIDGE_WAITING');

  let otp = null;
  const deadline = Date.now() + 8 * 60 * 1000;
  while (Date.now() < deadline && !otp) {
    const encrypted = readEncryptedOtp(requestId);
    if (encrypted) {
      try {
        otp = privateDecrypt(
          {
            key: privateKey,
            padding: constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: 'sha256'
          },
          Buffer.from(encrypted, 'base64')
        ).toString('utf8').trim();
      } catch {
        otp = null;
      }
    }
    if (!otp) await sleep(3000);
  }
  if (!otp) throw new Error('OTP_BRIDGE_TIMEOUT');
  console.log('OTP_RECEIVED_PRIVATELY');

  await securityInput.fill(otp);
  await submit.scrollIntoViewIfNeeded();
  await submit.click();
  console.log('VERIFIED_SUBMIT_CLICKED');
  await sleep(8000);

  if (await successVisible(page)) {
    console.log('APPLICATION_SUBMITTED_SUCCESSFULLY');
    console.log('FINAL_URL:', page.url());
    await browser.close();
    return;
  }

  const text = (await page.locator('body').innerText()).replace(/\s+/g, ' ');
  if (/invalid|incorrect|expired/i.test(text) && /code/i.test(text)) throw new Error('SECURITY_CODE_REJECTED_OR_EXPIRED');
  if (page.frames().some(f => /recaptcha|captcha/i.test(f.url()) && /challenge|bframe/i.test(f.url()))) {
    throw new Error('CAPTCHA_BLOCKED_AFTER_EMAIL_VERIFICATION');
  }
  throw new Error('SUBMISSION_NOT_CONFIRMED_AFTER_EMAIL_VERIFICATION');
})().catch(err => {
  console.error(err.stack || err);
  process.exit(1);
});
