import contactUsForm from "../pageobjects/contact.us.form";

describe('Contact us form', () => {
    it.skip('should fill and Submit Contact Us form', async () => {
        await contactUsForm.open();
        await contactUsForm.submitContactUs("Te", "st","email@address.com","Bad");
        await expect(contactUsForm.contactReply).toBeExisting();
        await await expect(contactUsForm.contactReply).toHaveTextContaining("Thank You for your Message!");
    });

    it.skip('should show error message for invalid email address', async () => {

        await contactUsForm.open();
        await contactUsForm.submitContactUs("Te", "st","emailaddresscom","Bad");
        await expect (await contactUsForm.errorInvEmail).toHaveTextContaining("Error: Invalid email address");
    }); 
    it('should show error message for empty fields', async () => {

        await contactUsForm.open();
        await contactUsForm.submitContactUs("","","","");
        await expect (await contactUsForm.errorInvEmail).toHaveTextContaining("Error: all fields are required");
    }); 
});
