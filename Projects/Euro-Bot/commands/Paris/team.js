const config = require("../../botconfig/config.json");
const Discord = require('discord.js')
const ee = require("../../botconfig/embed.json");
const { MessageButton } = require('discord-buttons');
const mongoose = require('mongoose');
const Team = require('../../schemes/team')

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
            .setDescription("Pour obtenir des statistiques sur une ")
            .setColor(ee.color)
            message.channel.send(embed)
        } else {
            const guild = await client.guilds.cache.get("822747635517227009")
            let emoji = await guild.emojis.cache.find(emoji => emoji.name == 'loading')
            const embed = new Discord.MessageEmbed()
            .setColor(ee.color)
            .setDescription(`Scan de la base de données en cours... ${emoji}`)
            const msg = await message.channel.send(embed)
            const team = await Team.find({Name : text})
            if(!team.length) {
                const emb = new Discord.MessageEmbed()
                .setColor(ee.color)
                .setDescription(`Aucune équipe n'a été trouvée pour : ${text}.\nVeuillez réeffectuer la commande avec le nom correspondant à votre équipe.\n\n\n*Si vous pensez que c'est une erreur veuillez contacter un administrateur de ce bot*`)
                return msg.edit(":x: Erreur detectée", emb)
                
            }
            if(team.length > 1){
                const emb = new Discord.MessageEmbed()
                .setColor(ee.color)
                .setDescription(`Plusieures équipes ont été detectées pour ${text}. Veuillez reeffectuer la commande avec une requete plus précise`)
                return msg.edit("\u200b",emb)
                
            }
            
            const emb = new Discord.MessageEmbed()
            .setThumbnail(team[0].Image)
            .setColor(ee.color)
            .setTitle(`Informations sur l'équipe de ${team[0].Name}`)
            .addField("Nom", team[0].Name)
            .addField("Diminutif", team[0].ID.toUpperCase())
            .addField(`Nombre de supporters`, team[0].SupporterNumber)
            .addField(`Coach`, team[0].Coach)
            .setFooter(team[0]._id)
            msg.edit(`Informations trouvées sur cette équipe`, emb)
            
        }
  }
}
