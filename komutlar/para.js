const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\  
  
          let user = message.mentions.users.first() || message.author
          
  var cüzdan = db.fetch(`para_${user.id}`)
  var banka = db.fetch(`bankapara_${user.id}`)   
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\ 
  var toplam= cüzdan+banka
message.channel.send(new Discord.MessageEmbed()
                  .setColor("YELLOW")
                  .setAuthor(user.tag, user.avatarURL({dynamic: true}))     
                  .addField("Cüzdan",`${cüzdan ? cüzdan + ' 💸' : "0 💸"}`,true)
                  .addField("Banka",`${banka ? banka + ' 💸' : "0 💸"}`,true)
                  .addField("Toplam",`${toplam ? toplam + ' 💸' : "0 💸"}`,true))
  }

//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
exports.conf = {
  enabled: true,
  aliases: ["money"],
};
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\
exports.help = {
  name: 'para',
};