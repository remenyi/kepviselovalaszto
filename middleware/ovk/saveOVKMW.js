/**
 * If an OVK is in the database then its modified, else it's created
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OVKModel = requireOption(objectrepository, 'ovkModel')
    return function (req, res, next) {

        if (!res.locals.ovk) {
            res.locals.ovk = new OVKModel();
        }

        res.locals.ovk.nev = req.body.nev;
        res.locals.ovk._kepviselok = req.body.kepviselok;
s
        res.locals.ovk.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect(req.body.ret);
        });
    };
};