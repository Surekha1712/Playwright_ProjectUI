const {test,expect}=require('@playwright/test')

test('Keyboard Actions',async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

    await page.fill('//textarea[@name="text1"]',"welcome to automation using keyboard actions");

    //Ctrl + A   ----- Select the text
    await page.keyboard.press('Control+A');

    //Ctrl + C  ---- copy the text

    await page.keyboard.press('Control+C');


    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    ///Ctrl + v
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(7000);

})