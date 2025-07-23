const {test, expect}=require('@playwright/test')


test('DropDowns',async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com');

const content1=await page.locator('#country').textContent()
await expect(content1.includes('India')).toBeTruthy();

//await page.locator("#country").select0ption({label:'India'}); //label/ visible text
//await page.locator("#country").selectOption('India'); //visible text
//await page.locator("#country").selectOption({value: 'uk'}); // by using value
//await page.locator("#country").select0ption({index: 1}); // by using index
//await page.selectOption("#country",'India'); //by text
//Assertions
//1) check number of options in dropdown - Approach1
//const options=await page.locator('#country option')
//await expect(options).toHaveCount(10);
//2) check number of options in dropdown - Appraoch2
const ptions=await page.$$('#country option')
//console.log("Number of options:", options.length)
await expect(options.length).toBe(10);

const options=await page.$$('#country option')
let status=false;
for(const option of options)
{
//console.log(await.option.textContent())
let value=await option.textContent();
if(value.includes('France'))
{
status=true;
break;
}
}

expect(status).toBeTruthy();
await page.waitForTimeout(5000);
})