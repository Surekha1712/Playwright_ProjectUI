const {test,expect}=require('@playwright/test');

test('Locators Builtin',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // page.getByAltText() to locate an element, usually image, by its text alternative.
    const logo=await page.getByAltText('company-branding');
    await page.waitForLoadState('networkidle');
    await expect(logo).toBeVisible();
    //await page.waitForTimeout(3000);

    // page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
     
// page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button',{type:'Submit'}).click();
    
    // page.getByText() to locate by text content.

    const name=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
    await expect(page.getByText(name)).toBeVisible();
    console.log(name);


    await page.waitForTimeout(6000);



     

});