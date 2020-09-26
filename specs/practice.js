var using = require('jasmine-data-provider');

describe('Practice Website', function() {

    //pages
    var practicePage = require ('../pages/practicePage');

    //data
    var practiceData = require ('../data/practiceData.js');

    using(practiceData.data, function (dataSet, description) {

        it('Submitting ProtoCommerce Screen', function() {

            browser.get('https://rahulshettyacademy.com/angularpractice/');

            practicePage.name(dataSet.name);
            practicePage.email(dataSet.email);
            practicePage.password(dataSet.password);
            practicePage.enableCheckbox();
            practicePage.selectGender(dataSet.gender);
            practicePage.employmentStatus(dataSet.eStatus);
            practicePage.enterBirthday(dataSet.bday);
            practicePage.clickSubmitButton();
            practicePage.assertSuccessMessage(dataSet.successMessage);
      
        });

    });
    
});
  
  