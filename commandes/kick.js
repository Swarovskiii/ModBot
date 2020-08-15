const Discord = require('discord.js')
const prefix = "+"
module.exports.run = async (client, message, args) => {

    if(message.member.hasPermission("KICK_MEMBERS")){
        if(message.content.startsWith(prefix + "kick")){
        
            let mentions = message.mentions.members.first();
             if(mentions == undefined){
                 message.reply("❌ **Veuillez mentionner un utilisateur afin d'exécuter cette commande !**");

             }
             else{
                 if(mentions.kickable){
                   mentions.kick();
                   message.channel.send(mentions.displayName + "** a été expulsé avec succès ! ✅**");
                 }
                 else{
                     message.reply("**❌ Impossible d'expulser ce membre !**")
                 }
             }
        }
    }
}

module.exports.help = {
  name: "kick"
}