// CONSEGNA:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// creo un oggetto "classe" con le liste (gli array) dei "nomi", dei "cognomi" ed delle "età" degli studenti
let classe = {
    "nomi" : ["peppe", "mimmo", "lillo"],
    "cognomi" : ["pippo", "manlio", "de leo"],
    "eta" : [3, 4, 5]
}
// visualizzo le proprietà degli studenti della classe
console.log ("proprietà studenti:");
for (let key in classe) {
    console.log(key);
}

// creo un'array "studenti" in cui pusherò gli oggetti con il nome, il cognome e gli anni dello studente
let studenti = [];
for (let i = 0; i < classe.nomi.length; i++) {
    studenti.push({
        "nome" : classe.nomi[i],
        "cognome" : classe.cognomi[i],
        "anni" : classe.eta[i]
    });
    // per ogni oggetto pushato visualizzo il numero dello studente, nome, cognome ed anni
    console.log("STUDENTE " + (i + 1));
    for (let key in studenti[i]) {
        console.log(key + ": " + studenti[i][key]);
    }
}

// creo un bottone ed un'evento al click
let btn_nuovo_studente = document.getElementById("btn_nuovo_studente");
btn_nuovo_studente.addEventListener("click",
    function() {
        // ad ogni click chiedo all'utente di inserire nome, cognome ed età con dei prompt
        let nuovoNome = prompt("inserisci un nome");
        let nuovoCognome = prompt("inserisci un cognome");
        let nuovaEta = parseInt(prompt("inserisci un'età"));

        // creo un oggetto "nuovoStudente" con le informazioni fornite
        let nuovoStudente = {
            "nome" : nuovoNome,
            "cognome" : nuovoCognome,
            "eta" : nuovaEta
        }
        // lo pusho nell'array "studenti"
        studenti.push(nuovoStudente);

        // visualizzo il numero dello studente pushato, nome, cognome ed anni
        console.log("STUDENTE " + studenti.length + " (NUOVO)");
        for (let key in nuovoStudente) {
            console.log(key + ": " + nuovoStudente[key]);
        }
    }
);