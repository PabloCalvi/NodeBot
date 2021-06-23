module.exports = {
	name: 'user-info',
	description: 'User info!',
	execute(message, args) {
		message.channel.send(`Your user: ${message.author.username}\nYour id: ${message.author.id}`);
	},
    
};