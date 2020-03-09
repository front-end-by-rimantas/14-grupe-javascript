"use strict";

function didziausiasSkaiciusSarase( list, correct ) {
    // validavimas
    if ( !Array.isArray(list) ) {
        return console.error('ERROR: netinkamo tipo reiksme');
    }
    if ( list.length === 0 ) {
        return console.error('ERROR: tuscias masyvas');
    }
    
    // logika
    let biggest = -Infinity;
    // console.log(list);

    // einame per kiekviena saraso elementa
    for ( let i=0; i<list.length; i++ ) {
        const elementas = list[i];
        // isitikinu, jog dirbu su skaiciumi
        if ( typeof(elementas) !== 'number' ||
             !isFinite(elementas) ) {
            // jei ne, einu prie kito saraso elemento
            continue;
        }

        // tikriname, ar einamsis elementas yra didesnis uz siuo metu zinoma didziausia
        if ( elementas > biggest ) {
            // priskiriame nauja didziausia reiksme
            biggest = elementas;
        }
    }

    if ( biggest === -Infinity ) {
        return console.error('ERROR: masyve turi buti bent vienas normalus skaicius');
    }

    return console.log(biggest, '->', correct);
}

didziausiasSkaiciusSarase( 515 );
didziausiasSkaiciusSarase( true );
didziausiasSkaiciusSarase( false );
didziausiasSkaiciusSarase( null );
didziausiasSkaiciusSarase( undefined );
didziausiasSkaiciusSarase( 'pomidoras' );
didziausiasSkaiciusSarase( [] );
didziausiasSkaiciusSarase( [ Infinity, null, 'asdas', [51, 'asd'], 'ERROR' ] );

didziausiasSkaiciusSarase( [ 1 ], 1 );
didziausiasSkaiciusSarase( [ 1, 2, 3 ], 3 );
didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ], 78 );
didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ], 69 );
didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ], -1 );
didziausiasSkaiciusSarase( [ 1, 'asd', 2, 3 ], 3 );
didziausiasSkaiciusSarase( [ 1, 2, 3, 'asd' ], 3 );
didziausiasSkaiciusSarase( [ 'asd', 1, 2, 3 ], 3 );
didziausiasSkaiciusSarase( [ -1, 'asd', -2, -3 ], -1 );
didziausiasSkaiciusSarase( [ -1, -2, -3, 'asd' ], -1 );
didziausiasSkaiciusSarase( [ 'asd', -1, -2, -3 ], -1 );
didziausiasSkaiciusSarase( [ -1, -2, -3, true ], -1 );
didziausiasSkaiciusSarase( [ true, -1, -2, -3 ], -1 );
didziausiasSkaiciusSarase( [ -1, -2, -3, false ], -1 );
didziausiasSkaiciusSarase( [ false, -1, -2, -3 ], -1 );
didziausiasSkaiciusSarase( [ -1, -2, -3, NaN ], -1 );
didziausiasSkaiciusSarase( [ NaN, -1, -2, -3 ], -1 );
didziausiasSkaiciusSarase( [ -1, -2, -3, undefined ], -1 );
didziausiasSkaiciusSarase( [ undefined, -1, -2, -3 ], -1 );


const numbers = [15, 84, 8415, 74];

const big = Math.max(15, 84, 8415, 74);
console.log(big);

const big2 = Math.max(...numbers);
console.log(big2);