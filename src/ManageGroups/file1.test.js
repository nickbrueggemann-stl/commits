const assert = require('assert');
const { sortThisArray } = require('./file1');

const items = [
    { name: 'banana' },
    { name: 'apple' },
    { name: 'Cherry' },
    { name: 'banana split' },
];

const sorted = sortThisArray(items);
const sortedNames = sorted.map(item => item.name);

assert.deepStrictEqual(sortedNames, [
    'apple',
    'banana',
    'banana split',
    'Cherry',
]);

console.log('✅ sortThisArray passed all tests');
