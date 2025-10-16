const {test, expect} = require('@playwright/test');

test ('Handles ',async ({page})=>{

   await  page.goto("https://testautomationpractice.blogspot.com/");

    //Input box 
    await  page.locator("//input[@id='name']").fill("SUREKHA");
    await expect(await page.locator("//input[@id='name']")).toBeVisible();
  
    
    await expect(await page.locator("//input[@id='name']")) .toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();
    await page.waitForTimeout(5000);
    

    //Rdio button    check or uncheck

    await page.locator("//input[@value='male']").check();
    await expect(await page.locator("//input[@value='male']")).toBeChecked();
    await expect(await page.locator("//input[@value='male']").isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@value='female']").isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);


    //Checkboxes

    await page.locator("//input [@id='monday'and @type='checkbox'] ").check();
    await expect(await page.locator("//input [@id='monday'and @type='checkbox']")).toBeChecked();
    await expect(await page.locator("//input [@id='monday'and @type='checkbox']").isChecked()).toBeTruthy();
    await expect(await page.locator("//input [@id='sunday'and @type='checkbox']").isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);


    // //Multiple checkboxes
    const checkboxlocators = [
        "//input[@id='monday'and @type='checkbox']",
        "//input[@id='sunday'and @type='checkbox']",
        "//input[@id='saturday'and @type='checkbox']"
    ];
    //select multiple checkboxes
    for(const locator of checkboxlocators){                

        await page.locator(locator).check();
    }
    for(const locator of checkboxlocators){
        if(await page.locator(locator).isChecked())
            {
            await page.locator(locator).uncheck();
          }

    }



    //Handles Dropdowns
    //Multiple ways to select option from dropdown
    await page.locator("//select[@id='country']").selectOption({ label: 'India' });  //by visible text
    

    //Assertions
    //1)check n umber of options in dropdown
    const options=await page.locator("//select[@id='country']/option");
    await expect(options).toHaveCount(10);

    // //2 approach
    console.log("Number of options in dropdown:", await options.count());
    await expect(await options.count()).toBe(10);

    //3) check presence of value in dropdown
    const countryContent = await page.locator("//select[@id='country']").textContent();
    await expect(countryContent.includes('India')).toBeTruthy();

    //4 )using loop
    const countryOptions = await page.$$("//select[@id='country']/option");
    let status = false;
    for (const option of countryOptions) {
        const value = (await option.textContent()).trim();
        console.log(value);
        if (value.includes('France')) {
            await page.selectOption("//select[@id='country']", { label: value });
            status = true;
            break;
        }
    }
       

//Multi select dropdown options from dropdown
    await page.locator("//select[@id='colors']").selectOption([{label:'White'},{label:'Red'},{label:'Green'}]);
      await page.selectOption("//select[@id='colors']",['Yellow','white','Green']);

      //assertions
      //1) check number of options in dropdown
        const selectedoptions=await page.locator("//select[@id='colors']/option");
        await expect(selectedoptions).toHaveCount(7);

    //2) check number of options in dropdown using js array
    const selectedoptionsArr = await page.$$("//select[@id='colors']/option");
    console.log("Number of options in colors dropdown:", selectedoptionsArr.length);
    await expect(selectedoptionsArr.length).toBe(7);

    //3) check presence of value in dropdown
    const colorsContent = await page.locator("//select[@id='colors']").textContent();
    await expect(colorsContent.includes('White')).toBeTruthy();
    // Only print the result, not the expect object
    console.log("Dropdown contains 'White':", colorsContent.includes('White'));





    await page.waitForTimeout(5000);



});