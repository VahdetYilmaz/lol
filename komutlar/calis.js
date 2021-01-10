const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message) => {
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
  
let times = await db.fetch(`çalışmasüresi_${message.author.id}`)
  let day = 1020000
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
  if (times !== null && day - (Date.now() - times) > 0) {
        let time = ms(day - (Date.now() - times));
    message.channel.send(new Discord.MessageEmbed()
                        .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Çalışmak için ${time.minutes ? time.minutes + ' dakika,' : ''} ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'komutu tekrar gir!'}`))
  return
  }//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
  let works = ["Süpermarkette","Part-time'da","Fırında","Fabrikada","Galeride","Sanayide","Ayakkabı Mağazasında","Teknoloji mağazasında"]
  var work = works[Math.floor(Math.random() * works.length)];
let moneys = rastgeleMiktar(600,1200);
      message.channel.send(new Discord.MessageEmbed()
                   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                   .setColor("YELLOW")
                   .setDescription(`${work} çalıştın ve ${moneys} 💸 kazandın!`))
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
db.set(`çalışmasüresi_${message.author.id}`, Date.now())

  db.add(`para_${message.author.id}`, moneys)
    
 };
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
exports.conf = {
  enabled: true,
  aliases: ["calis","maaş"],
};

exports.help = {
  name: 'çalış',
};//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\