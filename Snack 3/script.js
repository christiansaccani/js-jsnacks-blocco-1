const dispari = [];
let utente;
let position = 0;

for (let i=0; i<6; i++) {
    utente = prompt("Inserisci un valore: ");

    if (utente % 2 != 0) {
        
        dispari[position] = utente;     //fatto per non lasciare slot vuoti quando numeri pari
        position++;
    }
    
}

document.querySelector("div").innerText =
    ` Di quelli inseriti, i valori dispari sono: ${dispari} `;

console.log(dispari);