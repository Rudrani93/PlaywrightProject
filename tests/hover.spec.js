const{test,expect} = require('@playwright/test')

test("Practice MouseHover", async function({page}){

await page.goto("https://practice.expandtesting.com/hovers")
await page.locator("(//img[contains(@alt,'User Avatar')])[1]").hover({force:true})
await page.locator("(//a[contains(.,'View profile')])[1]").click()
await expect(page.locator("//h2[.='Welcome user1 ']")).toContainText(/user1/)
})