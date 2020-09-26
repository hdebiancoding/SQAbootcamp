describe('testing', function(){

    var jsData = require("./data.js");

    it('Open protractor demo website', function(){

        browser.get('https://juliemr.github.io/protractor-demo/').then(function(){

            element(by.model('first')).sendKeys(jsData.data.firstInput);
            element(by.model('second')).sendKeys(jsData.data.secondInput);

            element(by.id('gobutton')).click();

            browser.sleep(10000);

            expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(jsData.data.result);

        });

    });
});