const{test, expect} = require('@playwright/test')

test('Autocomplete Test', async function testAutocomplete({page}) {
    
await page.goto("https://google.com/")
await page.locator("//textarea[@title='Search']").fill("playwright")
await page.waitForSelector("//li[contains(@data-view-type,'1')]")
const elements = await page.$$("//li[contains(@data-view-type,'1')]")
for(let i=0;i<elements.length;i++)
{
    const text = await elements[i].textContent()
    if(text.includes('meaning'))
    {
       await elements[i].click()
       await page.waitForTimeout(3000)
        break
    }
}



})