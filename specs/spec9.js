describe('testing', function(){
    it('Open protractor demo website', function(){

        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('7');
        element(by.id('gobutton')).click();
        //expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");

        element(by.model('first')).sendKeys('8');
        element(by.model('second')).sendKeys('9');
        element(by.id('gobutton')).click();
        //expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("17");

        element(by.model('first')).sendKeys('4');
        element(by.model('second')).sendKeys('6');
        element(by.id('gobutton')).click();
        //expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");

        element.all(by.repeater("result in memory")).count().then(function(result){

            console.log(result);

        });

        
        var sum = ['10', '17', '10'];
        var i = 0;
        element.all(by.repeater("result in memory")).each(function(answer){

            answer.element(by.css("td:nth-child(3)")).getText().then(function(result){

                console.log(result);
                expect(result).toBe(sum[i]);
                i = i + 1;
            });

            
            
        });

    });
});