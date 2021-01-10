const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

const { prefix } = require("../ayarlar.json");

exports.run = async (client, message, args) => {
   const filter = (reaction, user) => {
  return ["🚀","📛"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
};

  const yardım = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}  Tarafından İstendi`)
      .setColor("GREEN")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`**Ekonomi Komutları: 🚀 \n Ana Menü: 📛**`)
  .setImage("https://media.discordapp.net/attachments/714395066981941279/779665352690106369/standard_3.gif")
 var menü = await message.channel.send(yardım)
 const collector = menü.createReactionCollector(filter, { time: 99999 });
  let emojiler = ["🚀","📛"]
  await menü.react(emojiler[0])
  await menü.react(emojiler[1])

collector.on('collect', (reaction, user) => {

  
     if(reaction.emoji.name == "🚀") {
    const yardım1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Ekonomi Komutları`)
    .addField(`:white_small_square: ${prefix}para`, "Paranızı gösterir")
    .addField(`:white_small_square: ${prefix}bahis <miktar>`, "Bahis Oynarsınız")
    .addField(`:white_small_square: ${prefix}çalış`, "Çalışır ve çalıştığınız yerden para kazanırsınız")
    .addField(`:white_small_square: ${prefix}ödül`,"Günlük ödülünüzü alırsınız")
    .addField(`:white_small_square: ${prefix}yatır <miktar>`, "bankaya istediğiniz miktarda para yatırırsınız")
    .addField(`:white_small_square: ${prefix}para-çek <miktar>`, "Bankadan para çekersiniz")
    .addField(`:white_small_square: ${prefix}para-çal <@etiket>`, "Etiketlediğiniz kişiden para çalarsınız(faqirleri soymayın haa)")
    .addField(`:white_small_square: ${prefix}para-gönder <@etiket> <miktar>`, "Etiketlediğiniz kişiye istediğiniz miktarda para gönderir")
    .addField(`:white_small_square: ${prefix}soygun-yap`, "Bankayı Soyarsınız (yakalanırsanız benden değil :D)")
	  .addField(`:white_small_square: ${prefix}balıktut`, "Balık tutarsınız ve parasını yapımcım öder")
	  .addField(`:white_small_square: ${prefix}slots <miktar>`, "Slots oynarsınız")
    .setImage("https://media.discordapp.net/attachments/714395066981941279/779665352690106369/standard_3.gif")
        .addField(`» Linkler`, `[Davet Linki](http://www.lkisalt.tk/bot) **|** [Destek Sunucusu](http://www.lkisalt.tk/dc) **|** [Web Sitesi](https://bot.vahdetlol.tk/) **|** [Youtube](http://www.lkisalt.tk/yt)`) 
 menü.edit(yardım1)
  };
 if(reaction.emoji.name == "📛") {
 menü.edit(yardım)
  }
});

collector.on('end', collected => {
  console.log(`Collected ${collected.size} items`);
});

};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['ekoyardım'],
 permLevel: 0,
};

exports.help = {
 name: 'ekonomi',
 description: '',
 usage: ''
};