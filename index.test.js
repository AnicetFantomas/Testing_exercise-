const { describe, test, expect } = require('@jest/globals');
const stringLength = require('./index');
const reverseString = require('./index2');
const myCalculator = require('./index3');
const capitalizeString = require('./index4')

test('Return length', () => {
     expect(stringLength('High')).toBe(4)
});

test('return reverse', () => {
     expect(reverseString('empty')).toMatch(/ytpme/)
});

describe('return operations', () => {
     test('return addition', () => {expect(myCalculator.add()).toBe(30)});
     test('return substraction', () => {expect(myCalculator.substract()).toBe(-10)});
     test('return multiplication', () => {expect(myCalculator.multiply()).toBe(200)});
     test('return division', () => {expect(myCalculator.divide()).toBe(0.5)});
});

test('Capitalize first chart', () => {expect(capitalizeString('anicet')).toMatch(/Anicet/)})