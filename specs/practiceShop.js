var using = require('jasmine-data-provider');

describe('Practice Website', function() {

    //pages
    var practicePage = require ('../pages/practicePage');
    var shopPage = require ('../pages/shopPage');

        it('Submitting Shop Screen', function() {

            browser.get('https://rahulshettyacademy.com/angularpractice/');

            practicePage.clickShopLink();

            //browser.sleep(5000);

            shopPage.clickFirstAdd();
            shopPage.clickFirstAdd();

            browser.sleep(5000);

            //shopPage.assertCheckoutNumber('2');

            shopPage.clickCheckout();

            browser.sleep(5000);

            //shopPage.assertProduct('iphone X');

            browser.sleep(5000);

            shopPage.clickCheckout2();

            browser.sleep(5000);

            shopPage.enterCountryCharacters('be');

            //browser.sleep(5000);

            // Belarus
            shopPage.selectFirstCountryInList();

            browser.sleep(5000);

            shopPage.clickPurchase();

            browser.sleep(5000);


            // suggestions


    });
    
});
  
  