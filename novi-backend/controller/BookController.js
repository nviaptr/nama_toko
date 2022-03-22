'use strict'

/**
* Class Declaration
* Module Export Class
* Write Static Method
*/

const {Book} = require('../model/Book');

class BookController {
    static FindAlBooks(req, res) {
        Book.showAllBooks((err, data) => {
            if(err) {
                console.log('Controller error');
            } else {
                console.log('data', data);
            }
        })
    }
}

module.exports = {
    BookController,
};