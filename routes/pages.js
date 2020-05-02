const express = require('express');
const router = express.Router();

// we create pages routes
router.get('/t&c', (req, res) => {
    res.render('terms&conditions');
});

//route for privacy policies
router.get('/privacy', (req, res) => {
    res.send('Priva');
});

//route for the services
router.get('/services', (req, res) => {
    res.send('Services');
});

//router for the team
router.get('/about', (req, res) => {
    res.send('About the team');
});

//we export the router to the server
module.exports = router;