'use strict'

/*
* Class Declaration
* Module Export Class
* Write Static Method
*/

class Controller {
    static Homepage(req, res) {
        res.send('Hello ini dari Controller');

    }
}

module.exports = {
    Controller,
};