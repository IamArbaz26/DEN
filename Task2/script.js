// Modal functionality
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');

openModalButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    const body = this.nextElementSibling;
    body.style.display = body.style.display === 'block' ? 'none' : 'block';
  });
});

// Slider functionality
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');

slider.addEventListener('input', () => {
  sliderValue.textContent = slider.value;
});
