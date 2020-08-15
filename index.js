const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();

const config = require('./config.json');

fs.readdir('./commandes/', (err, fichier) => {

  if(err) console.log(err);

  let fichierjs = fichier.filter(f => f.split(".").pop() === "js");
  if(fichierjs.length <= 0) {
      console.log("Commandes | Aucune commandes trouvé ! ");
      return;
  };

  fichierjs.forEach((f, i) => {
      let modules = require(`./commandes/${f}`);
      console.log(`Commandes | Commande ${f} chargé !`);
      client.commands.set(modules.help.name, modules);
  });
   
});



client.on("ready", async () => { 
	client.user.setActivity("discord.gg/sexe");
	console.log("✅ Connecté avec succès")
});

client.on('message', async message => { 

	var prefix = config.prefix;

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let commandfile = client.commands.get(command);
    if(commandfile) commandfile.run(client, message, args);
});



client.login(config.token);


