'use strict'

/*
* Class Declaration
* Module Export Class
* Write Static Method
*/

class BookController {
    static FindAlBooks(req, res) {
        res.send('Hello ini dari BookController');

    }
}

module.exports = {
    BookController,
};