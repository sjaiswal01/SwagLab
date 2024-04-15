import { $ } from '@wdio/globals'

class InventoryPage {

    public get appLogo() {
        return $('div.app_logo');
    }

    public get productName() {
        return $$('div.inventory_item_name');
    }

    public get getProductName() {
        return $$('div.inventory_item_name');
    }

    public get defaultSort() {
        return $('span.active_option');
    }
    public get productDropDown() {
        return $('select.product_sort_container');
    }

    public get inventoryItemPrice() {
        return $$('div.inventory_item_price');
    }

    public get addToCart() {
        return $$('button.btn_inventory');
    }

    public verifyAppLogo() {
        return this.appLogo.getText();
    }
    public async defaultSortValue() {
        await this.defaultSort.getText();
    }

    public async getProductList() {
        const defaultSortOrder = await this.defaultSortValue();
        console.log(defaultSortOrder);
        const productName = this.getProductName.map(products => products.getText());
        return productName;
    }

    public async sortProductsByName() {
        const products = (await this.getProductList()).slice();
        console.log(products);
        const sortedValue = products.sort();
        console.log(sortedValue);
        return sortedValue;
    }

    public async highToLowSort() {
        (await this.productDropDown).click();
        const selectDropDown = await this.productDropDown;
        await selectDropDown.selectByVisibleText('Price (high to low)');
        console.log((await this.productDropDown).getText());
        browser.pause(3000);
        const itemPriceList = this.inventoryItemPrice.map(ItemPrice => ItemPrice.getText());
        return itemPriceList;
    }

    public async addItemToCart() {

        const ItemText = await this.addToCart.map(item => item.getText());
        console.log(ItemText);
        console.log(ItemText.length);
        for (let i = 1; i <= ItemText.length; i++) {
            await this.addToCart[i].click();
            let ItemName=this.addToCart[i].getText();
            i == 3;
            break;
            return ItemName;
        }
        
    }

}

export default new InventoryPage();
