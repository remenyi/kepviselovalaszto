/**
 * If the user is authenticated, show the add/edit/delete buttons
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};