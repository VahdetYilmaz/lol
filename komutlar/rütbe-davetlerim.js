const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
    const db = new Database("./Servers/" + message.guild.id, "Invites");
    var data = db.get(`invites.${message.member.id}`) || { total: 0, fake: 0, inviter: null, regular: 0, bonus: 0, leave: 0 };//pythonic
    var embed = new Discord.MessageEmbed()
            .setTitle(`**${message.author.username}**`)
    .setDescription(`Toplam \**${(data.total || 0) + (data.bonus || 0)}\** davetin var <a:clap:780188764638806016> \n\n <a:Onaylamak:714416076393283604> \**${data.regular || 0}\** Düzenli\n <a:yldzlar:779548289108148255> \**${data.bonus || 0}\** Bonus \n :poop: \**${data.fake || 0}\** Fake\n <a:Reddetmek:714416254206607410> \**${data.leave || 0}\** Ayrılma\n\n Daha Fazlası için bu sunucuyu arkadaşlarınla Paylaş :wink:`)
    .setColor("RANDOM")
        .addField(`» Linkler`, `[Davet Linki](https://www.vahdetlol.gq/walkerwayne) **|** [Destek Sunucusu](https://www.vahdetlol.gq/vahdetlol) **|** [Web Sitesi](https://www.vahdetlol.ml/) **|** [Youtube](https://www.vahdetlol.gq/VahdetLol)`)
        .setTimestamp()
        .setFooter(`Willy `)
        .setImage("https://media.discordapp.net/attachments/714395066981941279/779665352690106369/standard_3.gif") 
    message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'davetlerim',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};
