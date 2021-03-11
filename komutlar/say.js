const Discord = require("discord.js");//Hexquel#0001
const mapping = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {
  let toplam = message.guild.memberCount;
  let sunucu = 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let onlinesayi = message.guild.members.cache.filter(
    only => only.presence.status != "offline"
  ).size;
  let online =
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let tag = message.guild.members.cache.filter(m => m.user.username.includes("Hex")).size;
  let tagdakiler = 
      `${tag}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let ses =
      `${count}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let boost = message.guild.premiumSubscriptionCount
  let boostcuk = `${boost}`.split("").map(a => mapping[a] || '0')
  .join("")
  const hex = new Discord.MessageEmbed()
  .setDescription(`\`•\` Seste toplam **${ses}** kullanıcı var.
\`•\` Toplam **${tagdakiler}** kişi tagımıza sahip.
\`•\` Sunucumuzda toplam **${sunucu}** üye var.
\`•\` Sunucumuza toplam **${boostcuk}** takviye yapılmış.
\`•\` Sunucumuzda toplam **${online}** çevrimiçi üye var.`)
.setColor("#fff619");
  message.channel.send(hex)//kurulumu yapamazsanız Hexquel#0001
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};//Hexquel#0001   