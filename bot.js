const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("559039304697905161")
setInterval(function() {
channel.send(`TRIX IS LEGEND`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
