var expect = require('chai').expect;
var getJeloloMW = require('../middleware/jelolo/getJeloloMW');
var ObjectId = require('mongoose').Types.ObjectId; 

describe('get jelolo middleware ', function () {
    it("should return a Jelolo from the database", function(done){
        const mw = getJeloloMW({jeloloModel: {
            findOne: (query, f) => {
                //expect(query._id).to.eql(new ObjectId(1337));
                f(null, {nev: "mockjelolo"});
            }
        }});
        const mockRes = {
            locals: {}
        }
        const mockReq = {
            params: {
                jeloloid: 1337
            }
        };
        mw(mockReq, mockRes, () => {expect(mockRes.locals).to.eql({jelolo: {nev: "mockjelolo"}})});
        expect(mockRes.locals.jelolo).to.be.eql({nev: "mockjelolo"});
        done();
    });

    it("should not return a Jelolo from the database", function(done){
        const mw = getJeloloMW({jeloloModel: {
            findOne: (query, f) => {
                //expect(query).to.eql({_id: new ObjectId(444)});
                f("error", undefined);
            }
        }});
        const mockRes = {
            locals: {}
        }
        const mockReq = {
            params: {
                jeloloid: 1337
            }
        };
        mw(mockReq, mockRes, (err) => {expect(err).to.equal("error")});
        done();
    });
});