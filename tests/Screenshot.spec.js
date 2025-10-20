const {test,expect}=require('@playwright/test')

test("Screenshot page test",async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'HomePage.png'})

});
test("Full page screenshot",async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'FullPage.png',fullPage:true})

});
test(" Element screenshot",async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
    await page.locator("//div[@class='details']").first(3).screenshot({path:'tests/Screenshots/'+Date.now()+'MacBook.png'})


});