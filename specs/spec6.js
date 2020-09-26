describe('testing', function(){
    it('Open protractor demo website', function(){

        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('7');
        element(by.id('gobutton')).click();

        browser.sleep(10000);

        /*
        element(by.css('td[class="ng-binding"]')).getText().then(function(result){

            console.log(result);
        });
        */

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(result){

            console.log(result);
        });

        //expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");

    });
});