var playlist = { harrycase: "In A Mood", freemusic: "Pube's Lament", oariana: "A Pear In The Wind"}

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist, artistName, songTitle)
}

function removeFromPlaylist () {
  delete playlist.oariana
}
