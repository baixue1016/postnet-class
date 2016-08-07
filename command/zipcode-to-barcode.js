let {zipcodeToBarcode} = require('../core/zip-and-bar-exchange');

class zipToBar {
    run(zipcode){
        let barcode = zipcodeToBarcode(zipcode);
        if(barcode === 'error!!!'){
            return{
                error: 'please input right zipcode'
            }
        }else {
            return{
                text: barcode,
                reset: true
            }
        }
    }
}

module.exports = zipToBar;