const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
  
 
    waiting = await message.channel.send("<a:tacruequoifdp:744052918205808702>").catch(console.error);
 
    var pingEmbed = new Discord.MessageEmbed()
    .setAuthor("Latence du bot", bot.user.avatarURL)
    .setColor("RANDOM")
    .addField("**🤖 Tinder Protect :**", "> `" + `${waiting.createdTimestamp - message.createdTimestamp}` + "ms`", true)
    .setTimestamp(message.createdAt)
    .setFooter("Tinder Protect", "https://cdn.discordapp.com/attachments/743808796945547324/744282140899934328/744278359172710581.png")
    .setColor("#FF0000")
    message.channel.send(pingEmbed)
    waiting.delete();

}
module.exports.help = {
  name: "ping"
}