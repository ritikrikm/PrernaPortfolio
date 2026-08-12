const { chromium } = require('playwright');

const URL = 'https://jobs.lever.co/magnetforensics/994b2b68-b8e4-40c2-ac0e-4c8485d4acd8';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  page.setDefaultTimeout(20000);
  const res = await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('HTTP_STATUS=' + (res && res.status()));
  console.log('TITLE=' + await page.title());
  console.log('H1=' + ((await page.locator('h1').first().textContent().catch(()=>'')) || '').trim());

  const apply = page.getByText(/apply for this job/i).first();
  if (await apply.count()) {
    await apply.click();
    await page.waitForTimeout(1500);
  }
  console.log('FINAL_URL=' + page.url());

  const fields = await page.locator('input, textarea, select').evaluateAll(els => els.map((el,i)=>({
    i, tag:el.tagName, type:el.type, name:el.name, id:el.id, placeholder:el.placeholder,
    required:el.required, aria:el.getAttribute('aria-label')
  })));
  console.log('FIELDS_JSON=' + JSON.stringify(fields));

  const labels = await page.locator('label').evaluateAll(els => els.map((el,i)=>({
    i, text:(el.innerText||el.textContent||'').trim().replace(/\s+/g,' '), forAttr:el.htmlFor
  })).filter(x=>x.text));
  console.log('LABELS_JSON=' + JSON.stringify(labels));

  const buttons = await page.getByRole('button').allTextContents();
  console.log('BUTTONS_JSON=' + JSON.stringify(buttons.map(x=>x.trim()).filter(Boolean)));
  await browser.close();
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
