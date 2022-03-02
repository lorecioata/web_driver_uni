import login_portal from "../pageobjects/login_portal";

describe('Contact us form', () => {
    it('should open Login Portal page', async () => {
          await login_portal.open();
          await expect(await login_portal.btnLogin).toBeExisting();
    });
    it('should login into portal', async () => {
        await login_portal.open();
        await login_portal.loginInPortal("")

  });

});