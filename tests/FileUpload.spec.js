const{test, expect} = require('@playwright/test')

test("File Upload Test", async function({page}) {
    
await page.goto("https://the-internet.herokuapp.com/upload")
await page.locator('#file-upload').setInputFiles('./TestData/ImageFood.jpg')
await page.locator('#file-submit').click()
await page.waitForTimeout(10000)
expect (await page.locator("//h3")).toHaveText('File Uploaded!')




})