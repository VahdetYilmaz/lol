const { GiveawaysManager } = require('discord-giveaways');
const fs = require('fs');
const db = require('quick.db')
const wiodb = require('wio.db')
const ms2 = require('parse-ms')
const ms = require("ms")
const Canvas = require('canvas')
const ayarlar = require('./ayarlar.json');
require('./invite.js')
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`Bot Başarıyla Hostlandı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
require('events').EventEmitter.prototype._maxListeners = 70;
require('events').defaultMaxListeners = 70;
  process.on('warning', function (err) {
    if ( 'MaxListenersExceededWarning' == err.name ) {
    process.exit(1); 

    }
  }); 
function foo() {
  return new Promise((resolve, reject) => {
  return resolve();
});
}
async function foobar() {
foobar();
foo().then(() => {}).catch(() => {});
foobar().catch(console.error);
}

var prefix = ayarlar.prefix

const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION']});
Discord.Role.prototype.toString = function() {
return `@${this.name}`
}
const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`); 
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name); 
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)]; 
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name); 
            });
            resolve();
        } catch (e) {
         reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)]; 
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
   if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
    return permlvl;
};

client.login(ayarlar.token).then(
  function() {
    console.log("[Token-Log] Token doğru bir şekilde çalışıyor.");
  },
  function(err) {
    console.log("[ERROR] Token'de bir hata oluştu: " + err);
    setInterval(function() {
      process.exit(0);
    }, 20000);
  }
);


if(!db.get("giveaways")) db.set("giveaways", []);

const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {

    async getAllGiveaways(){
        return db.get("giveaways");
    }

    async saveGiveaway(messageID, giveawayData){
        db.push("giveaways", giveawayData);
        return true;
    }

    async editGiveaway(messageID, giveawayData){
        const giveaways = db.get("giveaways");
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageID !== messageID);
        newGiveawaysArray.push(giveawayData);
        db.set("giveaways", newGiveawaysArray);
        return true;
    }

    async deleteGiveaway(messageID){
        const newGiveawaysArray = db.get("giveaways").filter((giveaway) => giveaway.messageID !== messageID);
        db.set("giveaways", newGiveawaysArray);
        return true;
    }
  
  
};
const manager = new GiveawayManagerWithOwnDatabase(client, {
  storage: false,
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "#0a99ff",
    reaction: "🎉"
  }
});
client.giveawaysManager = manager;

///son///