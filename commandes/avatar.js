const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
    let waiting = await message.channel.send("<a:loading:744266179459153930>").catch(console.error);
 
    let mentionedUser = message.mentions.users.first() || message.author;
 
    let avatarembed = new Discord.MessageEmbed()
 
        .setTitle("Avatar")
        .setDescription("[Lien de l'avatar](" + (mentionedUser.displayAvatarURL()) + ")")
        .setImage(mentionedUser.displayAvatarURL( { dynamic: true } ))
        .setFooter("Demandé par " + message.author.tag)
        .setColor("RANDOM")
    waiting.delete()
   message.channel.send(avatarembed)
}
 
module.exports.help = {
    name: "avatar"
}