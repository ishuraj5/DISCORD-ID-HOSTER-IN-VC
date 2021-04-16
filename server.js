const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("JOINED THE CHANNEL")

client.user.setActivity(`status`, {
type: "STREAMING",
url: ""})
    .then(presence => console.log(`HOST BOT OF INFERNO  ${presence.game ? presence.game.none : 'INFERNO👑'}`))
    .catch(console.error);
  let channel = client.channels.get('VOICE-CHANNEL-ID'); 
channel.join()
});

client.login('ID-TOKEN'); 
