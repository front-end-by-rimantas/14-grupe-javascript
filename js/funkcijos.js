"use strict";

function tusciaFunkcija() {
    return console.log('asdsad');
}
tusciaFunkcija();


function tusciaFunkcija2() {
    return 'asdsad-2';
}
console.log( tusciaFunkcija2() );



const skaicius1 = 2;
const skaicius2 = -8;
const skaicius3 = 5;

function daugyba( num1, num2 ) {
    if ( typeof(num1) !== 'number' ) {
        return console.error('ERROR: netinkamo tipo reiksme (1)');
    }
    if ( num1 === Infinity || num1 === -Infinity ) {
        return console.error('ERROR: negalima operacija su begalybe (1)');
    }
    if ( ''+num1 === 'NaN' ) {
        return console.error('ERROR: negalima operacija su NaN (1)');
    }
    if ( typeof(num2) !== 'number' ) {
        return console.error('ERROR: netinkamo tipo reiksme (2)');
    }
    if ( num2 === Infinity || num2 === -Infinity ) {
        return console.error('ERROR: negalima operacija su begalybe (1)');
    }
    if ( ''+num2 === 'NaN' ) {
        return console.error('ERROR: negalima operacija su NaN (1)');
    }
    const answer = num2 * num1;
    return console.log(answer);
}

daugyba( 'dasfd', 8415 );
daugyba( 5951, undefined );
daugyba( 5951, null );
daugyba( 5951, true );
daugyba( 5951, false );
daugyba( 5951, [] );
daugyba( 5951, ['adsf'] );
daugyba( 5951, ['adsf', 'ere'] );
daugyba( 5951, [45] );
daugyba( 5951, [45, 85] );
daugyba( Infinity, 855 );
daugyba( Infinity, 0 );
daugyba( -Infinity, 855 );
daugyba( -Infinity, 0 );
daugyba( 0, Infinity );
daugyba( 5951, NaN );

daugyba( skaicius1, skaicius2 );
daugyba( skaicius3, skaicius2 );
daugyba( skaicius1, skaicius3 );
daugyba( 10, 10, 10, 10 );
daugyba( -8, -8 );
daugyba( -8, 0.0001 );
