var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:33017/kepviselovalaszto");

module.exports = mongoose;