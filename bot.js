require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once('ready', () => {
  console.log('Cleo is online.');
});

client.on('messageCreate', (message) => {
  if (message.content.startsWith('>')) {
    if (message.content.substring(1) === 'ping') {
      message.reply('Hello, this is Cleo.');
    }
  }
});

client.login(process.env.TOKEN);
