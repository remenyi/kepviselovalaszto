/**
 * Loads all the jelolos from the database
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const jeloloModel = requireOption(objectrepository, 'jeloloModel');
    
    return function (req, res, next) {
        jeloloModel.find({}, (err, jelolok) => {
            if (err) {
                return next(err);
            }
            res.locals.jelolok = jelolok;
            return next();
        });
    };
};