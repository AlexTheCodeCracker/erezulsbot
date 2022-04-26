const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async (client) => {
  client.Ready = true;
  client.user.setActivity("TikTok", { type: "STREAMING", url:"https://www.twitch.tv/cisko2411" })
};
