/**
 * If a jelolo is in the database then its modified, else it's created
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};