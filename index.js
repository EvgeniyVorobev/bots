var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '504046177:AAE1RcGBnSqhaODmg9Pj5aQlzeW6s3gDXf4';
const bot = new TelegramBot(TOKEN, {polling: true});
var port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 5000");
});
bot.on('message', msg => {
		bot.sendMessage(msg.chat.id,`Привет, тебя звать-то ${msg.from.first_name} ?:)`);
})



// app.use(express.static(__dirname + '/public'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   response.render('pages/index')
// });

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });






