/**
 * Loads a kepviselo from the database using the :kepviseloid param
 */

const requireOption = require('../requireOption');
var ObjectId = require('mongoose').Types.ObjectId; 

module.exports = function (objectrepository) {
    const kepviseloModel = requireOption(objectrepository, "kepviseloModel")
    return function (req, res, next) {
        kepviseloModel.findOne({_id: new ObjectId(req.params.kepviseloid)}, (err, kepviselo) => {
            if (err || !kepviselo) {
                return next(err);
            }
            res.locals.kepviselo = kepviselo;
            return next();
        });
    };
};