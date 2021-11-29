/**
 * Loads all the kepviselos from the database
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const kepviseloModel = requireOption(objectrepository, 'kepviseloModel');
    
    return function (req, res, next) {
        kepviseloModel.find({}, (err, kepviselok) => {
            if (err) {
                return next(err);
            }
            res.locals.kepviselok = kepviselok;
            return next();
        });
    };
};