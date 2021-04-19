const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET to / users'
    });
});

router.post('/', (req, res, next) => {
    const user = {
        name: req.body.name,
        age: req.body.age
    };
    res.status(200).json({
        message: 'POST request to / users',
        user: user
    });
});

router.patch('/:userID', (req, res, next) => {
    const id = req.params.userID;
    res.status(200).json({
        message: `user ${id} has been updated`
    });
});

router.delete('/:userID', (req, res, next) => {
    const id = req.params.userID;
    res.status(200).json({
        message: `user ${id} has been deleted`
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