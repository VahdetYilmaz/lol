const Discord = require('discord.js')
const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');
exports.run = async (client, message, args) => {
 try {
  const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
let shardinfo = {
        ping: await client.shard.fetchClientValues('ws.ping'),
        server_count: await client.shard.fetchClientValues('guilds.cache.size'),
        user_count: await client.shard.fetchClientValues('users.cache.size'),
        uptime: await client.shard.fetchClientValues("uptime")
    }
let i = message.guild.shardID
    let synex = new Discord.MessageEmbed()
    .setTitle('Willy Shard bilgileri')
    .setFooter(`Bu sunucunun shardı: ${i+1}`)
    .setColor('BLUE')
      .setThumbnail(client.user.avatarURL())
    for(i=0;i<client.shard.count;i++) {
        synex.addField(`Shard: ${i+1} | Ping: ${Math.round(shardinfo.ping[i])}ms `, ` ${shardinfo.server_count[i]} sunucu ve ${shardinfo.user_count[i]} kullanıcı\nUptime: ${moment.duration(shardinfo.uptime[i]).format(`D [Gün] , H [Saat], m [Dakika], s [Saniye]`)} `)
    }
    message.channel.send(synex)
       }   catch (err) {
    const ayarlar = require("../ayarlar.json");
    const synex = new Discord.MessageEmbed()
      .setDescription(
        `Sanırım bir sorun var! Bunu Mort'a
 bildir !Hata kodu: ${err}`
      )
      .setColor("RED")
      .setThumbnail(client.user.avatarURL())
      .setTimestamp();
    message.channel.send(synex);
                         }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["shardbilgi"],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'botshard2'

};