document.addEventListener('DOMContentLoaded', () => {
    const firstNumInput = document.getElementById('first-num');
    const secondNumInput = document.getElementById('second-num');
    const calculateButton = document.getElementById('calculate-btn');
    const resultText = document.querySelector('.calculator-result-text');
    const operatorButtons = document.querySelectorAll('.calculator-button-item[id="+"], .calculator-button-item[id="-"], .calculator-button-item[id="*"], .calculator-button-item[id="/"]');

    let selectedOperator = '';
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            operatorButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedOperator = button.id;
        });
    });
    const hideResultText = () => {
        resultText.textContent = '';
    };

    calculateButton.addEventListener('click', () => {
        const num1 = parseFloat(firstNumInput.value);
        const num2 = parseFloat(secondNumInput.value);

        if (isNaN(num1) || isNaN(num2)) {
            resultText.textContent = 'Будь ласка, введіть дійсні числа.';
            return;
        }

        let result;
        switch (selectedOperator) {
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
                if (num2 === 0) {
                    resultText.textContent = 'Ділення на нуль неможливе!';
                    return;
                }
                result = num1 / num2;
                break;
            default:
                resultText.textContent = 'Будь ласка, виберіть операцію.';
                return;
        }

        resultText.textContent = `Результат: ${result}`;
    });
});