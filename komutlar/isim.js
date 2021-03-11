const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const settings = require('../managment/settings.json')

module.exports.run = async (client, message, args) => {

    let yes = "<a:tik:802945756754345985>";
    let no = "<a:carp:803311815441383424>";

let embed = new Discord.MessageEmbed().setFooter("Hex 🖤").setColor("fff619").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

let hedefKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let tag = "Hex"
let ikinciTag = "▪"

args = args.filter(a => a !== "" && a !== " ").splice(1);
let isim = args.filter(arg => isNaN(arg)).map(arg => arg.charAt(0).replace('i', "İ").toUpperCase()+arg.slice(1)).join(" ");
let yaş = args.filter(arg => !isNaN(arg))[0] || "16";
let Isim = `${isim} | ${yaş}`

let isimler = db.get(`isimler.${hedefKişi.id}`) || [];
isimler = isimler.reverse();    
let isimListesi = isimler.length > 0 ? isimler.map((value) => `<a:tik:802945756754345985> \`${value.İsim}\``).join("\n") : `\`Bulunamadı\` <a:carp:803311815441383424>`;


if(!isim || !yaş) {
message.channel.send(embed.setDescription(`**Bir isim girmelisin**`).setColor("#fff619"))
return;    
};

if (!message.member.roles.cache.some(r => ["818446797307117588"].includes(r.id)) && !message.member.hasPermission("ADMINISTRATOR")) {
message.react(no);
message.channel.send(embed.setDescription(`**Gerekli yetkiye sahip değilsin.**`).setColor("#fff619"))
return;    
};

if(!hedefKişi) {
message.react(no);
message.channel.send(embed.setDescription(`**Bir ID girmelisin**`).setColor("#f5ea1b"))
return;    
};

message.react(yes);
hedefKişi.setNickname(Isim);
message.channel.send(embed.setDescription(`${hedefKişi} Adlı Üyenin İsmi \`${Isim}\` olarak güncellendi. <a:tik:802945756754345985>

**Kullanıcının Veritabanındaki İsim Kayıtları**
${isimListesi}`))
db.push(`isimler.${hedefKişi.id}`, {
    İsim: Isim,
    Yaş: yaş,
    Yetkili: message.author.id,
    });
};

exports.conf = {enabled: true, guildOnly: true, aliases: ["i"]};
exports.help = {name: 'isim'};
  