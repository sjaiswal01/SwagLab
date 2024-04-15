import { expect } from '@wdio/globals';
import InventoryPage from '../pageObject/InventoryPage';
import LoginPage from '../pageObject/LoginPage';
import LogOutPage from '../pageObject/LogOutPage';

describe('My Login application', () => {
   it.skip('Verify "standard_user" & "performance_glitch_user” is able to do successful login and land on home page and do logout', async () => {
        await LoginPage.open();
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await browser.maximizeWindow(); // Maximize the browser window
        let appLogoText = await InventoryPage.verifyAppLogo(); // Get the text of the application logo
        console.log(appLogoText);
        await expect(appLogoText).toContain("Swag Labs"); // Assert that the application logo text contains "Swag Labs"
        await LogOutPage.logout();
        expect(await LoginPage.open()).toHaveText('https://www.saucedemo.com/');
    });

    it.skip('Verify "locked_out_user" login fails and assert error on login screen.', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await browser.maximizeWindow(); // Maximize the browser window
        let errorText = await LoginPage.getErrorText(); // Get the error message for invalid user
        console.log(errorText);
        await expect(errorText).toContain("Epic sadface: Sorry, this user has been locked out."); // Assert that the error message text contains "Swag Labs"
        
    });

});


