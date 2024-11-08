const formElem = document.getElementById('user-form');
const nomeCognomeInput = document.getElementById("nome-cognome")
const etaInput = document.getElementById("eta")
const kmInput = document.getElementById("km")


// OUTPUT
const nomePassegeroElem = document.getElementById('nome-passegero');
const offertaElem = document.getElementById('offerta');
const carrozzaElem = document.getElementById('carrozza');
const codiceCpElem = document.getElementById('codice-cp');
const costobigliettoElem = document.getElementById('costo-biglietto');



formElem.addEventListener("submit", function (event) {
    
    event.preventDefault();



    const nomeCognome = nomeCognomeInput.value.trim();
    const eta = etaInput.value.trim();
    const km = kmInput.value.trim();




    const distanzaN = parseInt(km);





    
    // Costanti
    const euroKm = 0.21;
    const minorenne = (eta === "minorenne");
    const over65 = (eta === "over-65");

    //Esecuzione logica

    let prezzo;

    const prezzobase = (distanzaN * euroKm);

    if (!minorenne && !over65) {
        prezzo = prezzobase;
    } else if (minorenne) {

        prezzo = (prezzobase * 0.8)
    } else {
        prezzo = (prezzobase * 0.6)
    }



    let biglietto

    if (minorenne) {
        biglietto = "Biglietto Minorenne"
    } else if (over65) {
        biglietto = "Biglietto Over 65"
    } else {
        biglietto = "Biglietto Standar"
    }



    function carrozza() {
        return Math.ceil(Math.random() * 100)
    }


 
    function codiceCP() {
        let codice = "";

       for (let index = 0; index < 6; index++) {
        codice = codice + Math.ceil(Math.random() * 9);
        
       }
       return codice;      
    }


    nomePassegeroElem.innerHTML = nomeCognome;
    offertaElem.innerHTML = biglietto;
    carrozzaElem.innerHTML = carrozza();
    codiceCpElem.innerHTML = codiceCP();
    costobigliettoElem.innerHTML = prezzo.toFixed(2) + "£";

console.log (prezzo)


document.getElementById("result-card").classList.remove("d-none");

});















