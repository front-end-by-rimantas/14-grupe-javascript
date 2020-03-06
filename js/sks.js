"use strict";

function skaitmenuKiekisSkaiciuje( num, correct ) {
    let count = 0;
    // validuojame input
    if ( typeof(num) !== 'number' ) {
        return console.error('ERROR: skaicius netinkamo tipo')
    }
    if ( !isFinite(num) ) {
        return console.error('ERROR: skaicius netinkamos reiksmes')
    }

    // skaiciuojame
    const skaiciusTekstu = ''+num;
    count = skaiciusTekstu.length;

    // jei randame minusa, tai
    if ( num < 0 ) {
        count--;
    }

    // jei randame kableli (taskas), tai
    if ( num % 1 !== 0 ) {
        count--;
    }

    return console.log(count, '->', correct);
}

skaitmenuKiekisSkaiciuje( 'asd' );
skaitmenuKiekisSkaiciuje( [] );
skaitmenuKiekisSkaiciuje( ['asd'] );
skaitmenuKiekisSkaiciuje( ['asd', 'qwwe'] );
skaitmenuKiekisSkaiciuje( [51] );
skaitmenuKiekisSkaiciuje( [51, 488] );
skaitmenuKiekisSkaiciuje( null );
skaitmenuKiekisSkaiciuje( undefined );
skaitmenuKiekisSkaiciuje( true );
skaitmenuKiekisSkaiciuje( false );
skaitmenuKiekisSkaiciuje( Infinity );
skaitmenuKiekisSkaiciuje( -Infinity );
skaitmenuKiekisSkaiciuje( NaN );

skaitmenuKiekisSkaiciuje( 5, 1 );
skaitmenuKiekisSkaiciuje( 781, 3 );
skaitmenuKiekisSkaiciuje( 37060123456, 11 );
skaitmenuKiekisSkaiciuje( -1987, 4 );
skaitmenuKiekisSkaiciuje( 3.1415, 5 );
skaitmenuKiekisSkaiciuje( -3.1415, 5 );

skaitmenuKiekisSkaiciuje( 370601234566161656164949498498498496, 36 );


// 1           1e+0    1 * 10^0
// 10          1e+1    1 * 10^1
// 100         1e+2    1 * 10^2
// 1000        1e+3    1 * 10^3

// 3.1415      3.1415e+0
// 3141.5      3.1415e+3
// 0.0031415   3.1415e-3