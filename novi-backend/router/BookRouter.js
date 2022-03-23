'use strict'

/*
* Initialization Express
*/

const express = require('express');
const bookRouter = express.Router();

// controller
const { BookController } = require('../controller/BookController');


// Endpoint : Home
bookRouter.get('/', BookController.FindAlBooks);

// Endpoint : Books By Id
bookRouter.get('/:id', BookController.FindBookById);

// Endpoint : Post Book
bookRouter.post('/post', BookController.AddNewBook);

// Endpoint : Update Book By Id
bookRouter.put('/update/:id', BookController.UpdateBook);

// export module
module.exports = { bookRouter };