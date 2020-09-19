var playlist = { Harry Case: "In A Mood", Free Music: "Pube's Lament", Oariana: "A Pear In The Wind"}

function updatePlaylist (targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

function removeFromPlaylist {
  delete playlist.Oariana
}
