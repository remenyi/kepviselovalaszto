/**
 * Loads all the OVKs from the database
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ovkModel = requireOption(objectrepository, 'ovkModel');
    
    return function (req, res, next) {
        ovkModel.find({}, (err, ovks) => {
            if (err) {
                return next(err);
            }
            res.locals.ovks = ovks
            return next();
        });
    };
};