const fs = require("fs");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cube) => {
	if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("You do not have permission to use this command.");
	if(!args[0] || args[0] == "help") {
		if(!args[0] || args[0] == "help") {
			let helpEmbed = new Discord.RichEmbed()
				.setTitle(`${process.env.prefix}prefix`)
				.setColor("RANDOM")
				.setDescription("Usage: s!prefix <desired prefix OR reset>")
				.addField("Example", `To set your prefix to \`?\`, do \`${process.env.prefix}prefix ?\``, true)
				.addBlankField(true)
				.addField("Resetting your prefix", `Simply type \`${process.env.prefix}prefix reset\``, true)
				.addField("Documentation", "https://scrambler.gitbook.io/docs/util/prefix")
				.setTimestamp()
				.setFooter(`Scrambler`, bot.user.displayAvatarURL);
			return message.channel.send(helpEmbed);
		}
	}
	if(args[0] == "reset") {
		await bot.guildData.updateOne({ guildID: message.guild.id }, { $set: { prefix: "" } }, { upsert: true });
		return message.channel.send(`Okay, I have reset your prefix to \`${process.env.prefix}\``);
	} else {
		await bot.guildData.updateOne({ guildID: message.guild.id }, { $set: { prefix: args[0] } }, { upsert: true });
		return message.channel.send(`Okay, I have set your prefix to \`${args[0]}\` To reset your prefix, do \`${args[0]}prefix reset\``);
	}
};
module.exports.config = { name: "prefix", aliases: ["setprefix"] };
