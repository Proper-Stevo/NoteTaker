const router = require('express').Router();

const routedNotes = require('./notes');

router.use('/notes', routedNotes);

router.get('/notes');

const path = require('path');

module.exports = router;