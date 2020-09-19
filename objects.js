var playlist = { artistName: "songTitle" }

function updatePlaylist (playlist, artistName, songTitle) {
  Object.assign({artistName: songTitle})
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.oariana
}
