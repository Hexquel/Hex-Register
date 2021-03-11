const { MessageEmbed } = require('discord.js')//Hexquel#0001
const data = require('quick.db')
const settings = require('../managment/settings.json')
exports.run = async (client, message, args) => {
if(!message.member.roles.cache.get(settings.roller.teyitcirol) && !message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`Bu komutu kullanmak için \`<@&${settings.roller.teyitcirol}>\` yetkisine sahip olmalısın.`)
.setColor(settings.renk.kirmizi))
.then(x => x.delete({ timeout: 6500 }));

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new MessageEmbed().setDescription(`Lütfen tüm argümanları düzgün yerleştiriniz ve tekrar deneyiniz. \nÖrnek \`.erkek @Hex/ID\``).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor("#e676f5")).then(x => x.delete({timeout: 6500}));
if(member.id === message.author.id) return message.channel.send(new MessageEmbed().setDescription(`Kendini kayıt edemezsin.`).setColor("#e676f5").setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor("#e676f5")).then(x => x.delete({timeout: 6500}));
if(member.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed().setDescription(`Sunucu sahibine bu komutu kullanamazsın.`).setColor("#e676f5").setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor("#e676f5")).then(x => x.delete({timeout: 6500}));
if(member.id === client.user.id) return message.channel.send(new MessageEmbed().setDescription(`Bir bota bu komutu kullanamazsın.`).setColor("#e676f5").setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor("#e676f5")).then(x => x.delete({timeout: 6500}));
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`Bu kullanıcı sizden \`üst/aynı\` pozisyonda.`).setColor("#e676f5").setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor("#e676f5")).then(x => x.delete({timeout: 6500}));
data.add(`yetkili.${message.author.id}.erkek`, 1)
data.add(`yetkili.${message.author.id}.toplam`, 1)
let kayıtlar = data.fetch(`yetkili.${message.author.id}.toplam`)
member.roles.add(settings.roller.erkekRol)
member.roles.remove(settings.roller.kayıtsızrol)
member.roles.remove(settings.roller.kayıtsızrol)
member.roles.remove(settings.roller.karantinarol)//pinglenmemesi için ctrl+c ctrl+v 
message.channel.send(new MessageEmbed()

.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`${member} Adlı üye sunucumuzda <@&${settings.roller.erkekrol1}> olarak kayıt edildi.`)
.setColor(settings.renk.hexmavi))


client.channels.cache.get(settings.kanallar.genelchat).send(`<@${member.id}>, \`Aramıza hoş geldiniz! Rol seçim odalarından rolleriniz almayı unutmayın iyi eğlenceler.\` :tada:`).then(x => x.delete({timeout: 10000}))

data.push(`isim.${member.id}`,{userID: member.id, role: settings.roller.erkekRol, teyitciid: message.author.id, teyitcisim: message.author.username})}

exports.conf = {enabled: true, guildOnly: true, aliases: ["erkek", "e"]};
exports.help = {name: 'erkek'};
