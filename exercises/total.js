'use strict';

/*
 * Create a `total` function that takes an array of numbers
 * and return the total
 *
 */

// Your code:

const total = ([a,b,c]) => {
    const reducer = (accumulator , currentValue ) => accumulator + currentValue
    return ([a , b , c ]).reduce(reducer)
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof total, 'function');
assert.strictEqual(total.length, 1);
assert.deepStrictEqual(total([ 1, 1, 1 ]), 3);
assert.deepStrictEqual(total([ 10, 10, 10 ]), 30);
assert.deepStrictEqual(total([ 24, -10, 10 ]), 24);
// End of tests */
