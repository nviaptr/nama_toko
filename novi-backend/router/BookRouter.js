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

// export module
module.exports = { bookRouter };