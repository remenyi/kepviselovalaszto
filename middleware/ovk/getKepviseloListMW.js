/**
 * Loads an array of kepviselos from the database using the :ovkid param
 */

 const requireOption = require('../requireOption');
 var ObjectId = require('mongoose').Types.ObjectId; 
 
 module.exports = function (objectrepository) {
     const kepviseloModel = requireOption(objectrepository, "kepviseloModel")
     return function (req, res, next) {
         kepviseloModel.find({_id: { $in: res.locals.ovk._kepviselok} },
             (err, kepviselok) => {
             if (err || !kepviselok) {
                 return next(err);
             }
             res.locals.kepviselok = kepviselok;
             return next();
         });
     };
 };