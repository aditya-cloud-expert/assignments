const assert = require('assert');
const Calculator = require('./calculator');

describe('Calculator', () => {
    const calculator = new Calculator();

    it('should add two numbers', () => {
        assert.strictEqual(calculator.add(2, 3), 5);
    });

    it('should subtract two numbers', () => {
        assert.strictEqual(calculator.subtract(5, 3), 2);
    });

    it('should multiply two numbers', () => {
        assert.strictEqual(calculator.multiply(4, 3), 12);
    });

    it('should divide two numbers', () => {
        assert.strictEqual(calculator.divide(6, 3), 2);
    });

    it('should throw error on division by zero', () => {
        assert.throws(() => calculator.divide(5, 0), Error);
    });
});