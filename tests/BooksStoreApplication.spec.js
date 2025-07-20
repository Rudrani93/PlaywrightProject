const { test, expect } = require('@playwright/test')
const fs = require('fs');
const path = require('path');

test("Login to Bookstore", async function ({ page }) {
    //login to DemoQA
    await page.goto("https://demoqa.com/login")
    await page.locator("#userName").fill("MD")
    await page.locator("#password").fill("Rudrani93@")
    await page.locator("//button[@id='login']").click()

    //Validate login
    await expect(page.locator("//label[contains(text(),'User Name :')]//following::label[1]")).toHaveText("MD")
    await expect(page.locator("//button[.='Log out']")).toBeVisible()

    //Go to Bookstore and Search for Book
    await page.locator("//button[@id='gotoStore']").click()
    await page.locator("//input[@id='searchBox']").fill("Learning JavaScript Design Patterns")
    await page.locator("//input[@id='searchBox']//following::span[1]").click()

    //Validate Book searched for
    await expect(page.locator("//a[contains(@href,'book')]")).toHaveText("Learning JavaScript Design Patterns")
    let bookTitle = await page.locator("//a[contains(@href,'book')]").innerText();
    let author = await page.locator("//a[contains(@href,'book')]//following::div[1]").innerText();
    let publisher = await page.locator("//a[contains(@href,'book')]//following::div[2]").innerText();
    console.log(bookTitle)
    console.log(author)
    console.log(publisher)

    //Store the data in a file
    fs.writeFileSync('book_data.txt', bookTitle);
    let filepath = "./test-results/book_data.txt"
    let data = bookTitle + " " + author + " " + publisher
    fs.writeFileSync(filepath, data);
    await page.locator("//button[.='Log out']").click()

})