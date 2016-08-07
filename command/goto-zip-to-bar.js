let zipToBar = require('./zipcode-to-barcode');

class gotoZipToBar {
    run(){
        return{
            text: 'please input zipcode',
            newMapping:{
                '#': new zipToBar()
            }
        }
    }
}

module.exports = gotoZipToBar;