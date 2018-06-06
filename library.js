var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var output = "";
  for (var things in library.playlists) {
    output += library["playlists"][things]["id"] + ": " + library["playlists"][things]["name"] + " - " + library["playlists"][things]["tracks"].length + " tracks" + "\n" ;
  }
  return output;
}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var output = "";
  for (var things in library.tracks) {
    output += library["tracks"][things]["id"] + ": " + library["tracks"][things]["name"] + " by " + library["tracks"][things]["artist"] + "(" + library["tracks"][things]["album"] + ")" + "\n" ;
  }
  return output;
}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var output = "";
  var tempArray = [];

  for (var track in library.tracks) {
    tempArray.push(library["tracks"][track]["id"]);
  }

  output = playlistId + ": " + library["playlists"][playlistId]["name"] + " - " + library["playlists"][playlistId]["tracks"].length + " tracks" + "\n";
  
  for (var i = 0; i < tempArray.length; i++){
    for (var q = 0; q < tempArray.length; q++)
    if (tempArray[i] == library["playlists"][playlistId]["tracks"][q]) {

    output += library["tracks"][tempArray[i]]["id"] + ": " + library["tracks"][tempArray[i]]["name"] + " by " + library["tracks"][tempArray[i]]["artist"] + "(" + library["tracks"][tempArray[i]]["album"] + ")" + "\n" ;
    }
  }
  return output;
}

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library["playlists"][playlistId]["tracks"].push(trackId);
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {


  var newId = uid();
  var newTrack = { "id": newId,
                   "name": name,
                   "artist": artist,
                   "album": album };

  var tempArray = [];
  for (var track in library.tracks) {
    tempArray.push(library["tracks"][track]["id"]);
  }

  for (var i = 0; i < tempArray.length; i++) {

    if (tempArray[i] == newId) {
      while (tempArray[i] == newId) {
        newId = uid();
      }
    }
  }

  library["tracks"][newId] = newTrack
}

// adds a playlist to the library

var addPlaylist = function (name) {

  var newId = uid();
  var newPlaylist = { id: newId,
                      name: name,
                      tracks: []
                    }

  var tempArray = [];
  for (var track in library.tracks) {
    tempArray.push(library["tracks"][track]["id"]);
  }
  for (var i = 0; i < tempArray.length; i++) {

    if (tempArray[i] == newId) {
      while (tempArray[i] == newId) {
        newId = uid();
      }
    }
  }

  library["playlists"][newId] = newPlaylist
}

addPlaylist("THEBEST");
console.log(printPlaylists());


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}