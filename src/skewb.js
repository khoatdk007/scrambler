const Discord = require("discord.js");
module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? undefined : scrambles : undefined;
	let scramble = cube.type("skewb").get(scrambles);
	let embed = new Discord.RichEmbed()
					.setTitle("Scrambles :");
	for (let i = 0; i < scramble.length; i++) {
		embed.addField(i, scramble[i]);
	}
	return message.channel.send(embed);
};
module.exports.config = { name: "skewb", aliases: ["ivy", "ivycube", "ivy-cube"] };
