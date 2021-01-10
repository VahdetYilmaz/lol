const Discord = require("discord.js");//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

 //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\ 
let user = message.mentions.users.first()
let money = args[1]    
  if(message.author.id !== ayarlar.botsahibi) return message.react("❌")
  if(!user) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`Cüzdanına para eklenecek kişiyi etiektlemelisin!`))
 //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
  if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Cüzdana eklenecek para miktarını girmelisin!`)) 
 //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\ 
if(isNaN(args[1])) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Cüzdana eklenecek para miktarını girmelisin!`)) 
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\ 
if(args[1] < 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`)
                                                      );    

 //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\ 
 
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ ${user} kullanıcısının cüzdanına ${money} 💸 eklendi!`))
db.add(`para_${user.id}`, money)  
}
  
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
exports.conf = {
  enabled: true,
  aliases: ["paraekle"],
};

exports.help = {
  name: 'para-ekle',
};//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
 