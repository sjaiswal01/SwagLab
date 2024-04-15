import { $ } from '@wdio/globals'
import InventoryPage from '../pageObject/InventoryPage';
class CartPage{

    public get shoppingCartLink() {
        return $('a.shopping_cart_link');
    }

    public get highPriceValue(){
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }
    public get lowPriceValue(){
        return $('#add-to-cart-sauce-labs-onesie');
    }

    public get checkoutBtn(){
        return $('#checkout');
    }


    public async ShoppingCart(){
      (await this.shoppingCartLink).click();
      const Items= await InventoryPage.productName.map(item=>item.getText());
      return Items;
    }

    public async addHighestLowestValue(){
        let highToLowPricewise = await InventoryPage.highToLowSort();
        console.log("Sorting value: "+ highToLowPricewise);
        let sortedPriceList= highToLowPricewise.sort((a, b) => (parseInt(a) - parseInt(b)));
        console.log(sortedPriceList);
        (await this.highPriceValue).click();
        (await this.lowPriceValue).click();

    }

    public async checkoutPage(){
        (await this.checkoutBtn).click();
    }
 
}
export default new CartPage();