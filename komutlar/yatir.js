const Discord = require("discord.js");
const db = require('quick.db')//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
module.exports.run = async (client, message, args) => {
  
  let param = db.fetch(`para_${message.author.id}`)
    let miktar = args[0]//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
//-----------------------------------------------------------------------------------------------------\\   

    if(!miktar) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Bankaya yatırılacak para miktarını girmelisin!
\`c!yatır <miktar || hepsi>\``))
  //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
//-----------------------------------------------------------------------------------------------------\\
 if(miktar === 'hepsi' || miktar === 'all') {
   if(param === 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription("⛔ Bankaya yatırmak için hiç paran yok!"))
db.add(`bankapara_${message.author.id}`, param)
db.add(`para_${message.author.id}`, -param)   
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ Başarılı, bankaya ${param} 💸 yatırdın!`))
} else {//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
    if(isNaN(miktar)) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`))  
  }//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
//-----------------------------------------------------------------------------------------------------\\
      if(miktar < 0 || miktar.startsWith('0')) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Geçerli sayımı acaba bu?`))
   if (miktar > param) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Bankaya yatırmak için elinde sadece ${param} 💸 var`))
  //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
//-----------------------------------------------------------------------------------------------------\\
if(args[0] === 'all' || args[0] === 'hepsi') {
  return;
}  else {//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ Başarılı, bankaya ${miktar} 💸 yatırdın!`))
db.add(`para_${message.author.id}`, -miktar)
db.add(`bankapara_${message.author.id}`, miktar) 
  }//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
}
exports.conf = {
  enabled: true,
  aliases: ["dep","deposit","yatir"],
};

exports.help = {
  name: 'yatır',
};//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\