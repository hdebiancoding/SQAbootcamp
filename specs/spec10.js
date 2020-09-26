describe('testing', function(){

    function add(a, b)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();

    }

    it('Open protractor demo website', function(){

        browser.get('https://juliemr.github.io/protractor-demo/');

        add(3,7);
        add(8,9);
        add(4,6);

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

        
        // using get(index)

        element.all(by.repeater("result in memory")).get(2).element(by.css("td:nth-child(3)")).getText().then(function(result){

            console.log(result);
        });



    });
});