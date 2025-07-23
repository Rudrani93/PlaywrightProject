const {test, expect}= require('@playwright/test')

test.only('Multiple Files Upload',async ({page})=>{
await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/testfile1.txt','tests/uploadFiles/testfile2.txt']);
await page.waitForTimeout(3000)
expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('testfile1')
expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('testfile2')
})