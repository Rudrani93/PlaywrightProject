const{test,expect} = require('@playwright/test')

test("Select Values from Dropdown", async function({page}){

await page.goto("https://freelance-learn-automation.vercel.app/signup")

/* await page.locator("#state").selectOption({label:"Tripura"})
await page.waitForTimeout(1000)
await page.locator("#state").selectOption({value:"Goa"})
await page.waitForTimeout(1000)
await page.locator("#state").selectOption({index:4})
const selectedvalues = await page.locator("#state").textContent()
console.log("All options for states "+selectedvalues)
await expect(selectedvalues.includes("Mukesh")).toBeTruthy()
await page.waitForTimeout(3000) */
await page.waitForTimeout(5000)
let state = await page.$("#state")
await page.waitForTimeout(3000)
let allElements = await state.$$("option")
let status = false
for(let i=0;i<allElements.length;i++)
{
    let element = allElements[i]
    let value = await element.textContent()
    console.log("All values of drop down are "+value);
    if(value.includes("Rajasthan"))
    {
        status= true
         break
    }
}

await expect(status).toBeTruthy()
await page.locator("#hobbies").selectOption(['Playing','Reading'])
await page.waitForTimeout(5000)
})