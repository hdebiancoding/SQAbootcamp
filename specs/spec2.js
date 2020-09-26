describe('testing', function(){
    it('Open protractor demo website', function(){

        browser.get('https://angularjs.org');
        browser.get('https://juliemr.github.io/protractor-demo/').then(function(){

            console.log("Hello World");

        });

        //browser.sleep(10000);

        //element(by.model('first')).sendKeys('10');

    });

});