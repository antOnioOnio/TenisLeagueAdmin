const mongoose = require("mongoose");
let config = require('../../env.json');
const url = process.env.MONGO_URL || config.service.url;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log("db connected"))
    .catch(err => console.log(err));

//var conn = mongoose.connection;

module.exports = mongoose