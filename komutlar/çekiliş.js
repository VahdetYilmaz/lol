const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const çekiliş = new Discord.MessageEmbed()
                .setColor('GOLD')
        .setFooter(`${msg.author.username} Başarıyla Çekiliş Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('Willy Çekiliş Menüsü')
        .setThumbnail('https://images-ext-2.discordapp.net/external/kDBpho1u_3jnlJrZRZWAqC-vX6EnuReJpwWeA1iCH4U/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/756966543275065475/944a3965bb02f26c907d7f884294b07b.png?width=53&height=53')
        .setDescription('<a:SabitGif:714416499233652758> Botu Davet Etmek İçin `w!davet` yazabilirisiniz.',false)
        .addField('**__Çekliş Başlat__**','<a:kon:779547095932600360> `w!çekiliş-başlat #kanal <süre> <kazanansayısı> Ödül` \nBelirtilen Kanalda Çekiliş Başlatırsınız',false )
        .addField('**__Çekiliş Yenile__**','<a:sguad:779548312532549642>  `w!çekiliş-yenile >mesajid>` \n Belirtilen İd deki Çekilişi Yeniler',true)
        .addField('**__Çekiliş Liste__**','<a:sguad:779548312532549642> `w!çekiliş-liste` \nSunucudaki Aktif Çekilişleri Listeler',true)
        .addField('**__Çekiliş Bitir__**', '<a:yldzlar:779548289108148255> `w!çekiliş-bitir <mesajid>` \nBelirtilen İd deki Çekilişi Sonlandırır.',false)
        .addField('**__Bilgilendirme__**', '<a:RainbowSonsuzGif:713491732683292713>  `w!davet` | Botu Sununuya Davet Edersiniz \n<a:RainbowSonsuzGif:713491732683292713> `w!İstatistik` | Botun İslatistiklerini Görürsünüz',true)
        .setImage()
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['çekiliş', 'giveawey'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'çekiliş',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'çekiliş'
};