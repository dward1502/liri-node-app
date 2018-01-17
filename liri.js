require("dotenv").config();

let keys = require("./keys.js");

let Twitter = require('twitter');
let Spotify = require('node-spotify-api');

let spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);

// console.log( spotify);
// console.log( client);

let arg = process.argv[2];

switch(arg){
    case "my-tweets":
        var params = { screen_name: 'anonymousDbow' };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                console.log(tweets);
            }
        });
        console.log("test twitter");
    break;
    case "spotify-this-song":
        let song = process.argv[3];

        spotify.search({ type: 'track', query: song }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            else{
                let songInfo = data.tracks.items[0];
                let songResult = console.log(songInfo.artists[0].name);
                                 console.log(songInfo.name);
                                 console.log(songInfo.album.name);
                                 console.log(songInfo.preview_url);
                console.log(songResult);

            }

            //console.log(data);
        });
        
    break;
    case "movie-this":
        console.log("test omdb movie");
    case "do-what-it-says":
        console.log("")
}