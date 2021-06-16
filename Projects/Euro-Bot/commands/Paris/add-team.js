const config = require("../../botconfig/config.json");
const Discord = require('discord.js')
const ee = require("../../botconfig/embed.json");

module.exports = {
    name: "add-team",
    category: "Admin",
    aliases: [""],
    cooldown: 2,
    usage: "",
    description: "",
    run: async (client, message, args, user, text, prefix) => {
      const Team = require('../../schemes/team')
      if(message.author.id === "634099784428552213"){
          const pseudo = args.slice(4)

          if(args.length >= "5"){
              const data = new Team({
                  "Name" : args[0],
                  "ID" : args[1],
                  "SupporterNumber" : args[2],
                  "Image" : args[3],
                  "Coach" : pseudo.join(" ")

              })
              data.save()

          }
      }
  }
}
