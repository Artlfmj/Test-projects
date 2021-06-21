const config = require("../../botconfig/config.json");
const Discord = require('discord.js')
const ee = require("../../botconfig/embed.json");

module.exports = {
    name: "registermatch",
    category: "",
    aliases: [""],
    cooldown: 2,
    usage: "",
    description: "",
    run: async (client, message, args, user, text, prefix) => {
    if(message.author.id === "634099784428552213"){
        if(args.length >= "3"){
            const Match = require('../../schemes/match')
            const data = new Match({
                date : args[0],
                team1 : args[1],
                team2 : args[2]
            })
            data.save()
        } 
    }
}
}