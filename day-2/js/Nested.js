
let artists = [
    {
      name: "Michael Jackson",
      songs: ["Thriller", "Beat It", "Billie Jean"]
    },
    {
      name: "Billie Eilish",
      songs: ["Bad Guy", "Ocean Eyes", "Bury a Friend"]
    },
    {
      name: "Kairat Nurtas",
      songs: ["Шыда жүрек", "Айтуға оңай", "Арман"]
    }
  ];
  

  artists[2].songs[1] = "Baika";
  

  console.log("Michael Jackson соңғы әні: ", artists[0].songs[artists[0].songs.length - 1]);
  
  let shortSongs = artists[1].songs.filter(song => song.length <= 6);
  console.log("Billie Eilish қысқа әндері: ", shortSongs);
  