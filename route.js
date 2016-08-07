let mainPage = require('./command/goto-main-page');

let defultMapping = {
    '#': new mainPage()
};

class route {
    constructor() {
        this.mapping = defultMapping;
    }
    deal(input){
        let command = this.mapping[input]|| this.mapping['#'];
        let response = command.run(input);

        if(response.error) {
            return{
                text: response.error
            }
        }
        if(response.reset) {
            this.mapping = defultMapping;
            return {
                text: response.text,
                rerun: true
            }
        }
        if(response.newMapping) {
            this.mapping = response.newMapping;
            return{
                text:response.text
            }
        }

        return{
            text: response.text
        }
    }
}

module.exports = route;