const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;

bot.on('ready', function () {
    console.log("Je suis pret a etre utiliser.");
    bot.user.setActivity('DO IT FOR BIG TETON!').catch(console.error);
});

bot.on("message", msg => {
    if (msg.content === "!help") {
        const commande = "\n!jambes : ******* \n!fessier : ******* \n!bras : ******* \n!abdos : ******* \n!dos : ******* \n!pect : *******"
        msg.reply(commande);
    }
    if (msg.content === "!jambes") {
        msg.reply("jambe");
    }
    if (msg.content === "!fessier") {
        msg.reply("fessier");
    }
    if (msg.content === "!bras") {
        msg.reply("bras");
    }
    if (msg.content === "!abdos") {
        msg.reply("abdos");
    }
    if (msg.content === "!dos") {
        msg.reply("dos");
    }
    if (msg.content === "!pect") {
        msg.reply("pect");
    }

});


bot.login(token);
