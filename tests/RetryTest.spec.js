import {test,expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';

test('Page Object Model',async ({page})=>{
   
    //Login
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('T0049','49');
    await page.waitForTimeout(3000);
     

   //HomePage
   const home=new HomePage(page) ;
   await home.addProductToCart("HTC One M9");
   await page.waitForTimeout(5000);
   await home.gotoCart();

   //Cart
   const cart=new CartPage(page);
   await page.waitForTimeout(4000);
   const status=await cart.checkProductInCart('HTC One M9');
   expect (await status).toBe(true);



    

})