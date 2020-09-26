describe('testing', function(){

    var obj = require("./object.js");

    it('Open protractor demo website', function(){

        browser.get('https://juliemr.github.io/protractor-demo/');

        obj.input1.sendKeys('7');

        obj.input2.sendKeys('9');

        obj.goButton.click();

        browser.sleep(10000);

        element(by.css("h2[class='ng-binding']")).getText().then(function(result){

            console.log("The result is : " + result);

        });

        //browser.sleep(10000);
        //console.log(element(by.css("h2[class='ng-binding']")).getText());
        //console.log(browser.get('https://angularjs.org').getTitle());       
        //expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');       
    });

});