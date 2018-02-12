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
	console.log(msg);
	if (msg.text == 'Привет') {
		bot.sendMessage(msg.chat.id,`Привет Плюшка :)`);
	}
	if (msg.text == 'Как дела?') {
		bot.sendMessage(msg.chat.id,`Просто прекрастно, Одесса цветёт и пахнет :)`);
	}
	if (msg.text == 'Любишь Cеверного?') {
		bot.sendMessage(msg.chat.id,`Конеччноо, послушай замечательную песню Северного: https://www.youtube.com/watch?v=ceyIGvd-GR0`);
	}
		// bot.sendMessage(msg.chat.id,`Привет, тебя звать-то ${msg.from.first_name} ?:)`);
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






