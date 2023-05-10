const express = require('express');
const router = express();
const siswa = require('./siswa.router');

router.use('/siswa', siswa);

module.exports = router;