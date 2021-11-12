var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Ovk = db.model('Ovk', {
    nev: String,
    _kepviselok: [{
        type: Schema.Types.ObjectId,
        ref: 'Kepviselo',
    }],
});

module.exports = Ovk;