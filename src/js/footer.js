document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.querySelector('.input-footer');
  const submitBtn = document.querySelector('.sbscrb-btn-footer');

  const modal = document.querySelector('.footer-modal');
  const modalBackdrop = document.querySelector('.footer-backdrop');
  const modalClose = document.querySelector('.close-footer-modal-btn');

  const body = document.body;

  // Check email
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  emailInput.addEventListener('input', () => {
    emailInput.classList.toggle('invalid', !validateEmail(emailInput.value));
  });

  // addEventListener for "Subscribe"
  submitBtn.addEventListener('click', event => {
    event.preventDefault();

    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add('invalid');
      return;
    }

    emailInput.classList.remove('invalid');
    console.log('Submitted email:', emailInput.value);

    modal.classList.add('active');
    modalBackdrop.classList.add('active');
    body.classList.add('no-scroll');

    emailInput.value = '';
  });

  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    modalBackdrop.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  modalClose.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
