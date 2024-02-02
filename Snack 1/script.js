const firstWord = prompt("Inserisci una parola: ");
const secondWord = prompt("Inserisci un'altra parola: ");

console.log(firstWord);
console.log(secondWord);

if (firstWord.length <= secondWord.length) {
    
    document.querySelector("#shortword").innerText = ` La parola più corta è: ${firstWord} `;
    document.querySelector("#longword").innerText = ` La parola più lunga è: ${secondWord} `;
} else {

    document.querySelector("#shortword").innerText = ` La parola più corta è: ${secondWord} `;
    document.querySelector("#longword").innerText = ` La parola più lunga è: ${firstWord} `;
}