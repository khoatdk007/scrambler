const Discord = require("discord.js");
const relay = require("../relay.js");
module.exports.run = async (bot, message, args, cube) => {
	let clock = relay.clockx();
	let pyra = relay.pyrax();
	let skewb = relay.skewbx();
	let squan = relay.squanx();
	let mega = relay.megax();
	let embed = new Discord.RichEmbed()
					.setTitle("Scrambles :")
					.addField("Clock :", "```" + clock + "```")
					.addField("Pyraminx :", "```" + pyra + "```")	
					.addField("Skewb :", "```" + skewb + "```")	
					.addField("Square-1 :", "```" + squan + "```")
					.addField("Megaminx :", "```" + mega + "```");
	return message.channel.send(embed);
};
module.exports.config = { name: "side", aliases: ["sideevents", "side-events"] };
