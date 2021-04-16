const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET to / users'
    });
});

router.get('/:userID', (req, res, next) => {
    const id = req.params.userID;
    if (id === 'admin') {
        res.status(200).json({
            message: 'you have an admin acc',
            ID: id
        }) 
    } else {
        res.status(200).json({
            message: 'user, you are welcome',
            ID: id
        });
    }
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST to / users'
    });
});

module.exports = router;