const numeri = [];
let somma = 0;
let media = 0;

for (let i=1; i<=10; i++) {
    numeri[i] = i;

    somma = somma + i;
    media = somma / i;
}

document.querySelector("div").innerHTML =
    ` Dei primi 10 numeri: ${numeri}.<br>La somma è ${somma};<br>la media è ${media}`;