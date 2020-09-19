var playlist = { harrycase: "In A Mood" }

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({artistName: songTitle})
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.oariana
}
