const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	let msgArr = [];
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 3 ? 3 : scrambles < 0 ? 1 : scrambles : 1;
	for(let x = 0; x < scrambles; x++) {
		let wides = ["Rw", "Uw", "Fw", "Lw", "Dw", "Bw", "3Rw", "3Uw", "3Fw"];
		let nonWides = ["R", "U", "L", "D", "F", "B"];
		let scramble = [];
		let i = 0;
		while(scramble.length < 80) {
			let move = Math.random() > 0.3 ? nonWides[Math.floor(Math.random() * nonWides.length)] : wides[Math.floor(Math.random() * wides.length)];
			if(i > 0 && (scramble[i - 1] === move)) {
				continue;
			} else {
				scramble.push(move);
				i++;
			}
		}
		msgArr.push(scramble.map(index => Math.random() < 0.5 ? index += "2" : index += "\'").join(" "));
	}
	let embed = new Discord.RichEmbed()
					.setTitle("Scrambles :");
	for (let i = 0; i < msgArr.length; i++) {
		embed.addField(i+1, msgArr[i]);
	}
	return message.channel.send(embed);
};
module.exports.config = { name: "6x6", aliases: ["6x6x6"] };
