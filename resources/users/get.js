var users = this;
this.test = 'blabla';
// console.log('test', users.username);

const request = require('request');

$addCallback();

request.get({ url: "http://search.rlsbb.ru/lib/search5052604944.php?&pindex=1&content=true&phrase="+ "silicon+valley" }, (error, response, body) => { 
if (!error && response.statusCode == 200) { 
        //   res.send('coucou'); 
        // console.log(body);
        // let matched = JSON.parse(body).results[0].post_content.match('(http:\/\/rapidgator.net).*?(html)');
        // (http:\/\/rapidgator\.net\/).{2,600}(\.mkv\.html)
        // (http:\/\/rapidgator\.net\/).{2,300}(720p).{2,50}(\.html)
        // (https?:\/\/)?(rapidgator|uploadgig).{2,150}(720p).{2,50}(\\")
        // (https?:\/\/)?(rapidgator).{2,150}(720p).{2,50}(html)
        //ne pas oublier de set la regex option à "global"
        // console.log('matched', JSON.parse(body).results[1].post_content);
        // users.test = JSON.parse(body).results[1].post_content;
        users.linksNum = JSON.parse(body);
        // users.test = matched[0];
        users.username = 'blabla';
        //res.send('matched');
        console.log('inside', users);
        $finishCallback();
    } 
});
console.log('outside', users);
