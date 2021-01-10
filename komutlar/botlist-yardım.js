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
  .setDescription(`**Botlist Komutları 1: 🚀 \n Ana Menü: 📛**`)
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
    .addField(`Botlist Komutları 1`, ".")
    .addField(`:white_small_square: ${prefix}onayla <sahipid> <botid>`, "Botu Kabul Eder")
    .addField(`:white_small_square: ${prefix}reddet <botsahip id> <nedeni>`, "Üyenin Botunu Reddedir")
    .addField(`:white_small_square: ${prefix}bot-ekleme-log #kanal`,"Hangi Kanalda Üyenin Botu ekleyebilceni ayarlar")
    .addField(`:white_small_square: ${prefix}bot-ekleme-log sıfırla`, "Üyenin Hangi kanalda botu ekleyeni kapatır!")
    .addField(`:white_small_square: ${prefix}botlog #kanal`, "Botun reddedilip onaylanan bekliyenleri gözüken logu ayarlar!")
    .addField(`:white_small_square: ${prefix}botlog sıfırla`, "Botun reddedilip onaylanan bekliyenleri gözüken logu sıfırlar!")
    .addField(`:white_small_square: ${prefix}botlist-yetkili-rol`, "Botlistte botu onaylıcak reddedicek rolü ayarlar!")
    .addField(`:white_small_square: ${prefix}botlist-yetkili-rol sıfırla`, "Botları onaylıcak reddedicek rolü sıfırlar")
    .addField(`:white_small_square: ${prefix}yetkili-log #kanal`, "Botlist yetkili log kanal ayarlar")
	  .addField(`:white_small_square: ${prefix}yetkili-log sıfırla`, "Botlist Yetkili Log kanalı sıfırlar")
	  .addField(`:white_small_square: ${prefix}botekle <id> <prefix>`, "Üye botunu ekliyebilir")
	  .addField(`:white_small_square: ${prefix}botekle-üye-rol`, "Botu Onaylayınca botun sahibine vericek rolü ayarlar")
    .addField(`:white_small_square: ${prefix}botekle-üye-rol sıfırla`, "Botu Onaylayınca botun sahibine vericek rolü sıfırlar")
	  .addField(`:white_small_square: ${prefix}botekle-bot-rol`, "Botu Onaylayınca botun kendisine vericek rolü ayarlar")
  	.addField(`:white_small_square: ${prefix}botekle-bot-rol sıfırla`, "Botu Onaylayınca botun kendisine vericek rolü sıfırlar") 
    .setImage("https://media.discordapp.net/attachments/714395066981941279/779665352690106369/standard_3.gif")
    .addField(`» Linkler`, `[Davet Linki](https://www.lkisalt.tk/bot) **|** [Destek Sunucusu](https://www.lkisalt.tk/dc) **|** [Web Sitesi](https://bot.vahdetlol.tk/) **|** [Youtube](https://www.lkisalt.tk/yt)`)
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
 aliases: ['botlistyardım'],
 permLevel: 0,
};

exports.help = {
 name: 'botlist-yardım',
 description: '',
 usage: ''
};