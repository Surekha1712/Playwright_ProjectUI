exports.HomePage=class HomePage{
    constructor(page){
        this.page=page;
        this.productlist='//*[@id="tbodyid"]//div//div//div//h4//a';
        this.addTocartbtn="//a[text()='Add to cart']";
        this.cart="//a[@id='cartur']";
    }

    async addProductToCart(productName){
        const productlist = await this.page.$$(this.productlist);
        for(const product of productlist){
            if(productName == await product.textContent()){
                await product.click();
                break;
            }
        }
        await this.page.on('dialog',async dialog=>{
            if(dialog.message().includes('added')){
            await dialog.accept();
            }
        })
        await this.page.locator(this.addTocartbtn).click()
    }
    async gotoCart(){
        await this.page.locator(this.cart).click();

    }

}