// commands - encapsulate an action or request as an object

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    console.log(this.history);
    this.value = command.undo(this.value);
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }
  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }
  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }
  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }
  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }
  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }
  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }
  execute(currentValue) {
    return currentValue / this.valueToDivide;
  }
  undo(currentValue) {
    return currentValue * this.valueToDivide;
  }
}
// combining together different commands
// instead of having separate methods for each operation
class AddAndMultiplyCommand {
    constructor(valueToAdd, valueToMultiply){
        this.addCommand = new AddCommand(valueToAdd)
        this.multiplyCommand = new MultiplyCommand(valueToMultiply)
    }
    // adding and multiplying
    execute(currentValue){
        const newValue = this.addCommand.execute(currentValue)
        return this.multiplyCommand.execute(newValue)
    }
    undo(currentValue){
        const newValue = this.multiplyCommand.undo(currentValue)
        return this.addCommand.undo(newValue)
    }
}

const calculator = new Calculator();
calculator.executeCommand(new AddCommand(10));
calculator.executeCommand(new MultiplyCommand(2))
console.log(calculator.value)
