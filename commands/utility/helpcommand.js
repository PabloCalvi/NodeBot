const {prefix } = require('../../config.json');
module.exports = {
    name: 'help',
    description: 'Lista de todos los comandos.',
    aliases: ['comandos'],
    usage: '[nombre del comando]',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const {commands} = message.client;

        if (!args.length) {

            const name = args[0].toLowerCase();
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

            if (!command) {
                return message.reply('Ese no es un comando valido!');
            }

            data.push(`**Nombre:** ${command.name}`);

            if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
            if (command.description) data.push(`**Descripcion:** ${command.description}`);
            if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

            data.push(`**Cooldown:** ${command.cooldown || 3} segundo(s)`);

            message.channel.send(data, {split:true});


            data.push('Lista de todos los comandos:')
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nPodes enviar \`${prefix}help [nombre del comando]\` para recibir informacion del comando!.`);

            return message.author.send(data, {split: true})
            .then(() => {
                if (message.channel.type === 'dm') return;
                message.reply('Te envie un mensaje con todos mis comandos')
            })
            .catch(error => {
                console.error(`No pude enviar un mensaje a ${message.author.tag}.n`, error);
                message.reply('Parece que no te puedo enviar un mensaje, Tenes los mensajes habilitados?')
            })
        }
    }
}