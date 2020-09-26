var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  /*capabilities:{
        browserName: 'firefox'

    },
    */

  /*specs: ['../specs/dataDrivenJasmineSpec.js'],*/

  specs: ['../specs/protoCommerceSpec.js'],
  onPrepare: function() {

    browser.driver.manage().window().maximize();

    var today = new Date();
    var timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm-' +today.getSeconds()+'s';
    

    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: '../ReportFolder/screenshots ' + timeStamp,
        takeScreenshots: true,
        fixedScreenshotName: false,
        cleanDestination: false,
        /* fileName: 'TestReport ' + timeStamp */
        fileName: 'TestReport',
        fileNameDateSuffix: true
      })
    );


 }
}