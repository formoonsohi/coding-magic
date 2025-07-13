const form = document.querySelector('[data-modal-form]');
const emailInput = document.getElementById('emailInput');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!email || !email.includes('@')) {
    alert('Будь ласка, введіть дійсну електронну адресу!');
    return;
  }

  modalOverlay.classList.remove('hidden');
  emailInput.value = '';
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
});

modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modalOverlay.classList.add('hidden');
  }
});
