const { test, expect } = require('@playwright/test')

//skip
test.skip('test2', async({page})=>{
console.log('this is test2')
})

test('test3', async({page, browserName})=>{
console.log('this is test3')
if(browserName === ' chromium')
test.skip()
})

test('test4', async({page})=>{
test.fixme()
console.log('this is test 4 .. ')
})

test('test5', async({page})=>{
test.fail()
console.log('this is test5 .... ')
expect(1).toBe(1);
})

test('test6', async({page, browserName})=>{
console.log('this is test6 .... ')
if(browserName === 'chromium')
test.fail()
})

test('test7', async({page})=>{
//test.slow();
test.setTimeout(5000)
await page.goto('https://www.demoblaze.com/index.html')
console.log('this is test 7 .. ')
})

