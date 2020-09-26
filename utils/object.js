function mainPage(){

    this.input1 = element(by.model('first'));
    this.input2 = element(by.model('second'));
    this.goButton =element(by.id('gobutton'));

    this.getColour = function(){
        // code to be executed
        console.log("I am here");
    }

};


/*
var a = new car();
console.log(a.colour);
a.getColour();
*/

module.exports = new mainPage();