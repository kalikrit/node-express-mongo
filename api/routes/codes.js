const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET to / codes'
    });
});

router.post('/', (req, res, next) => {
    const code = {
        language: req.body.lang,
        data: req.body.data
    };
    res.status(201).json({
        message: 'POST request to / codes',
        code: code
    });
});

router.get('/:codeID', (req, res, next) => {
    const id = req.params.codeID;
    res.status(200).json({
        message: `get code with id: ${id}`,
        ID: id
    });
});

router.patch('/:codeID', (req, res, next) => {
    const id = req.params.codeID;
    res.status(200).json({
        message: `code with ${id} has been updated`
    });
});

router.delete('/:codeID', (req, res, next) => {
    const id = req.params.codeID;
    res.status(200).json({
        message: `code with ${id} has been deleted`
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST to / codes'
    });
});

module.exports = router;