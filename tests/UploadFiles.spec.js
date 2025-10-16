const {test,expect}=require('@playwright/test')

test.skip('Upload Single file',async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com');
     await page.waitForTimeout(7000);
    await page.locator("//a[text()='File Upload']").click();
    await page.locator("//input[@id='file-upload']").click()
    await page.locator("//input[@id='file-upload']").setInputFiles('tests/uploadFiles/testfile.xlsx');
    await page.waitForTimeout(7000);
})
test('Multiple Files',async ({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator("//input[@id='filesToUpload']")
               .setInputFiles(['tests/uploadFiles/testfile.xlsx',
                               'tests/uploadFiles/testfile2.xlsx']);
    await page.waitForTimeout(5000);
    expect(await page.locator("//ul[@id='fileList']//li[1]")).toHaveText('testfile.xlsx');
    expect(await page.locator("//ul[@id='fileList']//li[2]")).toHaveText('testfile2.xlsx');  
    await page.waitForTimeout(7000);

    //Removing files
    await page.locator("//input[@id='filesToUpload']").setInputFiles([]);
    await page.waitForTimeout(5000);

    expect(await page.locator("//ul[@id='fileList']//li[1]")).toHaveText('No Files Selected');
    await page.waitForTimeout(7000);
})