const {test, expect} = require('@playwright/test');

test('Webtable handling', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table=await page.locator("//table[@id='productTable']");

    //1)Total number of rows and columns

    const columns=await table.locator("thead tr th");
    console.log("Total number of columns: "+await columns.count());

    const rows=await table.locator("tbody tr");
    console.log("Total number of rows: "+await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);


    //2)select check box for project4

    // const matchrow=await rows.filter({
    //     has: page.locator("td"),
    //     hasText: "SmartWatch"
    // })
    // await matchrow.locator("td input").check();
    // await page.waitForTimeout(5000);

    //select multiple products by re-usable function

    // await selectProduct(rows,page,'Smartphone');
    // await selectProduct(rows,page,'Tablet');
    // await selectProduct(rows,page,'Wireless Earbuds');

    //4)print all the products details using loop

    // for(let i=0;i<await rows.count();i++)  //repetation of the rows
    // {
    //     const row=rows.nth(i);
    //     const tds=row.locator('td')
    //     for (let j=0;j<await columns.count()-1;j++)                            //repetition of columns in every row
    //     {
    //         console.log(await tds.nth(j).textContent())


    //     }
    // }


    //pagenation of different pages read data fromm all the pages

    const pages=await page.locator("//ul[@class='pagination']//li//a");
    console.log("Number of pages in the table:",await pages.count())
    for(let p=0;p<await pages.count();p++)
    {
        if(p>0)
        {
            await pages.nth(p).click()
        }
        for(let i=0;i<await rows.count();i++)  //repetation of the row
        {
            const row=rows.nth(i);
            const tds=row.locator('td')
            for (let j=0;j<await columns.count()-1;j++)  //repetition of columns in every row 
            {
                console.log(await tds.nth(j).textContent())
            }
        }
        await  page.waitForTimeout(3000);
        
    }
    await page.waitForTimeout(3000);
    
  



    async function selectProduct(rows,page,name)
    {
        const matchrow=await rows.filter({
        has: page.locator("td"),
        hasText: name
    })
    await matchrow.locator("td input").check();
    
    }
    await page.waitForTimeout(5000);

});  

