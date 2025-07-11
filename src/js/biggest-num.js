const maxNumInput = document.querySelectorAll('[data-maxNum-input]');
const maxNumResult = document.querySelector('[data-maxNum-result]');

function findMaxNumber() {
  let maxNumber = Number.MIN_SAFE_INTEGER;
  let hasInvalidInput = false;
  maxNumInput.forEach(input => {
    const number = Number(input.value);
    if (!isNaN(number)) {
      maxNumber = Math.max(maxNumber, number);
    } else {
      hasInvalidInput = true;
    }
  });
  if (hasInvalidInput) {
    maxNumResult.textContent = 'Будь ласка, введіть лише цифри';
  } else {
    maxNumResult.textContent = maxNumber;
  }
}
maxNumInput.forEach(input => {
  input.addEventListener('input', findMaxNumber);
});
