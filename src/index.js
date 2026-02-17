'use strict';

/**
 * 
 * @param {number} num - целое неотрицательное число
 * @returns Факториал числа (num)
 */

function factorial(num){

    if(num < 0) return NaN;

    if(num === 0 || num === 1) return 1;

    return num * factorial(num - 1);

}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(6));
console.log(factorial(8));