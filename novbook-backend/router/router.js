'use strict'

/*
* Initialization Express
*/


// controller
const express = require('express');
const { Controller } = require('../controller/Controller');
const router = express.Router();


// Book Router
const {bookRouter} = require('./BookRouter');

// Endpoint : Home
router.get('/', Controller.Homepage);

// Endpoint : Books
router.use('/books', bookRouter);

// export module
module.exports = { router };