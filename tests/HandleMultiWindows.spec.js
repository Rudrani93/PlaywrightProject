const{test, expect, chromium} = require('@playwright/test')

test("Testing Multi Windows", async () => {
    
const browser = await chromium.launch()    
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://freelance-learn-automation.vercel.app/login")
const pagePromise = context.waitForEvent('page')
await page.locator("(//*[name()='svg'])[4]").click()
const newPage = await pagePromise
await newPage.waitForTimeout(3000)
await newPage.locator("//font[text()='Log in']").isVisible()
await newPage.close()
await page.locator("#email1").fill("admin@email.com")
await page.waitForTimeout(3000)
await browser.close()
})