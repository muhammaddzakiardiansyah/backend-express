const express = require('express');
const siswa = express();
const siswaController = require('../controller/siswa.controller');

siswa.get('/', siswaController.get);
siswa.get('/:id', siswaController.getDetail);
siswa.post('/', siswaController.add);
siswa.put('/:id', siswaController.update);
siswa.delete('/:id', siswaController.remove);

module.exports = siswa;