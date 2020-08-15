const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
	let abcEmbed = new Discord.MessageEmbed()
		.setTitle("**Vocal Temporaires**")
        .setDescription("**Comme vous avez pu le constater, nous venons de donner l'accès au vocals temporaires !** \n En voici l'usage")
        .addField("``.voice lock``", "Bloque le salon, le rendant inaccessible à tout les membres.")
        .addField("``.voice unlock``", "Débloque le salon, le rendant accessible à tout les membres.")
        .addField("``.voice name <name>``", "Change le nom du salon.")
        .addField("``.voice limit <number>``", "Limite le nombre d'utilisateur pouvant rejoindre le salon.")
        .addField("``.voice permit <@user>``", "Accorde la permission à l'utilisateur mentionné de rejoindre le salon si le salon est bloqué.")
        .addField("``.voice reject <@user>``", "Enlève la permission à l'utilisateur mentionné de rejoindre le salon si le salon est bloqué.")
        .addField("``.voice claim``", "Prendre le contrôle du salon si le créateur l'as quitté.")
     .setColor("#1600ff");

	message.channel.send(abcEmbed)
};

module.exports.help = {
  name: "abc"
};