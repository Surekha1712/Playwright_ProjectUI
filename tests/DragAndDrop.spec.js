const {test,expect}=require('@playwright/test')

test ('Drag And Drop',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const text=await page.locator("//div[@id='draggable']");
    const drop=await page.locator("//div[@id='droppable']");

    //Approach 1
    // await text.hover();
    // await page.mouse.down();
    

    // await drop.hover()
    // await page.mouse.up();


    //Approach 2
    await text.dragTo(drop);

    




    await page.waitForTimeout(5000);



})