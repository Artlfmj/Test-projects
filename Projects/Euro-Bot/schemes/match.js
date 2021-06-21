const mongoose = require('mongoose');

const match = mongoose.Schema({
    date : String,
    team1 : String,
    team2 : String,
    score : String,
    scoreteam1 : String,
    scoreteam2: String
})

module.exports = mongoose.model("Match", match)