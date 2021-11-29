/**
 * If a kepviselo is in the database then its modified, else it's created
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const kepviseloModel = requireOption(objectrepository, 'kepviseloModel')
    return function (req, res, next) {
        if (!res.locals.kepviselo) {
            res.locals.kepviselo = new kepviseloModel();
        }

        res.locals.kepviselo.nev = req.body.nev;
        res.locals.kepviselo._jelolok = req.body.jelolok;
        res.locals.kepviselo.program = req.body.program;
        res.locals.kepviselo.bemutatkozas = req.body.bemutatkozas;
        res.locals.kepviselo.kep = req.body.kep;

        res.locals.kepviselo.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect(req.body.ret);
        });
    };
};