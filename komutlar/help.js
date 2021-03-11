const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    try {
          await message.channel.send(
          new Discord.MessageEmbed()
           .setColor("#fd8f8f") 
             .setAuthor(message.author.tag,message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`Komutlar: \n ${client.commands.map(props => `\`${props.help.name}\``).join(" |-| ")}`));
    } catch (e) {
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'help',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
