/**
 * If a jelolo is in the database then its modified, else it's created
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const jeloloModel = requireOption(objectrepository, 'jeloloModel')
    return function (req, res, next) {
        if (!res.locals.jelolo) {
            res.locals.jelolo = new jeloloModel();
        }

        res.locals.jelolo.nev = req.body.nev;
        res.locals.jelolo.leiras = req.body.leiras;
        res.locals.jelolo.parte = req.body.parte;
        res.locals.jelolo.ideologiak = req.body.ideologiak;
        res.locals.jelolo.program = req.body.program;
        res.locals.jelolo.kep = req.body.kep;

        res.locals.jelolo.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect(req.body.ret);
        });
    };
};