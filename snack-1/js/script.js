// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const parcoBici = [
    {
        nome : 'bianco',
        peso : 10
    },
    {
        nome : 'blu',
        peso : 7
    },
    {
        nome : 'rosso',
        peso : 9
    },
    {
        nome : 'verde',
        peso : 4
    },
    {
        nome : 'arancio',
        peso : 16
    },
]

var {peso:pesoMin,nome:nomeMin} = parcoBici[0];

for (let i = 1; i < parcoBici.length; i++){
    let {nome, peso} = parcoBici[i];
    if(peso < pesoMin){
        pesoMin = peso;
        nomeMin = nome;
    }
}
console.log(`la ${nomeMin} pesa ${pesoMin} ed e' la piu' leggera`);