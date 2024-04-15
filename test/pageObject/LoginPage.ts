import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {
    
    public get inputUsername () {
        return $('#user-name');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnLogin () {
        return $('#login-button');
    }

    public get errorMsg (){
        return $('h3[data-test="error"]');
    }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    public open () {
        return super.open();
    }

    public getErrorText (){

        return this.errorMsg.getText();
    }
}

export default new LoginPage();
