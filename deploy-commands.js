require('dotenv').config();

const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Antwortet mit Pong!')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('🔁 Registriere Slash Commands...');

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );

    console.log('✅ Slash Commands registriert!');
  } catch (error) {
    console.error(error);
  }
})();
