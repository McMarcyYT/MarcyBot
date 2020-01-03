const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjYyNzY4NDI2NzMzMDEwOTQ0.Xg-0Lg.E_7pC8P3HJP709f4e8njzNZToas';

const PREFIX = '';

bot.on('ready', () =>{
    console.log('Elindultam');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case '!ping':
            message.channel.sendMessage('pong!')
            break;
        case '!torol':
            if(!args[2]){
                if(!args[1]) return message.reply('Hiba. Kérlek adj meg egy számot')
                message.channel.bulkDelete(args[1]);
                message.channel.send('Sikeresen törölve lett ' + args[1] + ' üzenet')
            }
            if(args[2] === '0'){
                if(!args[1]) return message.reply('Hiba. Kérlek adj meg egy számot')
                message.channel.bulkDelete(args[1]);
            break;
            }
    }
})

bot.login(process.env.BOT_TOKEN);
