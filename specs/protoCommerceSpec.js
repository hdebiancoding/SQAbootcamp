describe('Super Calculator Screen', function() {

    var superCommercePageObj = require("../pages/protoCommercePage.js");

    it('Happy Path Add Test', function() {

        browser.get('https://rahulshettyacademy.com/angularpractice/');

        superCommercePageObj.txtName.sendKeys('Hanan');
        superCommercePageObj.txtEmail.sendKeys('Hanan@gmail.com');
        superCommercePageObj.txtPassword.sendKeys('12345');
        superCommercePageObj.checkbox1.click();
        superCommercePageObj.genderFemale.click();

        browser.sleep(5000);

      
    });
    
});