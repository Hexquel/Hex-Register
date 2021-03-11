const { MessageEmbed } = require('discord.js')
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

if(!member) return message.channel.send(new MessageEmbed().setDescription(`Lütfen tüm argümanları düzgün yerleştiriniz ve tekrar deneyiniz. \nÖrnek \`.kadın @Hex/ID\``).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(settings.renk.kirmizi)).then(x => x.delete({timeout: 6500}));
if(member.id === message.author.id) return message.channel.send(new MessageEmbed().setDescription(`Kendini kayıt edemezsin.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(settings.renk.kirmizi)).then(x => x.delete({timeout: 6500}));
if(member.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed().setDescription(`Sunucu sahibine bu komutu kullanamazsın.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(settings.renk.kirmizi)).then(x => x.delete({timeout: 6500}));
if(member.id === client.user.id) return message.channel.send(new MessageEmbed().setDescription(`Bir bota bu komutu kullanamazsın.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(settings.renk.kirmizi)).then(x => x.delete({timeout: 6500}));
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`Bu kullanıcı sizden üst/aynı pozisyonda.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(settings.renk.kirmizi)).then(x => x.delete({timeout: 6500}));
data.add(`yetkili.${message.author.id}.kadin`, 1)
data.add(`yetkili.${message.author.id}.toplam`, 1)
let kayıtlar = data.fetch(`yetkili.${message.author.id}.toplam`)
member.roles.add(settings.roller.kadınRol)
member.roles.remove(settings.roller.kayıtsızrol)
member.roles.remove(settings.roller.karantinarol)
message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`${member} Adlı üye sunucumuzda <@&${settings.roller.kadınrol1}> olarak kayıt edildi.`)
.setColor(settings.renk.hexmor))
message.react(settings.durumlar.dogru)


client.channels.cache.get(settings.kanallar.genelchat).send(`<@${member.id}>, \`Aramıza hoş geldiniz! Rol seçim odalarından rolleriniz almayı unutmayın iyi eğlenceler.\` :tada:`).then(x => x.delete({timeout: 5000}))
data.push(`isim.${member.id}`,{userID: member.id, role: settings.roller.kadınRol, teyitciid: message.author.id, teyitcisim: message.author.username, Sex: 'Kadın'})}

exports.conf = {enabled: true, guildOnly: true, aliases: ["kadın", "k"]};
exports.help = {name: 'kadın'};
