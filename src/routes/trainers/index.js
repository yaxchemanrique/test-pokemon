const express = require('express');
const trainersRoutes = express.Router();
const { trainers } = require('../../data/trainers');

trainersRoutes.get('/', (req, res) => {

    const name = req.query.name || '';
    const isChampion = req.query.isChampion === 'true' ? true : false

    const isLikeName = ((trainer) => {
        return trainer.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    });

    const hasWinnedTournaments = ((trainer) => {
        return trainer.winnedTournaments.length > 0;
    });


    let data = trainers.filter(isLikeName);

    if (isChampion) {
        data = data.filter(hasWinnedTournaments);
    }

    res.json(data);

});

module.exports = trainersRoutes;