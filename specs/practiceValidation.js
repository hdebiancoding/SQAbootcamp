var using = require('jasmine-data-provider');

describe('Practice Website', function() {

    //pages
    var practicePage = require ('../pages/practicePage');

        it('Submitting ProtoCommerce Screen', function() {

            browser.get('https://rahulshettyacademy.com/angularpractice/');

            practicePage.name('a');
            practicePage.clickSubmitButton();
            practicePage.assertErrorMessage('Name should be at least 2 characters');

            /*var result = element(by.css("div[class*='alert-danger']"));
            expect(result.getText()).toEqual('Name should be at least 2 characters'); */
            
            browser.sleep(5000);
      
    });
    
});
  
  