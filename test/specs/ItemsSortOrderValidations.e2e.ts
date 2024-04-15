import { expect } from '@wdio/globals';
import InventoryPage from '../pageObject/InventoryPage';
import LoginPage from '../pageObject/LoginPage';

describe('Verify default sort order', () => {
    it.skip(' Verify the items are in default sort order', async () => {
        await LoginPage.open();
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await browser.maximizeWindow(); // Maximize the browser window
        let initialProductList = await InventoryPage.getProductList();
        let sortedProductOrder= await InventoryPage.sortProductsByName();
        expect(initialProductList).toEqual(sortedProductOrder);

    });

    it.skip('Verify user to able to change sort order to High to Low', async () => {
        await LoginPage.open();
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await browser.maximizeWindow(); // Maximize the browser window
        let highToLowPricewise = await InventoryPage.highToLowSort();
        console.log("Sorting value: "+ highToLowPricewise);
        let sortedPriceList= highToLowPricewise.sort((a, b) => (parseInt(a) - parseInt(b)));
        console.log("Sorting value after sort fun: "+ sortedPriceList);
        expect(highToLowPricewise).toEqual(sortedPriceList);

    });
});