const t1 = 'Vardenis';
const t2 = 'Pavardenis';

const t12 = t1 + " " + t2;
console.log(t1);
console.log(t2);
console.log(t12);

console.log('As esu: ' + t12 + '.');

console.log('---------------');

const pazymiai = [10, 5, 2, 8, 7];
console.log(pazymiai);
console.log('Finalinis rezultatas:', 10-5+2-8);

console.log('Pirmas narys:', pazymiai[0]);
console.log('Antras narys:', pazymiai[1]);
console.log('Trecias narys:', pazymiai[2]);
console.log('Ketvirtas narys:', pazymiai[3]);

const altern = pazymiai[0] - pazymiai[1] + pazymiai[2] - pazymiai[3];
console.log('Finalinis rezultatas:', altern);

const suma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4];
const vidurkis = suma / pazymiai.length;

console.log('Pazymiu vidurkis: ' + vidurkis);

// const sakinys = 'Zodzio "Vardenis" ilgis yra 8 simboliai.';

// const sakinys = 'Zodzio "' + t1 + '" ilgis yra 8 simboliai.';

const zodis = 'ne zvirblis';
const sakinys = 'Zodzio "' + zodis + '" ilgis yra ' + zodis.length + ' simboliai.';

console.log(sakinys);


const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);
console.log('f, e, d, c, b, a');

const abcTekstas = abc[5] + ', ' + abc[4] + ', ' + abc[3] + ', ' + abc[2] + ', ' + abc[1] + ', ' + abc[0];
console.log(abcTekstas);

console.log( 2 + 5 );
console.log( '2' + '5' );
console.log( [2, 3] + [5] );
console.log( ['2', '3'] + ['5'] );

console.log('-----------');

// Rekomenduojama naudoti: >, <, >=, <=, ===, !==
// (Ne)rekomenduojama naudoti: ==, !=
const riba = 18;
const metai = 111;

if ( riba < metai ) {
    // logika, jei TRUE
    console.log('Sveikinu, gali pirkti!');
    console.log('Gal noretum xxxxxx? Kaina tik yy.cc Eur.');
} else {
    // logika, jei FALSE
    console.log('Bandykite dar karta');
}

if ( metai > 99 ) {
    console.log('Akcija: tau nemokamai!');
}

console.log('-----------');


const akys = 'raudonos';

if ( akys === 'zalios' ) {
    console.log('Geros dusios zmogus!');
} else if ( akys === 'rudos' ) {
    console.log('Melagis...');
} else if ( akys === 'melyna' ) {
    console.log('Maladiec!');
} else {
    console.log('a tu turi akis?');
}

// if ( akys === 'zalios' ) {
//     console.log('Geros dusios zmogus!');
// } else {
//     if ( akys === 'rudos' ) {
//         console.log('Melagis...');
//     } else {
//         if ( akys === 'melyna' ) {
//             console.log('Maladiec!');
//         } else {
//             console.log('a tu turi akis?');
//         }
//     }
// }


// if ( akys === 'zalios' ) {
//     console.log('Geros dusios zmogus!');
// }

// if ( akys === 'rudos' ) {
//     console.log('Melagis...');
// }

// if ( akys === 'melyna' ) {
//     console.log('Maladiec!');
// } else {
//     console.log('a tu turi akis?');
// }