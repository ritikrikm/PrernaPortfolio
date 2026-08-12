const { chromium } = require('playwright');

const JOBS=[
  ['Parsons Junior Signage & Wayfinding Designer','https://parsons.wd5.myworkdayjobs.com/en-US/Search/job/XMLNAME--Junior-Signage---Wayfinding-Designer_R181421'],
  ['IKO Graphic Designer','https://iko.wd3.myworkdayjobs.com/IKO_Careers/job/Mississauga-ON/Graphic-Designer_REQ-12721'],
  ['Cengage Designer, Visual Design','https://cengage.wd5.myworkdayjobs.com/en-US/CengageNorthAmericaCareers/job/Designer--Visual-Design_R2026-803-1'],
  ['Cengage Video/Motion Designer','https://cengage.wd5.myworkdayjobs.com/en-US/CengageNorthAmericaCareers/job/Video-Motion-Designer--REMOTE-_R2026-693'],
  ['Mastercard Motion Designer','https://mastercard.wd1.myworkdayjobs.com/en-US/CorporateCareers/job/Motion-Designer---Client-Training-and-Education-1_R-280741']
];

(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 for(const [name,url] of JOBS){
  const page=await browser.newPage({viewport:{width:1440,height:1200}}); page.setDefaultTimeout(25000);
  try{
   const res=await page.goto(url,{waitUntil:'domcontentloaded',timeout:60000});
   const apply=page.locator('[data-automation-id="adventureButton"]');
   let live=false;
   try{await apply.waitFor({state:'visible',timeout:15000});live=true;}catch{}
   const title=await page.locator('[data-automation-id="jobPostingHeader"]').innerText().catch(()=>page.title());
   const posted=await page.locator('[data-automation-id="postedOn"]').innerText().catch(()=>null);
   const body=(await page.locator('body').innerText()).replace(/\s+/g,' ');
   console.log('VERIFY='+JSON.stringify({name,http:res&&res.status(),live,title:(title||'').trim(),posted:(posted||'').replace(/\s+/g,' ').trim(),url:page.url(),body:body.slice(0,2200)}));
  }catch(e){console.log('VERIFY_ERROR='+JSON.stringify({name,error:String(e.message||e),url:page.url()}));}
  await page.close();
 }
 await browser.close();
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
