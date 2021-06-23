module.exports = {
	name: 'server',
	description: 'Server info',
	execute(message, args) {
		message.channel.send(`El nombre del servidor es: ${message.guild.name}\nMiembros totales: ${message.guild.memberCount}`)
	},
    
};