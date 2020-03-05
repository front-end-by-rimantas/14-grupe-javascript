const pazymiai = [10, 5, 2, 8, 7];
console.log(pazymiai);

// console.log( pazymiai[-1] );
// console.log( pazymiai[0] );
// console.log( pazymiai[1] );
// console.log( pazymiai[2] );
// console.log( pazymiai[3] );
// console.log( pazymiai[4] );
// console.log( pazymiai[5] );

for ( let p=-1; p<=5; p++ ) {
    console.log( p, '->', pazymiai[p] );
}

console.log('----------');

for ( let o=-6; o<=5; o=o+3 ) {
    console.log(o);
}

console.log('----------');

for ( let m=10; m>0; m-- ) {
    console.log(m);
}

console.log('---------- LAIKAS');

for ( let h=0; h<12; h++ ) {
    for ( let m=0; m<60; m=m+5 ) {
        console.log(h + ':' + m);
    }
}

console.log('---------- DIENOS');

const dienos = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log(dienos);
let counter = 0;
let menuo = 0;
let diena = 0;

for ( let m=0; m<12; m++ ) {
    for ( let d=0; d<dienos[m]; d++ ) {
        counter++;
        menuo = m+1;
        diena = d+1;
        console.log( '('+counter+') ' + menuo + ': ' + diena );
    }
}

console.log('--------------');

let nuo = 515;
let iki = 800;
let suma = 0;
for ( let i=nuo; i<=iki; i++ ) {
    suma = suma + i;
}
console.log(nuo, iki, suma);

console.log('--------------');

const tekstas = 'abcdef';
let atvirkstinis = '';

// for ( let i=tekstas.length-1; i>=0; i-- ) {
//     atvirkstinis = atvirkstinis + tekstas[i];
// }

// for ( let i=0; i<tekstas.length; i++ ) {
//     atvirkstinis = atvirkstinis + tekstas[tekstas.length - i - 1];
// }

for ( let i=0; i<tekstas.length; i++ ) {
    atvirkstinis = tekstas[i] + atvirkstinis;
}

console.log(tekstas + ' -> ' + atvirkstinis);




console.log('--------------');

const from = 0;
const till = 11;
const divider = 3;
let count = 0;

for ( let i=from; i<=till; i++ ) {
    console.log(i+' -> '+(i % divider));
    // jeigu be liekanos
    if ( i % divider === 0 ) {
        // didiname counteri
        count++;
    }
}

console.log('Skaičių intervale tarp '+from+' ir '+till+', besidalinančių be liekanos iš '+divider+' yra '+count+' vienetai.');
