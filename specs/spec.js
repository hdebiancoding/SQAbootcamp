describe('testing', function(){
    it('Open protractor demo website', function(){

        //browser.get('https://angularjs.org');
        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('7');

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