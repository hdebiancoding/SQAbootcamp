var using = require("jasmine-data-provider");

describe('testing', function(){

    var jasmineData = require("../data/dataJasmine.js");

    using(jasmineData.data, function(dataSet, description) {
    it('Open protractor demo website ' + description, function(){

        browser.get('https://juliemr.github.io/protractor-demo/').then(function(){

            element(by.model('first')).sendKeys(dataSet.firstInput);
            element(by.model('second')).sendKeys(dataSet.secondInput);

            element(by.id('gobutton')).click();

            browser.sleep(5000);

            expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(dataSet.result);
            expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('7');
            expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(dataSet.result);

        });
    });

    });

});