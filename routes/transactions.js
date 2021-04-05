const express = require('express');
const router = express.Router();
const { getTransactions } = require('../controllers/transactions')

router
    .route('/')
    .get(getTransactions);

router.get('/', (req, res) => res.send('Hello There'));

module.exports = router;