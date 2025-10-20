const {test,expect}=require('@playwright/test')

test.beforeAll(async()=>{
    console.log("This is beforeall Hook....")
})
test.afterAll(async()=>{
    console.log("This is Afterall Hook....")
})
test.beforeEach(async()=>{
    console.log("This is beforeEach Hook....")
})
test.afterEach(async()=>{
    console.log("This is AfterEach Hook....")
})

test.describe.only("Group1",()=>{
    test("Tests1",async ({page})=>{
    console.log("This is my test1...")
})
test("Tests2",async ({page})=>{
    console.log("This is my test2...")
})

})
test.describe("Group2",()=>{
    
test("Tests3",async ({page})=>{
    console.log("This is my test3...")
})
test("Tests4",async ({page})=>{
    console.log("This is my test4...")
})
})