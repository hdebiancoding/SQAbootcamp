describe('testing', function(){

    function performOperation(a, b, op)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        element.all(by.tagName('option')).each(function(result){

            result.getAttribute('value').then(function(values){

                if(values == op)
                {
                    result.click();
                }

            });
        });

        element(by.id('gobutton')).click();

    }

    it('Open protractor demo website', function(){

        browser.get('https://juliemr.github.io/protractor-demo/');


        element.all(by.tagName('option')).each(function(result){

            result.getAttribute('value').then(function(values){

                console.log(values);

            })

        });

        performOperation(5, 8, 'MULTIPLICATION');
        performOperation(3, 9, 'SUBTRACTION');
        performOperation(1, 7, 'MODULO');     
        
        element.all(by.repeater("result in memory")).each(function(answer){

            answer.element(by.css("td:nth-child(3)")).getText().then(function(result){

                console.log(result);
            });           
            
        });       

    });
});