const{test, expect} = require('@playwright/test')

test("Testing Iframes", async function({page}) {
    
await page.goto('https://docs.oracle.com/javase/8/docs/api/')
const a = await page.frameLocator("//frame[@name='packageListFrame']")
await a.locator("//a[contains(text(),'java.applet')]").click()
//await page.pause()

})