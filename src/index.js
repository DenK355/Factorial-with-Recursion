'use strict';

/**
 * 
 * @param {number} num - целое неотрицательное число
 * @returns Факториал числа (num)
 */

function factorial(num){

    if(num < 0 || typeof num !== 'number' || Number.isNaN(num) === true) return NaN;

    if(num === 0 || num === 1) return 1;

    return num * factorial(num - 1);

}

console.log(factorial(NaN));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(6));
console.log(factorial(1));