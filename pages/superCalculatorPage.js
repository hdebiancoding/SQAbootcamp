function superCalculatorPage(){

    this.input1 = element(by.model('first'));
    this.input2 = element(by.model('second'));
    this.goButton =element(by.id('gobutton'));
    this.tableAll =  element.all(by.repeater('result in memory'));

    this.countRows = function(){
           element.all(by.repeater('result in memory')).count().then(function(result){
            console.log(result);
        })

    };

    this.loopAndAssert = function(){

        var sum= ['15','12','10'];
        var i = 0;      

        element.all(by.repeater('result in memory')).each(function(answer){
            
            answer.element(by.css("td:nth-child(3)")).getText().then(function(results){
                
                console.log(results);
                expect(results).toBe(sum[i]);
                i = i + 1;
            });
        });
    };


};

module.exports = new superCalculatorPage();