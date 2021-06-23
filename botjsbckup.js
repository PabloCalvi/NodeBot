/* const Discord = require('discord.js');
const config = require('./config.json');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
});


client.login(token);

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();


    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`El nombre del servidor es: ${message.guild.name}\nMiembros totales: ${message.guild.memberCount}`)
    } else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your user: ${message.author.username}\nYour id: ${message.author.id}`);
    } else if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`No ingresaste argumentos validos, ${message.author}!`);
        } else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }



        message.channel.send(`Nombre del comando: ${command}\nArgumentos: ${args}`);
        message.channel.send(`Primer argumento: ${args[0]}`);

    } else if (command === 'kick') {
        if (!message.mentions.users.size) {
            return message.reply('Nesecitas tagear a un usuario antes de kickearlo!');
        }
        const taggedUser = message.mentions.users.first();
        message.channel.send(`Intentaste kickear: ${taggedUser.username}`);
    } else if (command === 'avatar') {
        if (!message.mentions.users.size) {
            return message.channel.send(`Tu avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`;
        });
        message.channel.send(avatarList);
    } else if (command === 'prune') {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('Este no parece ser un numero valido.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('Ingresa un numero entre 1 y 99.');
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('Error al intentar borrar mensajes.');
        });

        


    }


    









});
*/