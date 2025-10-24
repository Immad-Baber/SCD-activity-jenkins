// calculator.test.js
const { add, subtract, multiply, divide, modulus } = require('./Calculator');

test('adds 5 + 3 to equal 8', () => {
    expect(add(5, 3)).toBe(8);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplies 5 * 3 to equal 15', () => {
    expect(multiply(5, 3)).toBe(15);
});

test('divides 6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
});

test('throws error on divide by zero', () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});

// BONUS (optional)
test('modulus 10 % 3 to equal 1', () => {
    expect(modulus(10, 3)).toBe(1);
});
