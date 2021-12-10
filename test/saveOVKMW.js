var expect = require('chai').expect;
var saveOVKMW = require('../middleware/ovk/saveOVKMW');

describe('saveOVK middleware ', function () {
    it("should save OVK in db", function(done){
        const mw = saveOVKMW({ovkModel: function() {
            this.save = (f)=>{
                expect(f).to.be.an("function");
                f(undefined);
            };
        }});
        const mockReq = {
            body: {
                nev: "mockovk",
                kepviselok: ["Sanyi", "Béla"],
                ret: "ovkdetails"
            }
        };
        const mockRes = {
            locals: {
                ovk: undefined
            }, 
            redirect: (w) => {expect(w).to.be.equal("ovkdetails")}
        };
        mw(mockReq, mockRes, (err)=>{expect(err).to.be.undefined()});
        expect(mockRes.locals.ovk.nev).to.be.equal("mockovk");
        expect(mockRes.locals.ovk._kepviselok).to.eql(["Sanyi", "Béla"]);
        done();
    });

    it("should update OVK in db", function(done){
        const mw = saveOVKMW({ovkModel: function() {
            this.save = (f)=>{
                expect(f).to.be.an("function");
                f(undefined);
            };
        }});
        const mockReq = {
            body: {
                nev: "new_mockovk",
                kepviselok: ["new_Sanyi", "new_Béla"],
                ret: "ovkdetails"
            }
        };
        const mockRes = {
            locals: {
                ovk: {
                    nev: "mockovk",
                    kepviselok: ["sanyi", "béla"],
                    save: (f) => {expect(f).to.be.an("function"), f(undefined)}
                }
            }, 
            redirect: (w) => {expect(w).to.be.equal("ovkdetails")}
        };
        mw(mockReq, mockRes, (err)=>{expect(err).to.be.undefined()});
        expect(mockRes.locals.ovk.nev).to.be.equal("new_mockovk");
        expect(mockRes.locals.ovk._kepviselok).to.eql(["new_Sanyi", "new_Béla"]);
        done();
    });

    it("should fail to update OVK in db", function(done){
        const mw = saveOVKMW({ovkModel: function() {
            this.save = (f)=>{
                expect(f).to.be.an("function");
                f("fail");
            };
        }});
        const mockReq = {
            body: {
                nev: "new_mockovk",
                kepviselok: ["new_Sanyi", "new_Béla"],
                ret: "ovkdetails"
            }
        };
        const mockRes = {
            locals: {
                ovk: {
                    nev: "mockovk",
                    kepviselok: ["sanyi", "béla"],
                    save: (f) => {expect(f).to.be.an("function"), f(undefined)}
                }
            }, 
            redirect: (w) => {expect(w).to.be.equal("ovkdetails")}
        };
        mw(mockReq, mockRes, (err)=>{expect(err).to.be.equal("fail")});
        expect(mockRes.locals.ovk.nev).to.be.equal("new_mockovk");
        expect(mockRes.locals.ovk._kepviselok).to.eql(["new_Sanyi", "new_Béla"]);
        done();
    });
});