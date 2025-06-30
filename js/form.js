document.addEventListener('DOMContentLoaded', function () {
  const rotRadios = document.querySelectorAll('input[name="rot"]');
  const rotDetails = document.querySelector('.rot-details');

  const villaFields = document.querySelector('.rot-details__fields--villa');
  const bostadsrattFields = document.querySelector('.rot-details__fields--bostadsratt');
  const propertyButtons = document.querySelectorAll('.rot-details__button');


  rotRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'ja' && radio.checked) {
        rotDetails.classList.remove('is-hidden');
      } else if (radio.value === 'nej' && radio.checked) {
        rotDetails.classList.add('is-hidden');
        villaFields.classList.add('is-hidden');
        bostadsrattFields.classList.add('is-hidden');
        propertyButtons.forEach(btn => btn.classList.remove('is-active'));
      }
    });
  });


  propertyButtons.forEach(button => {
    button.addEventListener('click', () => {

      propertyButtons.forEach(btn => btn.classList.remove('is-active'));
      button.classList.add('is-active');

      // Показуємо відповідні поля
      const type = button.getAttribute('data-type');
      if (type === 'villa') {
        villaFields.classList.remove('is-hidden');
        bostadsrattFields.classList.add('is-hidden');
      } else if (type === 'bostadsratt') {
        bostadsrattFields.classList.remove('is-hidden');
        villaFields.classList.add('is-hidden');
      }
    });
  });
});
