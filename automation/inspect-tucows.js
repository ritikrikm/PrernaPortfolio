const { chromium } = require('playwright');

const JOB_URL = 'https://job-boards.greenhouse.io/domains/jobs/7773448003';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  page.setDefaultTimeout(15000);

  console.log('Opening:', JOB_URL);
  const response = await page.goto(JOB_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('HTTP status:', response && response.status());
  console.log('Final URL:', page.url());
  console.log('Title:', await page.title());

  await page.waitForTimeout(2500);

  const h1 = await page.locator('h1').first().textContent().catch(() => null);
  console.log('H1:', h1 && h1.trim());
  console.log('Submit buttons:', await page.getByRole('button', { name: /submit application/i }).count());

  const fields = await page.locator('input, textarea, select').evaluateAll((els) => els.map((el, i) => ({
    i,
    tag: el.tagName,
    type: el.getAttribute('type'),
    name: el.getAttribute('name'),
    id: el.id,
    placeholder: el.getAttribute('placeholder'),
    ariaLabel: el.getAttribute('aria-label'),
    required: el.required,
    value: el.value
  })));
  console.log('FIELDS_JSON=' + JSON.stringify(fields));

  const labels = await page.locator('label').evaluateAll((els) => els.map((el, i) => ({
    i,
    text: (el.innerText || el.textContent || '').trim().replace(/\s+/g, ' '),
    forAttr: el.getAttribute('for')
  })).filter(x => x.text));
  console.log('LABELS_JSON=' + JSON.stringify(labels));

  const buttons = await page.getByRole('button').evaluateAll((els) => els.map((el, i) => ({
    i,
    text: (el.innerText || el.textContent || '').trim().replace(/\s+/g, ' '),
    ariaLabel: el.getAttribute('aria-label'),
    type: el.getAttribute('type')
  })).filter(x => x.text || x.ariaLabel));
  console.log('BUTTONS_JSON=' + JSON.stringify(buttons));

  const comboCount = await page.getByRole('combobox').count();
  console.log('COMBOBOX_COUNT=' + comboCount);
  for (let i = 0; i < comboCount; i++) {
    const combo = page.getByRole('combobox').nth(i);
    const attrs = await combo.evaluate(el => ({
      name: el.getAttribute('name'),
      id: el.id,
      ariaLabel: el.getAttribute('aria-label'),
      ariaControls: el.getAttribute('aria-controls'),
      placeholder: el.getAttribute('placeholder'),
      value: el.value
    })).catch(() => ({}));
    console.log(`COMBO_${i}=` + JSON.stringify(attrs));
  }

  await page.screenshot({ path: 'tucows-form.png', fullPage: true });
  console.log('Saved tucows-form.png');
  await browser.close();
})().catch(err => {
  console.error(err.stack || err);
  process.exit(1);
});
