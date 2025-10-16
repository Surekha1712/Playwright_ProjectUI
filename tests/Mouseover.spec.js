const {test,expect}=require('@playwright/test')

test.skip('Mouse Hover',async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/');
   // await page.waitForLoadState("networkidle");

    const computer = await page.locator("//a[text()='Computers ']").first();
    const desktop=await page.locator("//a[text()='Desktops ']").first();

    //mouse hover

    await computer.hover();
    await desktop.hover();

    await page.waitForTimeout(5000);
});

test ("Mouse Double Click", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const btncopy=await page.locator("//button[text()='Copy Text']");

    //double click
    await btncopy.dblclick();

    const f2=await page.locator("//input[@id='field2']");
    await expect(f2).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);

})