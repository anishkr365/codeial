// const express = require('express');
// const router = express.Router();

// const usersConrtoller = require('..controller/users_controller');

// router.get('/profile', usersConrtoller.profile);


// module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controller/users_controller');

router.get('/profile', usersController.profile );


router.get('/signup',usersController.signup);
router.get('/signin',usersController.signin);
router.post('/create', usersController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/signin'},
), usersController.createSession);


module.exports=router;