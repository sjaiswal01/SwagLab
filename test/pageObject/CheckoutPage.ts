import { $ } from '@wdio/globals'

class CheckoutPage{

public get continueBtn(){
    return $('#continue');
}

public get FName(){
    return $('#first-name');
}

public get LName(){
    return $('#last-name');
}

public get postalCode(){
    return $('postal-code');
}

public get errorMessageContainer(){
    return $('div.error-message-container');
}

public getTotalPrice(){
    return $('div.summary_total_label');
}

public get finishBtn(){
    return $('#finish');
}

public get orderConfiramtion(){
    return $('h2.complete-header');
}

public get backToHome(){
    return $('#back-to-products');
}

public async VerifyErrorMessage(){
   
    (await this.continueBtn).click();
    const errorMsg1= await this.errorMessageContainer.getText();
    if(errorMsg1=='Error: First Name is required')
      (await this.FName).setValue('Simmi');

    (await this.continueBtn).click();
      const errorMsg2= await this.errorMessageContainer.getText();
      if(errorMsg2=='Error: Last Name is required')
        (await this.LName).setValue('Jaiswal');

    (await this.continueBtn).click();
        const errorMsg= await this.errorMessageContainer.getText();
        if(errorMsg=='Error: Postal Code is required')
          (await this.postalCode).setValue('201301');
}

public async VerifyTotalPrice(){
    (await this.continueBtn).click();
    const totalPrice= (await this.getTotalPrice()).getText();
   console.log(totalPrice);
}

public async OrderConfirmationPage(){
    (await this.finishBtn).click()
    const confirmationText= await this.orderConfiramtion.getText();
    return confirmationText;
}

public async backToHomePage(){
    (await this.backToHome).click();
}


}
export default new CheckoutPage;