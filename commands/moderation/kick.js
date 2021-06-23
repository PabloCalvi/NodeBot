module.exports = {
	name: 'Kick',
	description: 'Kick!',
	guildOnly: true,
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply('Nesecitas tagear a un usuario antes de kickearlo!');
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`Intentaste kickear: ${taggedUser.username}`);
	},

};