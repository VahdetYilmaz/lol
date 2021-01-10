const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('message', reqEvent('message'));
};
//== CODEWORK (discord.gg/yDYdfzMSDB) CODEWORK ==\\