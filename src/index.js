const { Client, Collection } = require("discord.js");
const Discord = require('discord.js');
const emoji = require('./../emoji.json')



const client = new Client();
require('discord-buttons')(client);
const chalk = require("chalk");
const fs = require("fs");

client.commands = new Collection();

fs.readdir(__dirname + "/bot/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let event = require(__dirname + "/bot/events/" + file);
        let eventName = file.split(".")[0];
        console.log(
            chalk.blue.bold("Lade Event ") + chalk.magenta.bold(`"${eventName}"`)
        );
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir(__dirname + "/bot/commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(__dirname + "/bot/commands/" + file);
        let commandName = file.split(".")[0];
        console.log(
            chalk.blue.bold("Lade Event ") + chalk.red.bold(`"${commandName}"`)
        );
        client.commands.set(commandName, props);
    });
});






client.login(require("./config/bot").token).catch(err => console.log(chalk.red.bold(err)))
require("http").createServer((_, res) => res.end("Copyright 2021 - 2022\n\nLinks:\n https://dsc.gg/nolove4you\n\n enyoi your bot")).listen(8080)