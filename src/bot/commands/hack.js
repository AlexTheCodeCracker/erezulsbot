const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'hack',
    aliases: ['fakehack'],
    description: 'fake hack someone',
    useage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        var ips = [
            '10.313.523.502.00.1',
            '25.537.753.462.29.2',
            '21.175.866.974.07.08',
            '32.653.587.825.35.5',
            '12.172.764.781.22.8',
            '91.723.242.452.09.3',
            '92.743.116.896.85.6',
            '84.091.000.853.54.7',
            '51.071.124.129.12.0'
        ]
        var ipadress = ips[Math.floor(Math.random() * ips.length)];

        if (!args[0]) return message.channel.send(
            new MessageEmbed()
            .setColor("BLACK")
            .setAuthor(message.author.tag)
            .setDescription('**Who do you want to hack?\nTag Please**')
            .setFooter("happy to help ")
        )
        const Hacking = args.slice(0).join(" ") && args.shift().toLowerCase()

        let msg = await message.channel.send(
            new MessageEmbed()
            .setColor("BLACK")
            .setAuthor(message.author.tag)
            .setDescription(`**Hacking ${Hacking}**`)
            .setFooter("happy to help g")
        )
        let time = 3000
        setTimeout(function () {
            msg.edit(
                new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription(`[▖] Finding discord gmail ${Hacking}... `)
                .setFooter("happy to help ")
            )
        }, time)
        time += 3000
        setTimeout(function () {
            msg.edit(
                new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription(`[▘] Gmail: ${Hacking}@gmail.com`)
                .setFooter("happy to help ")
            )
        }, time)
        time += 3000
        setTimeout(function () {
            msg.edit(
                new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription(`[▝] Getting user password`)
                .setFooter("happy to help ")
            )
        }, time)
        time += 3000
        setTimeout(function () {
            msg.edit(
                new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription(`[▗] Password:`)
                .setFooter("happy to help ")
            )
        }, time)
        time += 3000
        setTimeout(function () {
            msg.edit(
                new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription(`[▖]Getting account access...`)
                .setFooter("happy to help ")
            )
        }, time)
        time += 3000
        setTimeout(function () {
            msg.edit(
                new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription(`[▘] Collecting data...  `)
                .setFooter("happy to help ")
            )
        }, time)
        time += 3000
        setTimeout(function () {
            msg.edit(
                new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription(`[▝] Hacking all accounts linked to ${Hacking}@gmail.com....`)
                .setFooter("happy to help ")
            )
        }, time)
        time += 3000
        setTimeout(function () {
            msg.edit(
                new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription(`[▗] Fiding ip adress...`)
                .setFooter("happy to help ")
            )
        }, time)
        time += 3000
        setTimeout(function () {
            msg.edit(
                new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription(`[▖] Ip: ${ipadress}`)
                .setFooter("happy to help ")
            )
        }, time)
        time += 3000
        setTimeout(function () {
            msg.edit(
                new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription(`[▘] Information collected...`)
                .setFooter("happy to help ")
            )
        }, time)
        time += 3000
        setTimeout(function () {
            msg.edit(
                new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription(`[▝] Downloading virus  `)
                .setFooter("happy to help ")
            )
        }, time)
        time += 3000
        setTimeout(function () {
            msg.edit(
                new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription(`[▗]Destroying friends list`)
                .setFooter("happy to help ")
            )
        }, time)
        time += 3000
        setTimeout(function () {
            new MessageEmbed()
            .setColor("BLACK")
            .setAuthor(message.author.tag)
            .setDescription(`[▖] Getting results...`)
            .setFooter("happy to help ")
        }, time)
        time += 3000
        setTimeout(function () {
            new MessageEmbed()
            .setColor("BLACK")
            .setAuthor(message.author.tag)
            .setDescription(`User ${Hacking} is Hacked By ${message.author.tag} Hehe`)
            .setFooter("happy to help ")
        }, time)
        time += 3 * 1000
    }
}