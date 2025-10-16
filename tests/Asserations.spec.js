const {test,expect}=require('@playwright/test');

test('Asserations',async ({page})=>{

     await page.goto('https://demo.nopcommerce.com/register');

//     //expect(page).toHaveURL()                             Pge Has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    console.log(await page.url());

//     //expect(page).toHaveTitle()                           Page Has Title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    console.log(await page.title());

//     //expect(page).tobeVisible()                        Element is Visible

   const logo= await page.locator("img[alt='nopCommerce demo store']");
   await expect(logo).toBeVisible();
   console.log(await logo.isVisible());

//    //expect(locator).tobeenabled()                     Element is Enabled or control is enabled
   const searchbox=await page.locator("//input[@id='small-searchterms']");
   await expect(searchbox).toBeEnabled();
   console.log(await searchbox.isEnabled());

//    //expect(locator).toBechecked()                     Checkbox is checked
//    //radiobutton
   const radio=await page.locator("//input[@value='M']");
   await radio.click();
   await expect(radio).toBeChecked();
   console.log(await radio.isChecked());
   
//    //checkbox
    const checkbox=await page.locator("//input[@id='Newsletter']");
    await checkbox.check();
    await expect(checkbox).toBeChecked();

//     //expect(locator).toHaveAttribute()                     Element has atttribute
//     //buttons
    const button=await page.locator("//button[@id='register-button']");
    await expect(button).toHaveAttribute('type','submit');

//     //expect(locator).toHaveText()                          Element has text
    await expect(await page.locator("//h1[text()='Register']")).toHaveText('Register');

    const text=await page.locator("//h1[text()='Register']");
    await expect(text).toHaveText('Register');
    console.log(await text.textContent());

//     //expect(locator).toContainstext()               Element contains text
    await expect(await page.locator("//h1[text()='Register']")).toContainText('Reg');

//     //expect(locator).toHaveValue()                      Element has value
    const email=await page.locator("//input[@id='Email']");
    await email.fill("email@email.com");
    await expect(email).toHaveValue('email@email.com');
    console.log(await email.inputValue());
});

test ('soft Asserations',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    //hard assertions

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
    const cart= await expect(page.locator("//a[normalize-space()='Cart']")).toBeVisible();
    console.log(await cart);

    //soft assertions
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page.locator(".navbar-brand")).toBeVisible();
    console.log(await page.locator(".navbar-brand").isVisible());
    const contact= await expect.soft(page.locator("//a[normalize-space()='Contact']")).toBeVisible();
    console.log(await contact);


});
