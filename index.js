// var cool = require('cool-ascii-faces');
// var express = require('express');
// var app = express();
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '504046177:AAE1RcGBnSqhaODmg9Pj5aQlzeW6s3gDXf4';
const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', msg => {
		bot.sendMessage(msg.chat.id,`Привет, тебя звать-то ${msg.from.first_name} ?:)`);
})







