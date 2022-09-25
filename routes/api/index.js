const router = require('express').Router();

const routedNotes = require('./notes');

router.use('/notes', routedNotes);

module.exports = router;