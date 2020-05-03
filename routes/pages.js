const express = require('express');
const router = express.Router();

// we create pages routes
router.get('/t&c', (req, res) => {
    res.render('terms&conditions');
});

//route for privacy policies
router.get('/privacy', (req, res) => {
    res.render('Privacy&policies');
});

//route for the services
router.get('/contact', (req, res) => {
    res.render('contact');
});

//router for the team
router.get('/about', (req, res) => {
    res.render('about');
});

//we export the router to the server
module.exports = router;