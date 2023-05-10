const db = require('../../public/helper/dbConnection');

const siswaModel = {
    get: (req, res) => {
        return new Promise( (resolve, reject) => {
            db.query('SELECT * FROM siswa', (err, result) => {
                if(err) {
                    return reject({
                        message: 'failed get all siswa!',
                        error: err,
                    });
                } else {
                    return resolve(result);
                }
            });
        });
    },

    getDetail: (id) => {
        return new Promise( (resolve, reject) => {
            db.query(`SELECT * FROM siswa WHERE id='${id}'`, (err, result) => {
                if(err) {
                    return reject({
                        message: 'failed get detail siswa!',
                        error: err,
                    });
                } else if(result.length == 0) {
                    return reject({
                        status: 400,
                        message: 'data siswa notfound!',
                    });
                } else {
                    return resolve(result[0]);
                }
            });
        });
    },

    add: (request) => {
        return new Promise( (resolve, reject) => {
            const {nama, ta, status_siswa} = request;
            db.query(`INSERT INTO siswa (nama, ta, status_siswa) VALUES ('${nama}', '${ta}', '${status_siswa}')`, (err, result) => {
                if(err) {
                    return reject({
                        message: 'failed create siswa!',
                        error: err,
                    });
                } else {
                    return resolve(result);
                }
            });
        });
    },

    update: (request) => {
        return new Promise( (resolve, reject) => {
            const {nama, ta, status_siswa, id} = request;
            db.query(`SELECT * FROM siswa WHERE id='${id}'`, (err, resultGet) => {
                if(err) {
                    return reject({
                        message: 'failed get siswa!',
                        error: err
                    });
                } else if(resultGet.length == 0) {
                    return reject({
                        status: 400,
                        message: 'data siswa not found!',
                    });
                } else {
                    db.query(`UPDATE siswa SET nama='${nama || resultGet.nama}', ta='${ta || resultGet.ta}', status_siswa='${status_siswa || resultGet.status_siswa}' WHERE id='${id}'`, (err, result) => {
                        if(err) {
                            return reject({
                                message: 'failed update siswa',
                                error: err
                            });
                        } else {
                            return resolve(result)
                        }
                    });
                }
            });
        });
    },

    remove: (id) => {
        return new Promise( (resolve, reject) => {
            db.query(`SELECT * FROM siswa WHERE id='${id}'`, (err, resultGet) => {
                if(err) {
                    return reject({
                        message: 'failed get siswa!',
                        error: err
                    });
                } else if(resultGet.length == 0) {
                    return reject({
                        status: 400,
                        message: 'data siswa notfound!',
                    });
                } else {
                    db.query(`DELETE FROM siswa WHERE id='${id}'`, (err, result) => {
                        if(err) {
                            return reject({
                                message: 'failed delete siswa!',
                                error: err,
                            });
                        } else {
                            return resolve(result);
                        }
                    });
                }
            });
        });
    }
}

module.exports = siswaModel;