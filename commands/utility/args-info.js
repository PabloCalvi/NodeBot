module.exports = {
	name: 'args-info',
	description: 'args-info',
	args: true,
	usage: '<user> <role>',
	execute(message, args) {
		if (args[0] === 'info') {
			return message.channel.send('infooooooooooooooooo!!');
		}
		message.channel.send(`Nombre del comando: ${command}\nArgumentos: ${args}`);
		message.channel.send(`Primer argumento: ${args[0]}`);
	},

};