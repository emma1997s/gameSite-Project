const express = require('express');
const router = express.Router();

// we create pages routes
router.get('/t&c', (req, res) => {
    res.render('terms&conditions');
});

//route for privacy policies
router.get('/privacy', (req, res) => {
    res.render('privacy&policies');
});

//route for the services
router.get('/contact', (req, res) => {
    res.render('contact');
});

//router for the team
router.get('/about', (req, res) => {
    res.render('about');
});


//route for the applications
router.get('/applications', (req, res) => {
    res.render('applications');
});


//route for sports games
router.get('/sports_games', (req, res) => {
    res.render('sports_bball_soccer_football');
});


//route for the action games 
router.get('/action_games', (req, res) => {
    res.render('action_games');
});


//route for the shooting/fps games
router.get('/shooting_games', (req, res) => {
    res.render('shooting_fps_games');
});

//route for racing games
router.get('/racing_games', (req, res) => {
    res.render('racing_games');
});

//route for 3d Animation games
router.get('/3dAnimation_games', (req, res) => {
    res.render('3d_animation_games');
});

//route for adventure  games
router.get('/adventure_games', (req, res) => {
    res.render('adventure');
});

//we export the router to the server
module.exports = router;