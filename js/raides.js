"use strict";

function isrinktiRaides( text, step ) {
    // validuojame teksta
    if ( typeof(text) !== 'string' ) {
        return 'ERROR: pirma reiksme turi buti tekstine.'
    }

    // validuojame zingsni
    if ( typeof(step) !== 'number' ) {
        return 'ERROR: antra reiksme turi buti skaitine.'
    }
    if ( !isFinite(step) ) {
        return 'ERROR: antra reiksme turi buti sveikasis skaicius.'
    }
    if ( step % 1 !== 0 ) {
        return 'ERROR: antra reiksme turi buti skaicius be desimtaines dalies.'
    }
    if ( step === 0 ) {
        return 'ERROR: antra reiksme negali buti nulis.'
    }
    if ( text.length < step ) {
        return 'ERROR: antra reiksme negali buti didesne nei tekslo ilgis.'
    }


    console.log('-----------');
    console.log(text, step);
    
    // all good -> logika
    let answer = '';

    if ( step > 0 ) {
        for ( let i=step-1; i<text.length; i+=step ) {
            const raide = text[i];
            answer += raide;
        }
    }
    if ( step < 0 ) {
        for ( let i=text.length+step; i>=0; i+=step ) {
            const raide = text[i];
            answer += raide;
        }
    }
    
    return answer;
}

console.log( isrinktiRaides( 1561, 2 ), '->', 'ERROR' );
console.log( isrinktiRaides( '1561', '2' ), '->', 'ERROR' );
console.log( isrinktiRaides( 'abc', Infinity ), '->', 'ERROR' );
console.log( isrinktiRaides( 'abc', NaN ), '->', 'ERROR' );
console.log( isrinktiRaides( 'abc', 0 ), '->', 'ERROR' );
console.log( isrinktiRaides( 'abc', 4 ), '->', 'ERROR' );
console.log( isrinktiRaides( 'abcdefghijkl', 3.17 ), '->', 'cfil' );

console.log( isrinktiRaides( 'abcdefg', 2 ), '->', 'bdf' );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ), '->', 'cfil' );

console.log( isrinktiRaides( 'abcdefg', -2 ), '->', 'fdb' );
console.log( isrinktiRaides( 'abcdefghijkl', -3 ), '->', 'jgda' );