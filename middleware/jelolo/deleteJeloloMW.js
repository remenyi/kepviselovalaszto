/**
 * Removes jelolo from the database
*/

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.jelolo === 'undefined') {
            return next();
        }
        res.locals.jelolo.delete(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/jelolo/list');
        });
    };
};