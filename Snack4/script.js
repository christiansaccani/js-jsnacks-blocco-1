const number = +prompt("Inserisci un numero di 4 cifre: ");
const digits = [];
let numberS;


if (typeof number == 'number' && !Number.isNaN(number) && number > 999 && number < 10000)  {
    numberS = number.toString();

    var sum = 0;
    
    for (let i=0; i<4; i++) {

        digits.push(numberS.charAt(i));    //questo comando prende i singoli caratteri di una STRINGA

        sum = sum + Number(digits[i]);

        document.querySelector("div").innerText =
        `La somma dei valori ${digits} del numero ${number} è ${sum}`
        
    }
    }   else {

        document.querySelector("div").innerText =
        ` Numero non accettato, ricaricare la pagina e riprovare`;
    
    }
