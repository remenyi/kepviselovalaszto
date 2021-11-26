var mongoose = require("mongoose");
mongoose.connect("mongodb://mongo:27017/kepviselovalaszto");

module.exports = mongoose;