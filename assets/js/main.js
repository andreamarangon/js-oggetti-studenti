$(document).ready(function() {

  //creo oggetto con le proprietà: nome, cognome età
  var oggetto = {
    nome: 'Andrea',
    cognome: 'Marangon',
    età: '36'
  }
  //stampo a schermo attraverso ciclo for-in tutte le proprietà dell'oggetto
  for (var key in oggetto) {
    console.log(key, oggetto[key]);
    document.getElementById('oggetto').innerHTML += "<li>" + key + " " + oggetto[key] + "</li>";
  }

  //creo un array di oggetti di studenti
  var studenti = [
    {
      nome: 'Andrea',
      cognome: 'Marangon',
    },
    {
      nome: 'Pinco',
      cognome: 'Pallino',
    },
    {
      nome: 'Tizio',
      cognome: 'Caio',
    }
  ]
  //ciclo su tutti gli studenti e stampo per ognuno di essi: nome, cognome
  for (var i = 0; i < studenti.length; i++) {
    document.getElementById('studenti').innerHTML += "<li>" + studenti[i].nome + " " + studenti[i].cognome + "</li>";
    console.log(studenti[i].nome + ' ' + studenti[i].cognome);
  }

  //faccio inserire all'utente un nuovo oggetto studente inserendo: nome,cognome e età
  var classe = [];

  $('#add').click(function() {
    var nome = $('#nome').val();
    var cognome = $('#cognome').val();
    var eta = $('#eta').val();
    var studente = {
      nome: nome,
      cognome: cognome,
      eta: eta,
    }

    classe.push(studente);
    for (var key in studente) {
      console.log(key, studente[key]);
      document.getElementById('classe').innerHTML += "<li>" + key + " " + studente[key] + "</li>";
    }

  });
});

//FUNCTIONS
