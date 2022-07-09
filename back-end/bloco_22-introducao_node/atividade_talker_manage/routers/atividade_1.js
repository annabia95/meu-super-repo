const express = require('express');

const router = express.Router();

const crypto = require('crypto');

const middlewares = require('../middlewares')


router.post('/register', middlewares.loginValidation, (_req, res) => {
    return res.status(201).json({ "message": "user created" });
});

/* router.post('/login', middlewares.usernameValidation, (_req, res) => {
  const token = crypto.randomBytes(6).toString('hex');
  return res.status(200).json({ token });
});
 */
module.exports = router;