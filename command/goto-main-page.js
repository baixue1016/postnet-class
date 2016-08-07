let gotoZipToBar = require('./goto-zip-to-bar');
let gotoBarToZip = require('./goto-bar-to-zip');
let exit = require('./exit');
let invalidInput = require('./invalid input');

class mainPage {
    run() {
        return {
            text: `1.请将zipcode转换为barcode
2.请将barcode转换为zipcode
3.退出
请选择1～3：`,
            newMapping: {
                '1': new gotoZipToBar(),
                '2': new gotoBarToZip(),
                '3': new exit(),
                '#': new invalidInput()
            }
        }
    }
}

module.exports = mainPage;