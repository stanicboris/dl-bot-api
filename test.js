const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';
// process.chdir(__dirname)
// console.log('process.chdir(__dirname)', process.chdir(__dirname));
// console.log('ENV', ENV);

const express = require('express')
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io').listen(server, {'log level': 0});
const request = require('request');
// const Nick = require("nickjs")
// const nick = new Nick()

// setup deployd
require('deployd').attach(server, {
    socketIo: io,  // if not provided, attach will create one for you.
    env: ENV,
    db: {host:'localhost', port:27017, name:'test-gear-check-app'}
});

// After attach, express can use server.handleRequest as middleware
app.use(server.handleRequest);

app.get('/', (req, res) => {
	// res.send(hackerNewsLinks)
	request.get({ url: "http://search.rlsbb.ru/lib/search5052604944.php?&pindex=1&content=true&rand=0.07012812487805431" }, function(error, response, body) { 
		  if (!error && response.statusCode == 200) { 
			//   res.send('coucou'); 
			// console.log(body);
			let matched = JSON.parse(body).results[5].post_content.match('(http:\/\/rapidgator.net).*?(html)');
			console.log('matched', JSON.parse(body).results[1].post_content);
			res.send('matched');
			} 
		 }); 
})

// ;(async () => {
// 	const tab = await nick.newTab()
// 	await tab.open("rlsbb.ru")
// 	await tab.untilVisible("#contentArea") // Make sure we have loaded the page
// 	await tab.inject("https://code.jquery.com/jquery-3.3.1.slim.min.js") // We're going to use jQuery to scrape
// 	const hackerNewsLinks = await tab.evaluate((arg, callback) => {
// 		// Here we're in the page context. It's like being in your browser's inspector tool
// 		const data = []
// 		$(".postHeader").each((index, element) => {
// 			data.push({
// 				title: $(element).find("h2 a").text().slice(1),
// 				url: $(element).find(".entry-content p:last-child a:last-child").attr("href")
// 			})
// 		})
// 		callback(null, data)
// 	})
//     console.log(hackerNewsLinks)
// })()
// .then(() => {
// 	console.log("Job done!")
// 	// nick.exit()
// })
// .catch((err) => {
// 	console.log(`Something went wrong: ${err}`)
// 	nick.exit(1)
// })

app.listen(PORT, () => console.log('Example app listening on port ' + PORT + '!'))

// start server
// server.listen(PORT, () => console.log('Example app listening on port ' + PORT + '!'));