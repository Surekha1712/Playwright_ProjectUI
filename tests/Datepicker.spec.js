const {test, expect} = require('@playwright/test');

test("Datepicker",async ({page}) => {

        await page.goto("https://testautomationpractice.blogspot.com/");

        //await page.fill("//input[@id='datepicker']",'17/01/2026');

        //date picker

        const year="2023";
        const month="March";
        const date="17";

        await page.click("//input[@id='datepicker']");
        while(true)
        {
            const currentYear=await page.locator("//span[@class='ui-datepicker-year']").textContent()
            const currentMonth=await page.locator("//span[@class='ui-datepicker-month']").textContent()
            if(currentYear == year && currentMonth == month)
            {
                break;
            }
            await page.locator("//a[@title='Prev']").click();
        }
         const dates=await page.$$("//a[@class='ui-state-default']");

         //date selection using loop
        // for(const dt of dates)
        // {
        //     if(await dt.textContent()==date)
        //     {
        //         await dt.click();
        //         break;
        //     }
        // }

        //date selection without loop
        await page.locator("//a[@class='ui-state-default']//[text()='${date}']");

        await page.waitForTimeout(7000);





});