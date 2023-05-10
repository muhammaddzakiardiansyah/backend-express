const siswaModel = require('../model/siswa.model');

const siswaController = {
    get: async (req, res) => {
        try {
            const result = await siswaModel.get();
            return res.status(200).send({
                status: 200,
                message: 'success get all siswa!',
                data: result
            });
        } catch (error) {
            return res.status(500).send({
                status: 500,
                message: 'failed get all siswa!',
                error: error.message
            });
        }
    },

    getDetail: async (req, res) => {
        try {
            const result = await siswaModel.getDetail(req.params.id);
            return res.status(200).send({
                status: 200,
                message: 'success get detail data siswa!',
                data: result,
            });
        } catch (error) {
            return res.status(error.status).send({
                status: error.status,
                message: 'failed get detail data siswa!',
                error: error.message,
            });
        }
    },

    add: async (req, res) => {
        try {
            const request = {
                ...req.body
            }
            const result = await siswaModel.add(request);
            return res.status(201).send({
                status: 201,
                message: 'success create data siswa!',
                data: req.body
            });
        } catch (error) {
            return res.status(500).send({
                status: 500,
                message: 'failed create data siswa!',
                error: error.message
            });
        }
    },

    update: async (req, res) => {
        try {
            const request = {
                ...req.body,
                id: req.params.id
            };
            const result = await siswaModel.update(request);
            return res.status(201).send({
                status: 201,
                message: 'success update data siswa!',
                data: request
            });
        } catch (error) {
            return res.status(error.status).send({
                status: error.status,
                message: 'failed update data siswa!',
                error: error.message
            });
        }
    },

    remove: async (req, res) => {
        try {
            const result = await siswaModel.remove(req.params.id);
            return res.status(201).send({
                status: 201,
                message: 'success delete data siswa!',
                data: [],
            });
        } catch (error) {
            return res.status(error.status).send({
                status: error.status,
                message: 'failed delete data siswa!',
                error: error.message,
            });
        }
    },
}

module.exports = siswaController;