const n = Number(prompt("Partendo da 1, di quanti valori vuoi sapere il cubo?"));
const cubi = [];

if (typeof n == 'number' && !Number.isNaN(n) && n > 0) {

    for (let i=0; i<n; i++) {

        cubi[i] = (i + 1) * (i + 1) * (i + 1);
    } 

    document.querySelector("div").innerText =
        `I cubi dei primi ${n} numeri sono ${cubi}`

} else {

    document.querySelector("div").innerText =
    ` Numero non accettato, ricaricare la pagina e riprovare`;
}