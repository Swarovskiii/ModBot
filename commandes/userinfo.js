const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  const mentioned = message.mentions.users.first()

  if (!mentioned) {
  
      const embed = new Discord.MessageEmbed()
  
        .setColor("RANDOM")
        .addField('Username', `${message.author.username}`)
        .addField('ID', message.author.id)
        .addField('Compte créé le', message.author.createdAt)
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true}))
        .addField("Tag",`**#${message.author.discriminator}**`)
        .setFooter("UserInfo")
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        
        message.channel.send(embed)
  } else {
  
        const embed = new Discord.MessageEmbed()
         
        .setColor("RANDOM")
        .addField('Username', mentioned.username)
        .addField('ID', mentioned.id)
        .addField('Compte crée le', mentioned.createdAt)
        .setAuthor(mentioned.username, mentioned.displayAvatarURL({ dynamic: true }))
        .addField("Tag", `**#${mentioned.discriminator}**`)
        .setFooter("UserInfo")
        .setTimestamp()
        .setThumbnail(mentioned.displayAvatarURL({ dynamic: true }))
  
        message.channel.send(embed)
  }}
    module.exports.help = {
      name: "userinfo"
    }