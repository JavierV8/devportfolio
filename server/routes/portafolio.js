
const express = require('express');
const router = express.Router();
const { Portafolio, validate } = require('../models/portafolio');
const { User } = require('../models/user');
const auth = require('../middleware/auth');
const { ObjectId } = require('mongodb');

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if (!req.body) return res.status(400).send('No portafolio.');

    let portafolio = new Portafolio({
        title: req.body.title,
        image: req.body.image,
        tools: req.body.tools,
        description: req.body.description,
        url: req.body.url
    });

    await portafolio.save();
    var prueba = 'string de prueba'
    res.send(prueba);
});

router.get('/', async (req, res) => {
    const portafolios = await Portafolio.find();
    res.send(portafolios);
});

router.get('/:id', async (req, res) => {
    let param = req.params.id;
    const portafolios = await Portafolio.findById(param);
    res.send(portafolios);
});

router.delete('/:id', auth, async (req, res) => {
    let param = req.params.id;
    const portafolio = await Portafolio.findByIdAndRemove(param);
    res.send();
});

router.patch('/:id', async (req, res) => {
    const portfolioId = req.body._id;
    let portfolioData = req.body;
    portfolioData._id = new ObjectId(portfolioId);
    const portfolio = await Portafolio.findOne({ _id: new ObjectId(portfolioId) });
    portfolio.set(portfolioData);
    portfolio.save(portfolioData);
    res.send();
});
module.exports = router;