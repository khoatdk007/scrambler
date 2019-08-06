const Discord = require("discord.js");
module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? undefined : scrambles : undefined;
	let scramble = cube.type("333").length(20).get(scrambles);
	let embed = new Discord.RichEmbed()
					.setTitle("Scrambles :");
	for (let i = 0; i < scramble.length; i++) {
		embed.addField(i + 1 + ".", "```" + scramble[i] + "```");
	}
	return message.channel.send(embed);
};
module.exports.config = { name: "3x3", aliases: ["3x3x3"] };
