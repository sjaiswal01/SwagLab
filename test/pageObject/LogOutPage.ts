import { $ } from '@wdio/globals'

class LogOutPage{

    public get menu()
    {
        return $('div.bm-burger-button');
    }

    public get logoutBtn(){
        return $('#logout_sidebar_link');
    }

    public async logout (){

        await this.menu.click();
        (await this.logoutBtn).click();
    }

}
export default new LogOutPage();