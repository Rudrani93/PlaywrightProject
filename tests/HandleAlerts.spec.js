const{test, expect} = require('@playwright/test')

test("Testing Alerts", async function testAlerts({page}) {
    
await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

page.on('dialog',async(d) => {

expect(d.type()).toContain("alert")
expect(d.message()).toContain("I am a JS Alert")
await d.accept()

})
await page.locator("//button[text()='Click for JS Alert']").click()
})

test("Testing Confirm Box", async function testConfirm({page}) {
    
await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

page.on('dialog',async(d) => {

expect(d.type()).toContain("confirm")
expect(d.message()).toContain("I am a JS Confirm")
await d.accept()

})
await page.locator("//button[text()='Click for JS Confirm']").click()

})