const {test,expect}= require('@playwright/test')

let page;
test.beforeAll(async ({browser})=>{

    page=await browser.newPage(); 
    await page.goto('https://www.demoblaze.com/index.html');
    //await page.waitForLoadState('networkidle');

    //Login
    await page.locator('a#login2').click();
    //await page.waitForTimeout(3000);

    await page.locator('#loginusername').fill("T0049");

    await page.locator('#loginpassword').fill("49");

    await page.locator("button[onclick='logIn()']").click();

});
test.afterAll(async ()=>{
    
    //Logout
    await page.locator("//a[@id='logout2']").click();
    
})
test("Home Page Test",async ({})=>{
    
    //Home page
    const products=await page.$$('.hrefch');
    //expect(products).toHaveLength(9);
})
test('Add Product to cart test',async({})=>{
    
    //Add product to cart
    await page.locator("//a[text()='Samsung galaxy s6']").click();
    await page.locator("//a[@class='btn btn-success btn-lg']").click();
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    } )
    
});