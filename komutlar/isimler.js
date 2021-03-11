const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const settings = require('../managment/settings.json')

module.exports.run = async (client, message, args) => {

  let yes = "<a:tik:802945756754345985>";
  let no = "<a:carp:803311815441383424>";

let embed = new Discord.MessageEmbed().setFooter("Hex 🖤").setColor("fff619").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

let hedefKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

let isimler = db.get(`isimler.${hedefKişi.id}`) || [];
isimler = isimler.reverse();    
let isimListesi = isimler.length > 0 ? isimler.map((value) => `\`${value.İsim}\``).join("\n") : `**Geçmiş İsimleri Bulunamadı <a:carp:803311815441383424>**`;


message.channel.send(embed.setDescription(`${hedefKişi} Adlı Üyenin Geçmiş isimleri

${isimListesi}
`))

};
exports.conf = {enabled: true, guildOnly: true, aliases: ["geçmiş", "isimler"]};
exports.help = {name: 'isimler'};