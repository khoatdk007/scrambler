const Discord = require("discord.js");
const relay = require("../relay.js");
module.exports.run = async (bot, message, args, cube) => {
	let two = relay.twox();
	let three = relay.threex();
	let four = relay.fourx();
	let embed = new Discord.RichEmbed()
					.setTitle("Scrambles :")
					.addField("2x2 : ", two)
					.addField("3x3 : ", three)
					.addField("4x4 : ", four);
	return message.channel.send(embed);
};
module.exports.config = { name: "2-4", aliases: [] };
