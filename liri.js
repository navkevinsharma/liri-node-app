
require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'I want it that way' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(JSON.stringify(data.tracks.items[0].album.artists[0].name));
    console.log(JSON.stringify(data.tracks.items[0].name));
    console.log(JSON.stringify(data.tracks.items[0].album.name));
    console.log('Link = ' + JSON.stringify(data.tracks.items[0].external_urls.spotify));
});

var axios = require("axios");

var concert = process.argv[2];
var movieName = process.argv.slice(3).join(' ');

var movieCall = 'https://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy';
var concertCall = "https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp";

console.log(movieCall);
console.log(concertCall);

axios.get(movieCall).then(
    function(response){
        console.log(response.data.year);
    }
);

switch(movieCall){
    case "movie":
    movieCall();
    break;

    case "concert":
        concertCall();
        break;
}

function 

