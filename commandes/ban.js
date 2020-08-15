const Discord = require('discord.js')
const prefix = "+"
module.exports.run = async (client, message, args) => {

    if(message.member.hasPermission("BAN_MEMBERS")){
        if(message.content.startsWith(prefix + "ban")){
        
            let mentions = message.mentions.members.first();
             if(mentions == undefined){
                 message.reply("❌ **Veuillez mentionner un utilisateur afin d'exécuter cette commande !**");

             }
             else{
                 if(mentions.bannable){
                   mentions.ban();
                   message.channel.send(mentions.displayName + "** a été banni avec succès ! ✅**");
                 }
                 else{
                     message.reply("**❌ Impossible de bannir ce membre !**")
                 }
             }
        }
    }
}

module.exports.help = {
  name: "ban"
}