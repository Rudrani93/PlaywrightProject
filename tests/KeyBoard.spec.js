const{test, expect} = require('@playwright/test')

test('KeyBoard Activities Test', async function Test({page}) {
    
await page.goto('https://www.google.com/')
await page.locator("//textarea[@title='Search']").focus()
await page.keyboard.type('Playwright')
//await page.keyboard.press('ArrowLeft')
await page.keyboard.down('Shift')
for(let i=0;i<6;i++)
{
    await page.keyboard.press('ArrowLeft')
    await page.waitForTimeout(1000)
}
await page.keyboard.up('Shift')
await page.waitForTimeout(2000)
await page.keyboard.press('Backspace')
await page.waitForTimeout(3000)
})