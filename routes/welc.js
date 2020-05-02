const express = require('express');
const router = express.Router();

//create a home route
router.get('/', (req, res) => {
    res.render('welcome');
});

//export the router to the server
module.exports = router;