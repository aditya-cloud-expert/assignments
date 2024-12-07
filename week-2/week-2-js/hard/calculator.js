class Calculator {
  constructor(result = 0) {
    this.result = result; // Initialize the result variable
  }

  // Method to add a number to the result
  add(number) {
    this.result += number;
    return this.result;
  }

  // Method to subtract a number from the result
  subtract(number) {
    this.result -= number;
    return this.result;
  }

  // Method to multiply a number with the result
  multiply(number) {
    this.result *= number;
    return this.result;
  }

  // Method to divide the result by a number
  divide(number) {
    if (number === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result /= number;
    return this.result;
  }

  // Method to clear the result variable
  clear() {
    this.result = 0;
    return this.result;
  }

  // Method to return the current value of the result
  getResult() {
    return this.result;
  }

  // Method to calculate a string expression
  calculate(expression) {
    // Remove all whitespace and validate the expression
    const sanitizedExpression = expression.replace(/\s+/g, ""); // Remove extra spaces
    if (!/^[\d+\-*/().]+$/.test(sanitizedExpression)) {
      throw new Error("Invalid characters in the expression.");
    }

    try {
      // Use `eval` for evaluation, wrapped in a `Function` for added security
      const evaluatedResult = Function(`'use strict'; return (${sanitizedExpression})`)();
      if (isNaN(evaluatedResult)) {
        throw new Error("Invalid expression.");
      }
      this.result = evaluatedResult;
      return this.result;
    } catch (error) {
      throw new Error("Error evaluating the expression.");
    }
  }
}

// Testing the implementatio

module.exports = Calculator;
