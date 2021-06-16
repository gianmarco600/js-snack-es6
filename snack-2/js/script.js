// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console

const randNum = () => Math.floor(Math.random()*20);
function rand(){
    return Math.floor(Math.random()*20);
}

const squadre = [
    {
        nome : 'roma',
        punti : 0,
        falli : 0
    },
    {
        nome : 'lazio',
        punti : 0,
        falli : 0
    },
    {
        nome : 'inter',
        punti : 0,
        falli : 0
    },
    {
        nome : 'napoli',
        punti : 0,
        falli : 0
    },
    {
        nome : 'milan',
        punti : 0,
        falli : 0
    },
    {
        nome : 'juve',
        punti : 0,
        falli : 0
    },
];

var nArray = [];

for (let i = 0; i < squadre.length; i++){
    let {nome , punti , falli} = squadre[i];
    punti = randNum();
    falli = randNum();
    document.getElementById('output').innerHTML += nome + ',' + punti + ',' + falli + '<br>';
    let elem = {nome : nome , falli : falli};
    nArray.push(elem);
    document.getElementById('output1').innerHTML += `${nome} ha subito ${falli} falli <br>` ;
};

console.log(nArray);


// for (let i = 0; i < squadre.length; i++){
//     let {nome : Nsq , falli : Fsq } = squadre[i];
//     let elem = {nome : Nsq , falli : Fsq};
//     nArray.push(elem);
//     document.getElementById('output1').innerHTML += `${Nsq} ha subito ${Fsq} falli <br>` ;
// }


// console.log(nArray);