let barToZip = require('./barcode-to-zipcode');

class gotoBarToZip {
    run(){
        return{
            text: 'please input barcode',
            newMapping:{
                '#': new barToZip()
            }
        }
    }
}

module.exports = gotoBarToZip;