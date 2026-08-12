const { chromium } = require('playwright');

const URL = 'https://clio.wd3.myworkdayjobs.com/en-US/ClioCareerSite/job/Graphic-Designer--5-Month-Contract-_REQ-5082';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  page.setDefaultTimeout(20000);
  const res = await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);
  console.log('HTTP_STATUS=' + (res && res.status()));
  console.log('TITLE=' + await page.title());
  console.log('FINAL_URL=' + page.url());
  console.log('BODY_HEAD=' + (await page.locator('body').innerText()).replace(/\s+/g,' ').slice(0,1200));

  const applyButtons = page.getByRole('button', { name: /^apply$/i });
  console.log('APPLY_COUNT=' + await applyButtons.count());
  if (await applyButtons.count()) {
    await applyButtons.first().click();
    await page.waitForTimeout(2500);
    console.log('AFTER_APPLY_URL=' + page.url());
  }

  const fields = await page.locator('input, textarea, select').evaluateAll(els => els.map((el,i)=>({
    i, tag:el.tagName, type:el.type, name:el.name, id:el.id, placeholder:el.placeholder,
    required:el.required, aria:el.getAttribute('aria-label')
  })));
  console.log('FIELDS_JSON=' + JSON.stringify(fields));
  const buttons = await page.getByRole('button').allTextContents();
  console.log('BUTTONS_JSON=' + JSON.stringify(buttons.map(x=>x.trim()).filter(Boolean)));
  const links = await page.getByRole('link').allTextContents();
  console.log('LINKS_JSON=' + JSON.stringify(links.map(x=>x.trim()).filter(Boolean).slice(0,80)));
  await browser.close();
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
