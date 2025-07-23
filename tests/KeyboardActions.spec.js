const {test, expect}= require('@playwright/test')


test ('KeyBoard actions', async ({page})=>{

await page.goto("https://gotranscript.com/text-compare")

//await page.locator('name="text1"').fill("welcome to autoamtion");

await page.fill('name="text1"', 'welcome to automation')
//Ctrl + A - Select the text
await page.keyboard.press('Control+A')
//Ctrl + C - copy the text
await page.keyboard.press('Control+C')

await page.keyboard.down('Tab')
await page. keyboard.up('Tab')

await page.keyboard.press('Control+V')
})