const Discord = require("discord.js");
const relay = require("../relay.js");
module.exports.run = async (bot, message, args, cube) => {
	let five = relay.fivex();
	let six = relay.sixx();
	let seven = relay.sevenx();
	let embed = new Discord.RichEmbed()
					.setTitle("Scrambles :")
					.addField("5x5 : ", "```" + five + "```")
					.addField("6x6 : ", "```" + six + "```")
					.addField("7x7 : ", "```" + seven + "```");
	return message.channel.send(embed);
};
module.exports.config = { name: "5-7", aliases: [] };
