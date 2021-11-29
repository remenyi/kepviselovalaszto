/**
 * Removes a kepviselo from the database
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.kepviselo === 'undefined') {
            return next();
        }
        res.locals.kepviselo.delete(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/kepviselo/list');
        });
    };
};