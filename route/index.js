const checkPassMW = require("../middleware/auth/checkPassMW");
const authMW  = require("../middleware/auth/authMW");
const renderMW = require("../middleware/renderMW");
const getOVKListMW = require("../middleware/ovk/getOVKListMW");
const getOVKMW = require("../middleware/ovk/getOVKMW");
const getKepviseloListByOVKIdMW = require("../middleware/ovk/getKepviseloListMW");
const deleteOVKMW = require("../middleware/ovk/deleteOVKMW");
const saveOVKMW = require("../middleware/ovk/saveOVKMW");
const getKepviseloListMW = require("../middleware/kepviselo/getKepviseloListMW");
const getKepviseloMW = require("../middleware/kepviselo/getKepviseloMW");
const deleteKepviseloMW = require("../middleware/kepviselo/deleteKepviseloMW");
const saveKepviseloMW = require("../middleware/kepviselo/saveKepviseloMW");
const getJeloloListMW = require("../middleware/jelolo/getJeloloListMW");
const getJeloloMW = require("../middleware/jelolo/getJeloloMW");
const deleteJeloloMW = require("../middleware/jelolo/deleteJeloloMW");
const saveJeloloMW = require("../middleware/jelolo/saveJeloloMW");


const kepviseloModel = require('../models/kepviselo');
const ovkModel = require('../models/ovk');
const jeloloModel = require('../models/jelolo');

module.exports = function (app) {
    const objRepo = {
        ovkModel: ovkModel,
        kepviseloModel: kepviseloModel,
        jeloloModel: jeloloModel,
    };

    app.use('/login',
        checkPassMW(objRepo),
        renderMW(objRepo, 'ovklist'));

    app.get('/',
        authMW(objRepo),
        getOVKListMW(objRepo),
        getKepviseloListMW(objRepo),
        renderMW(objRepo, 'ovklist'));

    app.use('/ovk/edit/:ovkid',
        authMW(objRepo),
        getOVKMW(objRepo),
        getKepviseloListByOVKIdMW(objRepo),
        saveOVKMW(objRepo));

    app.get('/ovk/delete/:ovkid',
        authMW(objRepo),
        getOVKMW(objRepo),
        deleteOVKMW(objRepo));

    app.use('/ovk/new',
        authMW(objRepo),
        saveOVKMW(objRepo));

    app.get("/ovk/:ovkid", 
        authMW(objRepo),
        getOVKMW(objRepo),  
        getKepviseloListMW(objRepo),
        getJeloloListMW(objRepo),
        renderMW(objRepo, "ovkdetails"));

    app.get("/kepviselo/list",
        authMW(objRepo),
        getKepviseloListMW(objRepo),
        getJeloloListMW(objRepo),
        renderMW(objRepo, "kepviselolist"));

    app.use('/kepviselo/edit/:kepviseloid',
        authMW(objRepo),
        getKepviseloMW(objRepo),
        saveKepviseloMW(objRepo));

    app.get('/kepviselo/delete/:kepviseloid',
        authMW(objRepo),
        getKepviseloMW(objRepo),
        deleteKepviseloMW(objRepo));

    app.use('/kepviselo/new',
        authMW(objRepo),
        saveKepviseloMW(objRepo));

    app.get("/kepviselo/:kepviseloid", 
        authMW(objRepo),
        getJeloloListMW(objRepo),
        getKepviseloMW(objRepo),
        renderMW(objRepo, "kepviselodetails"));
    
    app.get("/jelolo/list",
        authMW(objRepo),
        getJeloloListMW(objRepo),
        renderMW(objRepo, "jelololist"));

    app.use('/jelolo/edit/:jeloloid',
        authMW(objRepo),
        getJeloloMW(objRepo),
        saveJeloloMW(objRepo));

    app.get('/jelolo/delete/:jeloloid',
        authMW(objRepo),
        getJeloloMW(objRepo),
        deleteJeloloMW(objRepo));

    app.use('/jelolo/new',
        authMW(objRepo),
        saveJeloloMW(objRepo));

    app.get("/jelolo/:jeloloid", 
        authMW(objRepo),
        getJeloloMW(objRepo),
        renderMW(objRepo, "jelolodetails"));
}