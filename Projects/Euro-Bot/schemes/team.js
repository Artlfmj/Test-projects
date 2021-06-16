const mongoose = require('mongoose');

const Team = mongoose.Schema({
    Name : String,
    ID : String,
    SupporterNumber : String,
    Image : String,
    Coach : String
})

module.exports = mongoose.model("Team", Team)