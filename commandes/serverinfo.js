const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let member = message.mentions.users.first() ? message.mentions.users.first() : message.author;
    if(!member) return console.log("Problème sur la var 'member'")
    let serverInfoEmbed = new Discord.MessageEmbed()
    
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .addField("Name", message.guild.name)
        .addField("ID", message.guild.id)
        .addField("Serveur crée le", message.guild.createdAt)
        .addField("Nombre d'utilisateurs", message.guild.memberCount)
        .addField("Propriétaire", message.guild.owner)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter("ServerInfo")
		    .setColor("RANDOM")
        .setTimestamp();
	message.channel.send(serverInfoEmbed)
};
module.exports.help = {
  name: "serverinfo"
};