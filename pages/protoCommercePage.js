function protoCommercePage(){

    this.txtName = element(by.name('name'));
    this.txtEmail = element(by.name('email'));
    this.txtPassword = element(by.id('exampleInputPassword1'));
    this.checkbox1 = element(by.id('exampleCheck1'));
    this.dropdownGender = element(by.id('exampleFormControlSelect1'));
    this.genderMale = element(by.id('exampleFormControlSelect1')).element(by.cssContainingText('option', 'Male'));
    this.genderFemale = element(by.id('exampleFormControlSelect1')).element(by.cssContainingText('option', 'Female'));

    
    
    


    //this.input1 = element(by.model('first'));
    //this.input1 = element(by.model('first'));


    /*
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

    */

};

module.exports = new protoCommercePage();