const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
   const filter = (reaction, user) => {
  return ["✅","📛"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
};

  const yardım = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}  Tarafından İstendi`)
      .setColor("GREEN")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`**Davet Komutları: ✅  \n Ana Menü: 📛 **\n *Yetkim olmazsa ÇALIŞMAM*`)
  .setImage("https://media.discordapp.net/attachments/714395066981941279/779665352690106369/standard_3.gif")
 var menü = await message.channel.send(yardım)
 const collector = menü.createReactionCollector(filter, { time: 99999 });
  let emojiler = ["✅","📛"]
  await menü.react(emojiler[0])
  await menü.react(emojiler[1])

collector.on('collect', (reaction, user) => {

  
     if(reaction.emoji.name == "✅") {
    const vahdetlol = new Discord.MessageEmbed()
      .setColor("BLUE")
 .addField("**Davet Komutları**", `\n**w!rütbe-ekle @rol davet** = *Rütbe Ekler* \n**w!rütbeler** = *Rütbeleri Gösterir 1 Den 10'a Kadar* \n**w!rütbe-sıfırla** = *Rütbeyi Sıfırlar.* \n**w!davetleri-sıfırla** = *Davetleri Sıfırlar.* \n**w!top** = *Lider Tablosunu Gösterir.* \n**w!davetlerim** = *Davetlerinizi Gösterir.* \n**w!bonus-ekle** = *Bonus Ekler.* \n**w!davet-kanal #kanal** = *Davet Kanalını Ayarlar.* \n**w!davet-kanal-sıfırla** = *Davet Kanalını Sıfırlar.*`)
.setImage("https://media.discordapp.net/attachments/714395066981941279/779665352690106369/standard_3.gif")
    .addField(`» Linkler`, `[Davet Linki](https://www.lkisalt.tk/bot) **|** [Destek Sunucusu](https://www.lkisalt.tk/dc) **|** [Web Sitesi](https://bot.vahdetlol.tk/) **|** [Youtube](https://www.lkisalt.tk/yt)`)
 menü.edit(vahdetlol)
  }
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
 aliases: ['invite-help'],
 permLevel: 0,
};

exports.help = {
 name: 'davet-yardım',
 description: '',
 usage: ''
};