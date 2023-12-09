/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor()
  {
   this.result =0;
  }
   add(a)
  {
    this.result+=a;
  }
  subtract(a)
  {
    this.result-=a;
  }
  multiply(a)
  {
    this.result*=a;
  }
  divide(number) {
    if (number === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.result /= number;
  }

  clear()
  {
    this.result=0;
  }
  getResult()
  {
    return this.result;
  }

  cleanString(expression) {
    return expression.replace(/\s/g, '');
  }

  containsOtherCharacters(str) {
    const pattern = /[^+\-/*\d()]/;
    return pattern.test(str);
  }

  calculate(expression) {
    expression = this.cleanString(expression);

    if (this.containsOtherCharacters(expression)) {
      throw new Error('Invalid Input');
    }
    try {
      
      this.result = eval(expression);
      return this.result;
  } catch (error) {
      throw new Error("Invalid expression: " + error.message);
  }



  }
}
const mycal = new Calculator();
mycal.add(5);
console.log(mycal.getResult());
mycal.subtract(10);
console.log(mycal.getResult());
mycal.multiply(33);
console.log(mycal.getResult());
mycal.divide(2);
console.log(mycal.getResult());



let exp = "10 +   2 *    (   6 - (4 + 1) / 2) + 7";
mycal.calculate(exp);
console.log(mycal.getResult());
module.exports = Calculator;
