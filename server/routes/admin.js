const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/', [auth, admin], async (req, res) => {
    res.send("eres el administador de la plataforma!");
});

module.exports = router;