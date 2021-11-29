/**
 * Loads a jelolo from the database using the :jeloloid param
 */
const requireOption = require('../requireOption');
var ObjectId = require('mongoose').Types.ObjectId; 

module.exports = function (objectrepository) {
    const jeloloModel = requireOption(objectrepository, "jeloloModel")
    return function (req, res, next) {
        jeloloModel.findOne({_id: new ObjectId(req.params.jeloloid)}, (err, jelolo) => {
            if (err || !jelolo) {
                return next(err);
            }
            res.locals.jelolo = jelolo;
            return next();
        });
    };
};