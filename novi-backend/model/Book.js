'use strict'

/*
* SQL Init from Config
*/

const sql = require('../config/db');

class Book {
    constructor(book_id, book_label, book_title, book_author, book_gendre, book_publisher, book_isbn, book_year, book_price, book_stock, created, update) {
        this.book_id = book_id;
        this.book_label = book_label;
        this.book_title = book_title;
        this.book_author = book_author;
        this.book_gendre = book_gendre;
        this.book_publisher = book_publisher;
        this.book_isbn = book_isbn;
        this.book_year = book_year;
        this.book_price = book_price;
        this.book_stock = book_stock;
        this.created = created;
        this.update = update;

    }

    static showAllBooks(result) {
        let sqlQuery = `SELECT * FROM book`;
        sql.query(sqlQuery, (err, res) => {
            if(err) {
                console.log('This is Err => /n', err);
                result(err, null);
            } else {
                let rawData = res;
                let books = [];
                let book;
                rawData.forEach(eachData => {
                    book = new Book(
                        eachData.book_id, 
                        eachData.book_label, 
                        eachData.book_title, 
                        eachData.book_author, 
                        eachData.book_gendre, 
                        eachData.book_publisher, 
                        eachData.book_isbn, 
                        eachData.book_year, 
                        eachData.book_price, 
                        eachData.book_stock, 
                        eachData.created_at, 
                        eachData.update_at,
                        )
                        books.push(book);
                });
                console.log('result', books);
                result(null, books);
            }
        });
    }

    static showBookById(id, result) {
        console.log(id, 'model');
        let sqlQuery = `SELECT * FROM book WHERE book_id = ${id}`;
        sql.query(sqlQuery, (err, res) => {
            if(err) {
                console.log('error', err);
                result(err, null);
            } else {
                let rawData = res;
                let books = [];
                let book;
                rawData.forEach(eachData => {
                    book = new Book(
                        eachData.book_id, 
                        eachData.book_label, 
                        eachData.book_title, 
                        eachData.book_author, 
                        eachData.book_gendre, 
                        eachData.book_publisher, 
                        eachData.book_isbn, 
                        eachData.book_year, 
                        eachData.book_price, 
                        eachData.book_stock, 
                        eachData.created_at, 
                        eachData.update_at,
                        )
                        books.push(book);
                });
                console.log('result', books);
                result(null, books);
            }
        });
    }

    
}

/*
* Static Method
* Show all books
* Show books by id
* Post new book

* Update book data
* Delete book
*/
;
/*
    * SQL Connection
    * Query sql command
    * Get result
    * Change to object instance
    * send to book controller
    * */


   



module.exports = {
    Book
}