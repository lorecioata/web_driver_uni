import WDIOPage from './page';

class ContactUs extends WDIOPage {

    get inputFirstName() {
        return $$('.feedback-input')[0];
    }
    get inputLastName() {
        return $$('.feedback-input')[1];
    }
    get inputEmailAddress(){
        return $$('.feedback-input')[2];
    }
    get inputComments(){
        return $$('.feedback-input')[3];
    }
    get btnSubmit() {
        return $$('.contact_button')[1];
    }
    get btnReset() {
        return $$('.contact_button')[0];
    }
    get contactReply() {
        return $('#contact_reply');
    }
    get errorInvEmail(){
        return $('//body');
    }
    async submitContactUs (fName, lName,email, comments) {
        await await this.inputFirstName.setValue(fName);
        await await this.inputLastName.setValue(lName);
        await await this.inputEmailAddress.setValue(email);
        await await this.inputComments.setValue(comments);
        await await this.btnSubmit.click();
    }
    async resetContactUs (fName, lName,email, comments) {
        await await this.inputFirstName.setValue(fName);
        await await this.inputLastName.setValue(lName);
        await await this.inputEmailAddress.setValue(email);
        await await this.inputComments.setValue(comments);
        await await this.btnReset.click();
    }
    open() {
        return super.open('Contact-Us/contactus.html');
    }
}
export default new ContactUs();