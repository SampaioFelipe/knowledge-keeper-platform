const express = require('express');
const router = express.Router();

const knowledge = require('./knowledge');

router.use('/knowledge', knowledge);

module.exports = router;

