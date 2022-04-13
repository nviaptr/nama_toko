'use strict'

const res = require('express/lib/response');
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
               console.log('error');
            } else {
                res.json({
                    title: 'API Backend Toko Buku',
                    message: 'Koleksi Buku',
                    status: 200,
                    data,
                });
            }
        });
    }
    static FindBookById(req, res) {
        // console.log('ini id', req.params.id);
        const { id } = req.params;
        // console.log(id);

        Book.showBookById(id, (err, data) => {
            if(err) {
                console.log(err);
            } else {
                res.json({
                    title: 'API backend toko buku',
                    message: 'koleksi buku',
                    status: 200,
                    data
                })
            }
        })
    }
    static AddNewBook(req, res) {
        
    }
    static UpdateBook(req, res) {
        
    }
}



module.exports = {
    BookController,
};