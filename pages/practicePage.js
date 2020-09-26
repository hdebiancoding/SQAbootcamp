const { element } = require("protractor");

function practicePage(){

    this.clickHomeLink = function(){
        element(by.linkText('Home')).click();
    };

    this.clickShopLink = function(){
        element(by.linkText('Shop')).click();
    };


    this.name = function(value){
        element(by.name('name')).sendKeys(value);
    };

    this.email = function(value){
        element(by.css('input[class="form-control ng-untouched ng-pristine ng-invalid"]')).sendKeys(value);
    };

    this.password = function(value){
        element(by.id('exampleInputPassword1')).sendKeys(value);
    };

    this.enableCheckbox = function(){
        element(by.id('exampleCheck1')).click();
    };

    // this.selectGender = function(){
    //     element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
    // };

    this.selectGender = function(value){

        if (value == 'Male'){
            element(by.cssContainingText("[id = 'exampleFormControlSelect1'] option", "Male")).click();
        }
        else if (value == 'Female'){
            element(by.cssContainingText("[id = 'exampleFormControlSelect1'] option", "Female")).click();
        };
    };

    this.employmentStatus = function(value){

        if (value == "Student"){
            element.all(by.name('inlineRadioOptions')).get(0).click();
        }

        else if (value == "Employed"){
            element.all(by.name('inlineRadioOptions')).get(1).click();
        };               
        
    };

    this.enterBirthday = function(value){
        element(by.name('bday')).sendKeys(value);
    };

    this.clickSubmitButton = function(){
        element(by.css("input[class*='btn']")).click();
    };

    this.assertSuccessMessage = function(value){
        element(by.css("div[class*='alert-success']")).getText().then(function(success){

            console.log(success);

            expect(success).toContain(value);
            //expect(success).toBe(value);

        })
    };

    this.assertErrorMessage = function(value){
        element(by.css("div[class*='alert-danger']")).getText().then(function(error){

            console.log(error);

            expect(error).toContain(value);

        })
    };

};

module.exports = new practicePage();
