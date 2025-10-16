const  {test, expect} = require('@playwright/test');

test.skip('Alerts', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window to handel alert
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toBe('I am an alert box!');
        await dialog.accept();
        
    });
    await page.click("//button[text()='Simple Alert']");
    await page.waitForTimeout(5000);

});

test.skip('Confiramation dialog alert with ok and cancel', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window to handel alert
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toBe('Press a button!');
        await dialog.accept(); //click on ok
        //await dialog.dismiss();//close by using cancel
        
    });
    await page.click("//button[text()='Confirmation Alert']");

    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);

});

test('Prompt dialog alert with ok and cancel', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window to handel alert
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('SUREKHA'); //click on ok and pass value to text box
        
    });
    await page.click("//button[text()='Prompt Alert']");

    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello SUREKHA! How are you today?');
    await page.waitForTimeout(5000);

});
