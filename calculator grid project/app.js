class Calculator{
    constructor(currentOperandText, previousOperandText){
      this.previousOperandText = previousOperandText
      this.currentOperandText = currentOperandText
      this.clear()
    }

    clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
    }

   chooseOperation(operation){
   
   this.operation = operation
   this.currentOperand = this.previousOperand
   this.currentOperand = ''
   this.compute()
   }

   compute(){
    let computation
    const current = parseFloat(this.currentOperand)
    const current2 = parseFloat(this.previousOperand)
    if (isNaN(current) || isNaN(current2)) return
    switch (this.operation) {
        case '+':
    computation = current + current2  
        break;
        case '-':
    computation = current - current2  
        break;
        case '/':
        computation = current / current2  
        break;
        case '*':
        computation = current * current2  
        break;
    
        default:
        return;
    }
    this.currentOperand = computation
    this.previousOperand = ''
    this.operation = ''
   }

   updateDisplay(){
   this.currentOperandText.innerText = this.currentOperand
   this.previousOperandText.innerText = this.previousOperand
}
}


const numberButton = document.querySelectorAll("[data-number]")
const operationButton = document.querySelectorAll("[data-operation]")
const clearButton = document.querySelector("[data-clear]")
const deleteButton = document.querySelector("[data-delete]")
const equalsButton = document.querySelector("[data-equals]")
const currentOperandText = document.querySelector("[data-currentOperand]")
const previousOperandText = document.querySelector("[data-previousOperand]")

const calculator = new Calculator(currentOperandText, previousOperandText)

numberButton.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButton.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () =>{
    calculator.compute()
    calculator.updateDisplay()
})