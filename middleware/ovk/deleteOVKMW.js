/**
 * Removes an OVK from the database
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.ovk === 'undefined') {
            return next();
        }
        res.locals.ovk.delete(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/');
        });
    };
};