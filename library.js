function Library(name, creator) {
  this.libraryName = name;
  this.creator     = creator;
  this.playlists   = [];
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
};

function Playlist(name) {
  this.playlistName = name;
  this.tracks       = [];
  //total duration
  //overall rating (rating of each track averaged)
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
};

Playlist.prototype.totalDuration = function() {
  let total = 0;
  for (let i = 0; i < this.tracks.length; i++) {
    total += this.tracks[i].length;
  }
  return total;
};

Playlist.prototype.averageRating = function() {
  let average = 0;
  let total = 0;
  for (let i = 0; i < this.tracks.length; i++) {
    total += this.tracks[i].rating;
  }
  average = total / this.tracks.length;
  return average;
};

function Track(title, rating, trackLength) {
  this.title  = title;
  this.rating = rating;
  this.length = trackLength;
}

let testLibrary  = new Library("Best music library ever", "Ian");
let testPlaylist = new Playlist("Best playlist ever");
let testTrack1   = new Track("Best Song Ever", 5, 3.5);
let testTrack2   = new Track("What makes you beautiful", 5, 2.75);
let testTrack3   = new Track("We Are Never Ever Getting Back Together", 5, 3);
let testTrack4   = new Track("Shake It Off", 4, 3.25);

testPlaylist.addTrack(testTrack1);
testPlaylist.addTrack(testTrack2);
testPlaylist.addTrack(testTrack3);
testPlaylist.addTrack(testTrack4);
testLibrary.addPlaylist(testPlaylist);

console.log("======================================================");
console.log("Library name: ", testLibrary.libraryName);
console.log("Library creator: ", testLibrary.creator);
console.log("Library playlists: ", testLibrary.playlists);
console.log("======================================================");
console.log("Playlist name: ", testPlaylist.playlistName);
console.log("Playlist tracks: ", testPlaylist.tracks);
console.log("======================================================");
console.log("Total duration: ", testPlaylist.totalDuration());
console.log("Overall Rating: ", testPlaylist.averageRating());
console.log("======================================================");
console.log("Track1 title: ", testTrack1.title);
console.log("Track1 rating: ", testTrack1.rating);
console.log("Track1 length: ", testTrack1.length);
console.log("======================================================");



// var library = {
//   tracks: { t01: { id: "t01",
//                    name: "Code Monkey",
//                    artist: "Jonathan Coulton",
//                    album: "Thing a Week Three" },
//             t02: { id: "t02",
//                    name: "Model View Controller",
//                    artist: "James Dempsey",
//                    album: "WWDC 2003"},
//             t03: { id: "t03",
//                    name: "Four Thirty-Three",
//                    artist: "John Cage",
//                    album: "Woodstock 1952"}
//           },
//   playlists: { p01: { id: "p01",
//                       name: "Coding Music",
//                       tracks: ["t01", "t02"]
//                     },
//                p02: { id: "p02",
//                       name: "Other Playlist",
//                       tracks: ["t03"]
//                     }
//              },
//
//   printPlaylists: function () {
//     var output = "";
//     for (var things in this.playlists) {
//       output += this["playlists"][things]["id"] + ": " + this["playlists"][things]["name"] + " - " + this["playlists"][things]["tracks"].length + " tracks" + "\n" ;
//     }
//     return output;
//   },
//
//   printPlaylist: function (playlistId) {
//     var output = "";
//     var tempArray = [];
//
//     for (var track in this.tracks) {
//       tempArray.push(this["tracks"][track]["id"]);
//     }
//
//     output = playlistId + ": " + this["playlists"][playlistId]["name"] + " - " + this["playlists"][playlistId]["tracks"].length + " tracks" + "\n";
//
//     for (var i = 0; i < tempArray.length; i++){
//       for (var q = 0; q < tempArray.length; q++)
//       if (tempArray[i] == this["playlists"][playlistId]["tracks"][q]) {
//
//       output += this["tracks"][tempArray[i]]["id"] + ": " + this["tracks"][tempArray[i]]["name"] + " by " + this["tracks"][tempArray[i]]["artist"] + "(" + this["tracks"][tempArray[i]]["album"] + ")" + "\n" ;
//       }
//     }
//     return output;
//   },
//
//   printTracks: function () {
//     var output = "";
//     for (var things in this.tracks) {
//       output += this["tracks"][things]["id"] + ": " + this["tracks"][things]["name"] + " by " + this["tracks"][things]["artist"] + "(" + this["tracks"][things]["album"] + ")" + "\n" ;
//     }
//     return output;
//   },
//
//   addTrackToPlaylist: function (trackId, playlistId) {
//     this["playlists"][playlistId]["tracks"].push(trackId);
//   },
//
//   addPlaylist: function (name) {
//
//     var newId = uid();
//     var newPlaylist = { id: newId,
//                         name: name,
//                         tracks: []
//                       }
//
//     var tempArray = [];
//     for (var track in this.tracks) {
//       tempArray.push(this["tracks"][track]["id"]);
//     }
//     for (var i = 0; i < tempArray.length; i++) {
//
//       if (tempArray[i] == newId) {
//         while (tempArray[i] == newId) {
//           newId = uid();
//         }
//       }
//     }
//
//     this["playlists"][newId] = newPlaylist
//   },
//
//   addTrack: function (name, artist, album) {
//
//
//     var newId = uid();
//     var newTrack = { "id": newId,
//                      "name": name,
//                      "artist": artist,
//                      "album": album };
//
//     var tempArray = [];
//     for (var track in this.tracks) {
//       tempArray.push(this["tracks"][track]["id"]);
//     }
//
//     for (var i = 0; i < tempArray.length; i++) {
//
//       if (tempArray[i] == newId) {
//         while (tempArray[i] == newId) {
//           newId = uid();
//         }
//       }
//     }
//
//     this["tracks"][newId] = newTrack
//   },
//
//   uid: function() {
//     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//   }
//
// }
//
//
//
// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//
// var printSearchResults = function(query) {
//
// }
