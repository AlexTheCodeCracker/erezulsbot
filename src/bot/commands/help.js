const MessageButton = require('discord-buttons');
const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require("discord-buttons");

const { MessageMenuOption, MessageMenu } = require("discord-buttons");
 
 module.exports = {
    name: "help",
    cooldown: 5,
    aliases: ["commands", "auda"],
 
run: async (bot, message, args) => { //async
      //--------------------------------------S T A R T--------------------------------------//
 



                const embed = new Discord.MessageEmbed()
                .setTitle(`erezul's/privater bot`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`_**Klicken Sie unten auf das Auswahlmenü, um die __Discord-Bot Funktion Seiten zu __tauschen__**_\n🏠 - Startseite\n🎟️ - Befehle \n❔ - Funktionen\n📔 - Über mich`)
                .setColor(`#5728D4`)

                const embed2 = new Discord.MessageEmbed()
                .setTitle(`Bot Commands`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**__Hier Sind meine Commands:__**\n\`help,\` \`hack,\` \`whois,\` \`serverinfo,\` \`ping,\`botinfo,\`,\` \`\``)
                .setColor(`#5728D4`)

                const embed3 = new Discord.MessageEmbed()
                .setTitle(`Socialmedida`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**Hey , ich mache TikTok & YouTube hier hast du meine Kanäle \nhttps://www.youtube.com/channel/UCSFE_-6R5mmxg1AcrvyT3dQ\n \nhttps://tiktok.com/@erezulondrip\n Hier nochmal für den ersteller dieses Bottes \n https://tiktok.com/@.why.so.sadd\n`)
                .setColor(`#5728D4`)

                // Last embed
                const embed4 = new Discord.MessageEmbed()
                .setTitle(`Über Den Bot & Ersteller`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**Der Bot wurde in .js gecoded aufgrund von vielen nachfrage kannst du mit dem bot ganz einfach alles Nachgucken und musst nicht Ständig im chat nachfragen dieser bot wirde unter anderem auch regelmäßIG geupdated so dass es nicht dazu kommt dass er veraltet**`)
                .setColor(`#5728D4`)

                //-----------------------------OPTIONS----------------------
        //examples .setLabel('Put What You Want to put')
        //.setValue('')
        //.setDescription('put what u wantnto put')
 
        let option1 = new MessageMenuOption()
        .setLabel('Startseite')
        .setValue('option1')
        .setEmoji("📩")
        .setDescription('Die Startseite des Bot`s')

        let option2 = new MessageMenuOption()
        .setLabel('Commands')
        .setValue('option2')
        .setEmoji("📜")
        .setDescription('Siehe alle Commands')

        let option3 = new MessageMenuOption()
        .setLabel('Socialmedia')
        .setValue('option3')
        .setEmoji("ℹ️")
        .setDescription('Hier siehst du meine Socialmedia Kanäle')
  
      let option4 = new MessageMenuOption()
        .setLabel('Über Mich')
        .setValue('option4')
        .setEmoji("🙋‍♂️")
        .setDescription('Die Über Mich Seite')
  

        let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Bot Menu')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4)

        const Sendmenu = await message.channel.send(embed, select);

        let collector = Sendmenu.createMenuCollector(b => b, { time : 60000 });
 
    collector.on("collect" , (b) => {
      
        if(b.clicker.user.id !== message.author.id)
              return b.reply.send(`❌ **Nur <@${message.author.id}> Hat die Rechte um zu Reagieren**\n**Tip**: \`Um Das nutzen zu können benutze den help command\``, true)

      
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }
 b.reply.defer();
 
 
        
    })
 
    collector.on("end", (b) => {
        Sendmenu.edit(new Discord.MessageEmbed()
        .setColor("#5728D4")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription("Das menu ist abgelaufen bitte gebe erneut den  \`Help Command\ ein `")
        .setFooter("Powered by .why.so.sad <3"))
    })

    }
}