var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Jelolo = db.model('Jelolo', {
    nev: String,
    leiras: String,
    parte: String,
    ideologiak: String,
    program: String,
    kep: String,
});

module.exports = Jelolo;