const {test,expect}=require('@playwright/test')

test("Recording test",async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
   
    

    await page.locator('a#login2').click();
    await page.waitForTimeout(3000);

    await page.locator('#loginusername').fill("T0049");

    await page.locator('#loginpassword').fill("49");

    await page.locator("button[onclick='logIn()']").click();

    const logoutlink=await page.locator("//a[normalize-space()='Log out']");
    await expect(logoutlink).toBeVisible();
    
});