// 4 separate methods for each operation
// command pattern is not used
// the code is not flexible and not scalable
class Calculator {
    constructor() {
      this.value = 0
    }
  
    add(valueToAdd) {
      this.value = this.value + valueToAdd
    }
  
    subtract(valueToSubtract) {
      this.value = this.value - valueToSubtract
    }
  
    multiply(valueToMultiply) {
      this.value = this.value * valueToMultiply
    }
  
    divide(valueToDivide) {
      this.value = this.value / valueToDivide
    }
  }

  const calculator = new Calculator()
  calculator.add(10)
  console.log(calculator.value)
  calculator.divide(2)
  console.log(calculator.value)