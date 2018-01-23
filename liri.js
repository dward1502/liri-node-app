require("dotenv").config();

let keys = require("./keys.js");

let Twitter = require('twitter');
let Spotify = require('node-spotify-api');

let spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);

// console.log( spotify);
// console.log( client);
//bonus read and write to sperate file use write sync
let arg = process.argv[2];

switch (arg) {
    case "my-tweets":
        var params = {
            screen_name: 'anonymousDbow'
        };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                for (var i = 19; i >= 0; i--) {
                    console.log(tweets[i].created_at);
                    console.log(tweets[i].text);
                }
            }

        });
        break;
    case "spotify-this-song":
        let song = process.argv[3];

        spotify.search({
            type: 'track',
            query: song
        }, function (err, data) {
            if (err) {
                spotify.search({
                    type: 'track',
                    query: 'The Sign'
                }, function (err, data) {
                    let rock = data.tracks.items[0];
                    let rockSong = console.log(rock.artists[0].name);
                    console.log(rock.name);
                    console.log(rock.album.name);
                    console.log(rock.preview_url);
                })
                return console.log('Error occurred: ' + err);
            } else {
                let songInfo = data.tracks.items[0];
                let songResult = console.log(songInfo.artists[0].name);
                console.log(songInfo.name);
                console.log(songInfo.album.name);
                console.log(songInfo.preview_url);
            }
        });

        break;
    case "movie-this":
        let request = require('request');
        let movie = process.argv[3];
        request('http://www.omdbapi.com/?apikey=trilogy&t= ' + movie + '', function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log("The title is : " + JSON.parse(body).Title);
                console.log(JSON.parse(body).Year);
                console.log(JSON.parse(body).imdbRating);
                console.log(JSON.parse(body).Plot);
                console.log(JSON.parse(body).Plot);
                console.log(JSON.parse(body).Plot);

                console.log(body);
            }


        });

        console.log("test omdb movie");
    case "do-what-it-says":
        console.log("")
}