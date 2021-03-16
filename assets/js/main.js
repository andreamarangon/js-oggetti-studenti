$(document).ready(function() {
  //creo oggetto con le proprietà: nome, cognome età
  var oggetto = {
    'nome': 'Andrea',
    'cognome': 'Marangon',
    'età': '36'
  }
  //stampo a schermo attraverso ciclo for-in tutte le proprietà dell'oggetto
  for (var key in oggetto) {
    console.log(key, oggetto[key]);
  }
  //creo un array di oggetti di studenti
  //ciclo su tutti gli studenti e stampo per ognuno di essi: nome, cognome
  //faccio inserire all'utente un nuovo oggetto studente inserendo: nome,cognome e età
});

//FUNCTIONS
