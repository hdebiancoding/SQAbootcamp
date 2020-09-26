describe('testing', function(){

    function performOperation(a, b)
    {
        var count = 0;
        var i = 0;

        element.all(by.css('option')).count().then(function(result){

            count = result;
            console.log(result);

        });

        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        while(i < count)
        {
            element.all(by.css('option')).get(i).click();
            i = i + 1 ;
            element(by.id('gobutton')).click();

        }
         
                /*
        element.all(by.css('option')).each(function(element, index) {
            // Will print 0 First, 1 Second, 2 Third.
            element.getText().then(function (text) {
                console.log(index, text);
                element.get(index).click();
                element(by.id('gobutton')).click();
             

            });
          });

        */


        //element.all(by.model('operator')).get(i).click();
        //i = i + 1;

        //element(by.model('operator')).element(by.css('option[value="MULTIPLICATION"]')).click();
        


    }

    it('Open protractor demo website', function(){

        browser.get('https://juliemr.github.io/protractor-demo/');


        /*element.all(by.repeater("result in memory")).get(2).element(by.css("td:nth-child(3)")).getText().then(function(result){

            console.log(result);
        });
        */

        performOperation(3,7);

/*        element.all(by.repeater("result in memory")).count().then(function(result){

            console.log(result);

        });
*/
        
        element.all(by.repeater("result in memory")).each(function(answer){

            answer.element(by.css("td:nth-child(3)")).getText().then(function(result){

                console.log(result);
            });           
            
        });       


    });
});