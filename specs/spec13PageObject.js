function calculatorPage(){

    this.input1 = element(by.model('first'));
    this.input2 = element(by.model('second'));
    this.goButton =element(by.id('gobutton'));
    this.tableAll =  element.all(by.repeater('result in memory'));
};

module.exports = new calculatorPage();