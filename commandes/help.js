const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
	let helpEmbed = new Discord.MessageEmbed()
		.setTitle("**Page d'aide**")
		.addField("+ban", "Afin de bannir un utilisateur")
		.addField("+kick", "Afin d'expulser un utilisateur.")
		.addField("+mute", "Afin de rendre muet un utilisateur.")
		.addField("+demute", "Afin de ne plus rendre muet un utilisateur.")
		.addField("+avatar", "Afin d'afficher l'avatar d'un utilisateur.")
		.addField("+ping", "Afin de voir la latence du bot.")
		.addField("+userinfo", "Afin d'afficher les informations d'un utilisateur.")
		.addField("+serverinfo", "Afin d'afficher les informations du serveur.")
		.setColor("#f633ff");

	message.channel.send(helpEmbed)
};

module.exports.help = {
  name: "help"
};