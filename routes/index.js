/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title:'Fooscore', welcomeMessage:'Welcome to fooscore'})
};


exports.singleNew = function (req, res) {
    res.render('single', {title:'Fooscore'})
};

exports.singleGame = function (req, res) {
    res.render('singleGame', {title:'Fooscore', redName: req.param('redName'), blueName: req.param('blueName'),
        redScore: req.param('redScore'), blueScore: req.param('blueScore')})
};