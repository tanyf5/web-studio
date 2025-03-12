document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelector('.button');
  const modal = document.querySelector('.modal');
  const backdrop = document.querySelector('.backdrop');
  const closeModalBtn = document.querySelector('.close-modal-btn');
  const form = document.querySelector('.modal-form');
  const body = document.body;
  const thankModal = document.querySelector('.thank-modal');
  const closeThankBtn = document.querySelector('.close-thank-btn');

  // Open form modal
  function openModal() {
    backdrop.classList.add('active');
    modal.classList.add('active');
    body.classList.add('no-scroll');
  }

  // Close form modal
  function closeModal() {
    modal.classList.remove('active');
    body.classList.remove('no-scroll');

    if (!thankModal.classList.contains('active')) {
      backdrop.classList.remove('active');
    }
  }

  function closeThankModal() {
    thankModal.classList.remove('active');
    backdrop.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  // Form check
  function validateForm(event) {
    event.preventDefault();
    let isValid = true;
    const formData = {};
    const privacyCheckbox = document.querySelector('#user-privacy');
    const checkboxDefault = document.querySelector('.checkbox-default');

    form.querySelectorAll('input, textarea').forEach(input => {
      if (input.type !== 'checkbox' && !input.value.trim()) {
        input.classList.add('error');
        isValid = false;
      } else {
        input.classList.remove('error');
        formData[input.name] = input.value.trim();
      }
    });

    if (!privacyCheckbox.checked) {
      checkboxDefault.classList.add('error');
      isValid = false;
    } else {
      checkboxDefault.classList.remove('error');
    }

    if (isValid) {
      console.log('Form data:', formData);
      form.reset();
      modal.classList.remove('active');
      thankModal.classList.add('active');
    }
  }

  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  form.addEventListener('submit', validateForm);
  closeThankBtn.addEventListener('click', closeThankModal);

  backdrop.addEventListener('click', () => {
    if (thankModal.classList.contains('active')) {
      closeThankModal();
    } else {
      closeModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (thankModal.classList.contains('active')) {
        closeThankModal();
      } else {
        closeModal();
      }
    }
  });
});
