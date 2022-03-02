import WDIOPage from './page';

class LoginPortal extends WDIOPage {
    get inputUserName() {
        return $('#text');
    }
    get inputPassword(){
        return $("#password");
    }
    get btnLogin(){
        return $("#login-button");  
    }
    async loginInPortal (user, password) {
        await await this.inputUserName.isExisting();
        await await this.inputUserName.setValue(user);
        await await this.inputPassword.isExisting();
        await await this.inputPassword.setValue(password);
        await await this.btnLogin.isExisting();
        await await this.btnLogin.click();
    }
    open() {
        return super.open('Login-Portal/index.html');
    }
}
export default new LoginPortal();