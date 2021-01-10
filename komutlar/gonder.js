const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
  let para = db.fetch(`para_${message.author.id}`)
  
  let etiket = message.mentions.users.first()

  let  miktar = args[1]
  
  if(!etiket) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))                   
                      .setDescription(`Para göndermek için bir kullanıcı etiketlemelisin!`))
  //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
  if(! miktar) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`Göndermek istediğin para miktarını girmelisin!
                     \`c!gönder <miktar || hepsi>\``))
  if(miktar < 0 ||  miktar.startsWith('0') ) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`));
 if(miktar === 'all' || miktar === 'hepsi') {
   if(para < 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Şuan elinde hiç para yok.`))//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
db.add(`para_${etiket.id}`, para)
db.add(`para_${message.author.id}`, -para)   
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ Başarılı, ${etiket}'a ${para} 💸 gönderdin!`))
   //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
 } else {
  if(isNaN(miktar)) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`))
 } //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
  if(etiket.id === message.author.id) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))               
                      .setDescription(`⛔ Kendine para gönderemezsin!`))
  //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
  if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))                 
                      .setDescription(`⛔ Şuan elinde ${para ? "sadece " + para + " 💸 var!": "hiç para yok!"} `))
if(miktar === 'all' || miktar === 'hepsi') {
  return;
}  else { //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\ 
  message.channel.send(new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
                .setDescription(`✅ Başarılı,${etiket}'a ${miktar} 💸 gönderdin!`))
  db.add(`para_${etiket.id}`, miktar)
  db.add(`para_${message.author.id}`, -miktar)

}};
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gonder"],
  permLevel: 0
};

exports.help = {
  name: 'gönder',
};//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\