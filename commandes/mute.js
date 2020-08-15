const Discord = require('discord.js')
const prefix = "+"
module.exports.run = async (client, message, args) => {

    if(message.member.hasPermission("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "mute")){
        
            let mentions = message.mentions.members.first();
             if(mentions == undefined){
                 message.reply("❌ **Veuillez mentionner un utilisateur afin d'exécuter cette commande !**");

             }
             else{
                   mentions.roles.add("743808626950406195");
                   message.channel.send(mentions.displayName + "** a été mute avec succès ! ✅**");
                 }
             }
        }
}

module.exports.help = {
  name: "mute"
}