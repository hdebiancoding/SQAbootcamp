describe('testing', function(){
    it('Open protractor demo website', function(){

        browser.waitForAngularEnabled(false);

        browser.get('https://google.com');

        browser.waitForAngularEnabled(true);


        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('7');

        element(by.id('gobutton')).click();
            

        browser.sleep(10000);

        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");

    });
});