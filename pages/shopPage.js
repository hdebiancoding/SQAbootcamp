const { element } = require("protractor");

function shopPage(){

    this.clickFirstAdd = function(){
        element.all(by.buttonText('Add')).get(0).click();
    };

    this.assertCheckoutNumber = function(value){
    element(by.id('navbarResponsive')).element(by.css("a[class*='btn-primary']")).getText().then(function(number){

            console.log(number);

            expect(number).toContain(value);
            //expect(number).toMatch(value);
        })
    };

    this.clickCheckout = function(){
        element(by.id('navbarResponsive')).element(by.css("a[class*='btn-primary']")).click();
    }

    this.assertProduct = function(pName){
       
        expect(element(by.linkText(pName)).getText()).toBe(pName); /*.then(function(){
    
            console.log(pName);

        });*/

        /*
        element(by.css("h4[class='media-heading']")).element(by.css("a")).getText().then(function(productName){
    
                console.log(productName);
    
                expect(productName).toMatch(pName);
        })
        */

    };

    this.clickCheckout2 = function(){
        element.all(by.buttonText('Checkout')).get(0).click();
    };

    // country
    this.enterCountryCharacters = function(value){

        element(by.id('country')).sendKeys(value);
    };

    this.selectFirstCountryInList = function(){

        element(by.css("div[class='suggestions']")).element(by.css("a")).getText().then(function(suggestionName){
    
            console.log(suggestionName);
            element(by.css("div[class='suggestions']")).element(by.css("a")).click();

        })

        //element.all(by.buttonText('Checkout')).get(0).click();
    };

    // Purchase
    this.clickPurchase = function(){
        element.all(by.css("input[value='Purchase']")).get(0).click();
        //console.log(element(by.css("input[value='Purchase']")).getText());
    };

};

module.exports = new shopPage();
