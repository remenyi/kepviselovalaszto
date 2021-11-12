var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Jelolo = db.model('Jelolo', {
    nev: String,
    leiras: String,
    parte: Boolean,
    ideoloak: [String],
    program: String,
});

module.exports = Jelolo;