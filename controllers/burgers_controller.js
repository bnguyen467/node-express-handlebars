const router = require('express').Router();
const burger = require('../models/burger.js');

// GET all burgers
router.get('/burgers', (req,res) => {
    burger.selectAll(data => {
        res.json(data);
    })
})

// Create one burger
router.post('/burgers', (req, res) => {
    burger.insertOne(req.body, id => {
        res.json({ id });
    })
})

// Update one burger
router.get('/burgers/:id', (req, res) => {
    burger.updateOne(req.body, { id: req.params.id }, () => {
        res.send('Burger Updated!');
    })
})

module.exports = router;