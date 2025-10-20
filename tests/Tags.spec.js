const {test,expect}=require('@playwright/test')

test("Tests1@sanity",async ({page})=>{
    console.log("This is my test1...")
})
test("Tests2@reg",async ({page})=>{
    console.log("This is my test2...")
})
test("Tests3@reg",async ({page})=>{
    console.log("This is my test3...")
})
test("Tests4@reg",async ({page})=>{
    console.log("This is my test4...")
})
test("Tests5@sanity",async ({page})=>{
    console.log("This is my test5...")
})