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
             },

  printPlaylists: function () {
    var output = "";
    for (var things in this.playlists) {
      output += this["playlists"][things]["id"] + ": " + this["playlists"][things]["name"] + " - " + this["playlists"][things]["tracks"].length + " tracks" + "\n" ;
    }
    return output;
  },

  printPlaylist: function (playlistId) {
    var output = "";
    var tempArray = [];

    for (var track in this.tracks) {
      tempArray.push(this["tracks"][track]["id"]);
    }

    output = playlistId + ": " + this["playlists"][playlistId]["name"] + " - " + this["playlists"][playlistId]["tracks"].length + " tracks" + "\n";
    
    for (var i = 0; i < tempArray.length; i++){
      for (var q = 0; q < tempArray.length; q++)
      if (tempArray[i] == this["playlists"][playlistId]["tracks"][q]) {

      output += this["tracks"][tempArray[i]]["id"] + ": " + this["tracks"][tempArray[i]]["name"] + " by " + this["tracks"][tempArray[i]]["artist"] + "(" + this["tracks"][tempArray[i]]["album"] + ")" + "\n" ;
      }
    }
    return output;
  },

  printTracks: function () {
    var output = "";
    for (var things in this.tracks) {
      output += this["tracks"][things]["id"] + ": " + this["tracks"][things]["name"] + " by " + this["tracks"][things]["artist"] + "(" + this["tracks"][things]["album"] + ")" + "\n" ;
    }
    return output;
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    this["playlists"][playlistId]["tracks"].push(trackId);
  },

  addPlaylist: function (name) {

    var newId = uid();
    var newPlaylist = { id: newId,
                        name: name,
                        tracks: []
                      }

    var tempArray = [];
    for (var track in this.tracks) {
      tempArray.push(this["tracks"][track]["id"]);
    }
    for (var i = 0; i < tempArray.length; i++) {

      if (tempArray[i] == newId) {
        while (tempArray[i] == newId) {
          newId = uid();
        }
      }
    }

    this["playlists"][newId] = newPlaylist
  },

  addTrack: function (name, artist, album) {


    var newId = uid();
    var newTrack = { "id": newId,
                     "name": name,
                     "artist": artist,
                     "album": album };

    var tempArray = [];
    for (var track in this.tracks) {
      tempArray.push(this["tracks"][track]["id"]);
    }

    for (var i = 0; i < tempArray.length; i++) {

      if (tempArray[i] == newId) {
        while (tempArray[i] == newId) {
          newId = uid();
        }
      }
    }

    this["tracks"][newId] = newTrack
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

}



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}