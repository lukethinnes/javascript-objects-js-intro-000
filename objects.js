var playlist = { harrycase: "In A Mood", freemusic: "Pube's Lament", oariana: "A Pear In The Wind"}

function updatePlaylist (targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

function removeFromPlaylist {
  delete playlist.Oariana
}
