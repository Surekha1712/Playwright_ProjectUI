const {test,expect}=require('@playwright/test')

//only
test.only('test1',async ({page})=>{
    console.log('This is test1')
})
//skip
test.skip('test2',async ({page})=>{
    console.log('This is test1')
})

test.skip('test3',async ({page , browserName})=>{
     console.log('This is test1')
     if(browserName=='firefox')
     {
        test.skip()
     }
 })

//Fixme
test.skip('test4',async ({page})=>{
    test.fixme()
     console.log('This is test1')
 })
//Fail
test('test5',async ({page})=>{
    test.fail()
     console.log('This is test1')
     expect(1).toBe(1);
 })

//slow
test('test6',async ({page})=>{
    test.slow();
     console.log('This is test1')
     await  page.goto('https://www.demoblaze.com/index.html')
 })