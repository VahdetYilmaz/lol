const Discord = require('discord.js');
const ms = require('parse-ms');
const db = require('quick.db')//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
module.exports.run = async (client, message, args) => {
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
 let user =  message.mentions.users.first()

 if(!user) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))                   
                      .setDescription(`⛔ Parasını çalmak istediğin kullanıcıyı etiketlemelisin!`))
  let targetuser = await db.fetch(`para_${user.id}`);
  let author     = await db.fetch(`çalma_${message.author.id}`);
  let author2    = await db.fetch(`para_${message.author.id}`);
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
  let timeout = 1200000;

if (author !== null && timeout - (Date.now() - author) > 0) {
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\    
  let time = ms(timeout - (Date.now() - author));
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
     .setDescription(`⏱ Birisini soymak için ${time.minutes ? time.minutes + ' dakika,' : ''} ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`);
    message.channel.send(timeEmbed)

  } else {
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
  .setDescription(`⛔ Para çalmak için en az 200 💸 paraya ihtiyacın var`);


  if (author2 < 200) {
    return message.channel.send(moneyEmbed)
  }//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
var lostmoney = rastgeleMiktar(150,500)
  let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
  .setDescription(`⛔ Faqir birisini soymaya çalıştın ve ${lostmoney} 💸 ceza yedin`);
  

  //== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\  
  if (targetuser <= 100) {
    return message.channel.send(moneyEmbed2),db.set(`çalma_${message.author.id}`, Date.now()),db.add(`para_$${message.author.id}`, -lostmoney)
db.set(`çalma_${message.author.id}`, Date.now())
db.add(`para_${message.author.id}`, -lostmoney)
  }

  let authorembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
  .setDescription(`⛔ Kendini soymayımı düşünüyorsun?!`);
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
  if(user.id === message.author.id) {
    return message.channel.send(authorembed)
  }
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
let gotmoney = rastgeleMiktar(600,1200)

  let embed = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
   .setDescription(`✅ Soygun Başarılı, ${user}'ı soydun ve ${gotmoney} 💸 kazandın`)
   .setColor("GREEN")

   message.channel.send(embed)
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
await db.add(`para_${user.id}`, -gotmoney);
await db.add(`para_${message.author.id}`, gotmoney);
await db.set(`çalma_${message.author.id}`, Date.now());
  
		}
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\	
}
exports.conf = {
  enabled: true,
  aliases: [],
};
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
exports.help = {
  name: 'çal',
};