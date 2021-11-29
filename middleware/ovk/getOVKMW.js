/**
 * Loads an OVK from the database using the :ovkid param
 */

const requireOption = require('../requireOption');
var ObjectId = require('mongoose').Types.ObjectId; 

module.exports = function (objectrepository) {
    const ovkModel = requireOption(objectrepository, "ovkModel")
    return function (req, res, next) {
        ovkModel.findOne({_id: new ObjectId(req.params.ovkid)}, (err, ovk) => {
            if (err || !ovk) {
                return next(err);
            }
            res.locals.ovk = ovk;
            return next();
        });
    };
};