const {test, expect}=require('@playwright/test')

test("handling table",async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
const table=await page. locator('productTable')
// total number of rows & columns
const columns= await table. locator('thead tr th')
console. log('Number of columns:', await columns.count())
const rows=await table. locator('tbody tr')
console. log('Number of columns:', await rows.count())
expect(await columns.count()).toBe(4)
expect(await rows.count()).toBe(5)

//2) select check box for product 4
const machedRow= rows.filter({
has: page. locator('td'),
hasText: 'Product 4'

})

await machedRow.locator('input').check()

//4) print all product details using loop
for(let i=0;i<await rows.count(); i++)
{
const row=rows.nth(i);
const tds=row.locator('td')
for(let j=0 ;j< await tds.count()-1; j++)
{
console.log(await tds.nth(j).textContent())
}
}

for(let p=0 ;p< await pages.count(); p++)
{
if(p>0)
{
await pages.nth(p).click()
}
for(let i=0;i<await rows.count(); i++)
{
const row=rows.nth(i);
const tds=row.locator('td' )

for(let j=0 ;j< await tds.count()-1; j++)
{
console.log(await tds.nth(j).textContent())
}
}
}

})

async function selectProduct(rows, page, name)
{
const machedRow= rows.filter({
has: page.locator('td'),
hasText: name

})

await machedRow.locator('input' ).check()
}