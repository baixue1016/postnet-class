let {barcodeToZipcode} = require('../core/zip-and-bar-exchange');

class barToZip {
    run(barcode){
        let zipcode = barcodeToZipcode(barcode);
        if(zipcode === 'error!!!'){
            return{
                error: 'please input right zipcode'
            }
        }else {
            return{
                text: zipcode,
                reset: true
            }
        }
    }
}

module.exports = barToZip;
