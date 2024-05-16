'use strict'

const biciDaCorsa =[
    { nome: "Bianchi Oltre XR4", peso: 7.5 },
    { nome: "Cannondale SuperSix EVO", peso: 7.0 },
    { nome: "Specialized Tarmac SL7", peso: 6.0 },
    { nome: "Pinarello Dogma F12", peso: 6.5 }
];

let biciPiuLeggera = biciDaCorsa[0];
for (let i = 1; i < biciDaCorsa.length; i++) {
    if (biciDaCorsa[i].peso < biciPiuLeggera.peso) {
        biciPiuLeggera = biciDaCorsa[i];
    }
}

console.log(`La bici più leggera è ${biciPiuLeggera.nome} con un peso di ${biciPiuLeggera.peso}kg.`);