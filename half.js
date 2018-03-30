const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = "h:"

// je test sur mon pc

client.on('ready', function() {
  client.user.setPresence({ game: { name: "h:aide-Créé par Zytalcane", type: 0 } });
  console.log("Bot Prêt!")
});

client.login(process.env.TOKEN)



client.on("message", message => {
  if (message.content.startsWith(PREFIX + "aide")) {
    const aide = new Discord.RichEmbed()
    .setColor("#FFD700")
    .addField("** Liste des commandes:**", "__Commandes Standards:__")
    .addField("h:aide", "Affiche toute les commandes")
    .addField("h:RP", "Donne la date du prochain RP")
    .addField("h:pc", "Appelle les unités PC")
    .addField("h:info", "Donne")
    .addField("h:HL2", "Histoire de HalfLife 2")
    .addField("h:achat", "Prix de la Contrebande")
    message.channel.sendEmbed(aide);
  }
  if (message.content.startsWith(PREFIX + "RP")) {
  	message.channel.send("🕜 La Map est en Construction donc aucun RP est prévue pour le moment 😉")
  }

  if (message.content.startsWith(PREFIX + "info")) {
     const aide = new Discord.RichEmbed()
     .setColor("#FFD700")
     .addField("Nom du Bot", "Half-Bot")
     .addField("Créateur", "Zytalcane#2399")
     .addField("Date de Création", "04/03/2018")
     .addField("Statut", "En Développement")
     message.channel.sendEmbed(aide);
   }

  if (message.content.startsWith(PREFIX + "pc")) {
    message.reply("⚠️**Appelle une __Protection Civil__!**⚠️")
  }

if (message.content.startsWith(PREFIX + "HL2")) {
    message.reply("**[Histoire de Half-life 2]** Le Cartel est une race Alien qui est arrivés sur Terre à travers des portails crées par les humains suite à une expérience qui a très mal tourné dans l'établissement de Black Mesa. En forçant les portails, le Cartel a réussi à pénétrer sur la terre et a très rapidement coloniser et exploiter les ressources terriennes sans problème. Ils ont ensuite capturés des humains pour les modifier, aussi bien sur le plan physique que mental pour ainsi créer l'Overwatch-Transhuman-Arm (OTA) et la Milice. Ces unités sont créer en chaine par milliers, les premières armée Transhumaines sont ainsi créées et envoyées pour capturer ce qu'il reste de la Terre. La capture de la planète entière sera faite en 7 heures, d'où le nom de la Guerre des 7 heures. La Milice prit possession des villes importantes qu'elle aménagera comme bon leur semble. La surveillance des citoyens est optimale et rien n'échappe à l'Union. Tout est surveillé, contrôlé et réglementé, mais malgré la surveillance étroite de la milice certains citoyens qui luttent contre l'Union (anti-citoyen ou Résistant) tente tant bien que mal de s'échapper et de retrouvé leurs anciennes vies qui était sans doute bien plus agréables ! \n Tous furent exécuté par la Milices ! \n Tout les citoyens sont enfermé et sous la vigilance du Cartel dans des cité comme cité 17, la plus connue de toute. \n Rien n'y personnes ne s'échappe et ne s'échappera de la cité ! \n A moins que... :thinking: \n A la tête de cette armé se trouve Wallace Breen, l'ancien directeur de la société Black Mesa ! \nIl est très bien protégé et en sécurité dans la citadelle, une grande tour qui entoure le portail ! \n https://vignette.wikia.nocookie.net/halflife/images/6/61/Citadelle_depuis_les_canaux.jpg/revision/latest?cb=20161222121513&path-prefix=fr")
   }
if (message.content.startsWith(PREFIX + "achat")) {
  const contrebande = new Discord.RichEmbed()
  .setColor("#FFD700")
  .addField("**__📦CONTREBANDE📦__**" ,"**ARMES**")
  .addField("Glock-18" ,"15U")
  .addField("Desert-Eagle" ,"20U")
  .addField("AK47" ,"25U")
  .addField("OM-48" ,"35U")
  .addField("__📦CONTREBANDE📦__" ,"**MUNITIONS**")
  .addField("Munition de Colte" ,"2U = 1 Chargeur (4)")
  .addField("Munition d'AK47" ,"3U = 1 Chargeur (8)")
  .addField("Munition de Sniper" ,"5U = 1 Chargeur (4)")
  message.channel.sendEmbed(contrebande);
  }

 });
