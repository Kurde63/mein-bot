require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`✅ Bot ist online als ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes("piskopat")) {
    message.channel.send("🔥🔥🔥");
  }
});

client.login(process.env.TOKEN);
