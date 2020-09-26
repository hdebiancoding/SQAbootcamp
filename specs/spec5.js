describe('testing', function(){
    it('Open protractor demo website', function(){

        browser.waitForAngularEnabled(false);

        browser.get('https://www.google.com');

        browser.sleep(5000);

        element(by.css("input[name='q']")).sendKeys('testing');

        browser.sleep(5000);

        element(by.css("input[name='btnK']")).click();
        
        browser.sleep(10000);

        //browser.waitForAngularEnabled(true);
        //browser.get('https://juliemr.github.io/protractor-demo/');

    });
});