describe('testing', function(){
    it('Open protractor demo website', function(){

        browser.get('https://juliemr.github.io/protractor-demo/').then(function(){

            element(by.model('first')).sendKeys('3');
            element(by.model('second')).sendKeys('7');

            element(by.id('gobutton')).click();
            //element(by.css("button[id='gobutton']")).click();
            

            browser.sleep(10000);

            // to define a css use: tagname[attribute='value']
            /*element(by.css("h2[class='ng-binding']")).getText().then(function(result){

                console.log("The result is : " + result);
            });*/

            expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");

        });

    });
});