const { Client, Message, MessageEmbed } = require('discord.js');


module.exports = {
    name: "ban",
    aliases: ["jabsdk"],
    description: "Bans a Member from a Guild",
    usage: "ban @User",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(
            new MessageEmbed()
            .setColor("BLACK")
            .setAuthor(message.author.tag)
            .setDescription("**You Dont Have The Permissions To Mute Users! - [BAN_MEMBERS]**")
            .setFooter("happy to help")
        );

        let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!banMember) {
            const missingArgs = new MessageEmbed()
                .setColor("BLACK")
                .setTitle("Missing arguments")
                .setDescription(`
                                **Name** : ban\n
                                **Description** :Bans a Member from a Guild\n
                                **aliases** : jabsdk\n
                                **usage**: ban <@user/ID> [reason]\n `)
                .setFooter("happy to help ")
                .setTimestamp()
            return message.channel.send(missingArgs);
        }
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "no reason"

        if (!message.guild.me.permissions.has(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply(
            new MessageEmbed()
                .setColor("BLACK")
                .setAuthor(message.author.tag)
                .setDescription("I dont have the permissions to ban users!")
                .setFooter("happy to help ")
        )

        let Sembed = new MessageEmbed()
            .setColor("BLACK")
            .setAuthor(banMember.user.tag)
            .setFooter("Coded by: .why.so.sad")
            .setThumbnail(banMember.user.displayAvatarURL())
            .setDescription(`> You've been banned from ${message.guild.name} because of ${reason}. You are permanently banned.`)
        let i = 0;
        banMember.send(Sembed).catch(err => console.log(err.toString().BLACK))
        banMember.ban(banMember, reason).catch(err => {
            console.log(err.toString().BLACK)
            i++
        }).then(
            () => {
                let embed = new MessageEmbed()
                    .setColor("BLACK")
                    .setAuthor(banMember.user.tag)
                    .setFooter("happy to help ")
                    .setThumbnail(banMember.user.displayAvatarURL())
                    .setDescription(`✅ **${banMember.user.tag}** successfully banned!`)
                if (i == 1)
                    return message.reply("MISSING PERMISSIONS TO BAN HIM!")
                message.reply(embed).then(msg => {
                    msg.delete({ timeout: 10000 });
                })
            }
        )


    }
}