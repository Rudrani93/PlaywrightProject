const {test, expect}=require('@playwright/test')


test('CheckBoxes',async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com');

const checkboxLocators=[
"//input [@id='monday' and @type='checkbox']",
"//input [@id='sunday' and @type='checkbox']",
"//input[@id='saturday' and @type='checkbox' ]"]

for(const locator of checkboxLocators)

// select multiple checkboxes
await page.locator(locator).check();

for(const locator of checkboxLocators)
// unselect multiple checkboxes which are already selected

if(await page.locator(locator))
await page.locator(locator).uncheck();
})