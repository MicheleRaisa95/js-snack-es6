'use strict'

function generaNumeroCasuale(min,max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

const squadreDiCalcio = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 }
];

for (let squadra of squadreDiCalcio) {
    squadra.puntiFatti = generaNumeroCasuale(0, 100);
    squadra.falliSubiti = generaNumeroCasuale(0, 100);
}

const nomiFalliSubiti = squadreDiCalcio.map(squadra => {
    return{ nome: squadra.nome, falliSubiti: squadra.falliSubiti};
})

console.log("Squadre di calcio:");
console.log(squadreDiCalcio);
console.log("Nomi e falli subiti");
console.log(nomiFalliSubiti)