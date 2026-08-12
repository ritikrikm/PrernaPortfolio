const { chromium } = require('playwright');

const JOB_URL = 'https://job-boards.greenhouse.io/domains/jobs/7773448003';
const IDS = [
  'country',
  'question_31057599003',
  'question_31057600003',
  'question_31057601003',
  'question_31226868003',
  'question_31057603003'
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  page.setDefaultTimeout(15000);

  console.log('Opening:', JOB_URL);
  const response = await page.goto(JOB_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('HTTP status:', response && response.status());
  console.log('Final URL:', page.url());
  console.log('Title:', await page.title());
  await page.waitForTimeout(2000);

  for (const id of IDS) {
    const input = page.locator(`#${id}`);
    console.log(`\n=== OPTIONS FOR ${id} ===`);
    if (await input.count() === 0) {
      console.log('INPUT_NOT_FOUND');
      continue;
    }
    await input.scrollIntoViewIfNeeded();
    await input.click({ force: true });
    await page.waitForTimeout(300);
    const options = await page.getByRole('option').allTextContents().catch(() => []);
    console.log(JSON.stringify(options.map(x => x.trim()).filter(Boolean)));
    await page.keyboard.press('Escape').catch(() => {});
    await page.waitForTimeout(150);
  }

  await page.screenshot({ path: 'tucows-options.png', fullPage: true });
  await browser.close();
})().catch(err => {
  console.error(err.stack || err);
  process.exit(1);
});
