const express = require('express');
// construct root path
const path = require('path');
const rootDir = path.dirname(require.main.filename || process.mainModule.filename);
// construct path to auth controller 
const controllerRoot = path.join(rootDir, 'controller');
// get the controllers
const loginController = require(path.join(controllerRoot, 'auth', 'login.js'));
const signupController = require(path.join(controllerRoot, 'auth', 'signup.js'));

// get the authorization controller
const authController = require(path.join(controllerRoot, 'authorization'));

const router = express.Router();
// start registering routes

router.get('/login', authController.authenticate, loginController.getLogin);

// router.post('/login', loginController.postLogin);

// router.get('/signup', signupController.getSignup);

// router.post('/signup', signupController.postSingup);

module.exports = router;