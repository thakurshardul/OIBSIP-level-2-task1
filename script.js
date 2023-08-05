document.addEventListener('DOMContentLoaded', () => {
    const resultInput = document.getElementById('result');
    const buttons = document.querySelectorAll('.number, .operator, .clear, .equal');
  
    let currentInput = '';
    let operator = '';
    let firstNumber = '';
    let hasDecimal = false;
  
    buttons.forEach(button => {
      button.addEventListener('click', () => handleButtonClick(button.innerText));
    });
  
    function handleButtonClick(value) {
      if (value >= '0' && value <= '9') {
        currentInput += value;
        updateResult();
      } else if (value === '.' && !hasDecimal) {
        currentInput += value;
        hasDecimal = true;
        updateResult();
      } else if (value === 'C') {
        clear();
      } else if (value === '=' && firstNumber !== '') {
        calculate();
      } else if (value === '+' || value === '-' || value === '*' || value === '/') {
        operator = value;
        if (currentInput !== '') {
          firstNumber = currentInput;
          currentInput = '';
          hasDecimal = false;
        }
      } else if (value === '(' || value === ')') {
        currentInput += value;
        updateResult();
      }
    }
  
    function updateResult() {
      resultInput.value = currentInput;
    }
  
    function clear() {
      currentInput = '';
      operator = '';
      firstNumber = '';
      hasDecimal = false;
      updateResult();
    }
  
    function calculate() {
      if (firstNumber !== '' && operator !== '' && currentInput !== '') {
        let result;
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(currentInput);
  
        switch (operator) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            result = num1 / num2;
            break;
        }
  
        currentInput = result.toString();
        operator = '';
        firstNumber = '';
        hasDecimal = false;
        updateResult();
      }
    }
  });
  