document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('timeInput'); 
  const output = document.getElementById('timeOutput');

  const button = document.getElementById('calculateButton'); 
  button.addEventListener('click', () => {
    const totalSeconds = parseInt(input.value.trim());

    if (isNaN(totalSeconds) || totalSeconds < 0) {
      output.textContent = 'Некоректне число';
      return;
    }

    const days = Math.floor(totalSeconds / (3600 * 24));
    const remaining = totalSeconds % (3600 * 24);
    const hours = Math.floor(remaining / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;

    const pad = n => String(n).padStart(2, '0');

    output.textContent = `${days} дн. ${pad(hours)}:${pad(minutes)}:${pad(
      seconds
    )}`;
  });
});