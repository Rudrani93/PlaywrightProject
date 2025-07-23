const {test, expect}= require('@playwright/test')


test ('Drag and Drop', async ({page})=>{

await page.goto('https://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
const italy=await page.locator('#box1OO')

//Appraoch 1
await rome.hover()
await page.mouse.down()

await italy.hover()
await page.mouse.up()
//Appraoch 2
await rome.dragTo(italy)

//WASHINGTON --- > US
const washington=await page.locator('#box3')
const usa=await page.locator('#box103')
await washington.dragTo(usa)
await page.waitForTimeout(5000)
})