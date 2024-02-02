const numbers = [];
let sum = 0;

for (i=0; i<10; i++) {

    numbers[i] = Number(prompt("inserisci un valore"));
    sum = sum + numbers[i];
    
}

document.querySelector("div").innerText =
    ` La somma dei valori ${numbers} è ${sum} `;

// console.log(numbers);
// console.log(sum);