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
    const answer = num2 * num1;   
    return answer;
}

console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );

