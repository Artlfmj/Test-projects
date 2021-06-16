const config = require("../../botconfig/config.json");
const Discord = require('discord.js')
const ee = require("../../botconfig/embed.json");
const { MessageButton } = require('discord-buttons');

module.exports = {
    name: "team",
    category: "Paris",
    aliases: ["equipe"],
    cooldown: 2,
    usage: "",
    description: "",
    run: async (client, message, args, user, text, prefix) => {
        if(!args.length){
            
            
            const embed = new Discord.MessageEmbed()
            .setTitle(`Vous n'avez pas precisé l'equipe`)
            .setDescription('T')
            .setColor(ee.color)
            message.channel.send(embed)
        } else {
            const guild = await client.guilds.cache.get("822747635517227009")
            let emoji = await guild.emojis.cache.find(emoji => emoji.name == 'loading')
            const embed = new Discord.MessageEmbed()
            .setColor(ee.color)
            .setDescription(`Scan de base de données en cours... ${emoji}`)
            const msg = await message.channel.send(embed)
            

            
        }
  }
}
