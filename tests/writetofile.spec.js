const{test,expect} = require('@playwright/test')

const path = require('path');

test("Practice MouseHover", async function({page}){

//const directoryPath = './myNewDirectory/subDirectory';
//const filePath = path.join(directoryPath, 'book_data.txt');
const fs = require('fs')
let filepath = "./test-results/book_data.txt"
fs.writeFileSync(filepath, "Megha");
fs.appendFileSync(filepath, " Debnath");

})