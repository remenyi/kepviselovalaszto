var Schema = require('mongoose').Schema;
var db = require('../config/db');
var picroot = require('../config/pics');

var Kepviselo = db.model('Kepviselo', {
    nev: String,
    bemutatkozas: String,
    kep: {
        type: String,
        get: v => `${picroot}${v}`,
    },
    program: String,
    _jelolok: [{
        type: Schema.Types.ObjectId,
        ref: 'Jelolo',
    }],
});

module.exports = Kepviselo;