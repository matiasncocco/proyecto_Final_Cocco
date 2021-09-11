let db = require('../database/models');

let mainController = {
    index: (req, res) => {
        db.Game.findAll({
            include: [
                'status'
            ]
        })
            .then(games => {
                res.render('index', {
                    title: 'Game Central',
                    games
                });
            })
            .catch(err => {
                res.status(500).render('error', {
                    status: 500,
                    title: 'ERROR',
                    errorDetail: err
                });
            });
    },
    

};

module.exports = mainController;