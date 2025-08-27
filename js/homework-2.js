// ===== Завдання 1: Слайдер змінює розмір зображення =====
const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

function changeImageSize(event) {
  const value = event.target.value;
  // масштаб від 0.5x до 2x
  const scale = value / 50;
  sliderImage.style.transform = `scale(${scale})`;
}

sliderInput.addEventListener('input', _.debounce(changeImageSize, 150));


// ===== Завдання 2: Рух квадрата з debounce =====
const box = document.getElementById('box');

function moveBox(event) {
  const x = event.clientX;
  const y = event.clientY;
  box.style.transform = `translate(${x}px, ${y}px)`;
}

window.addEventListener('mousemove', _.debounce(moveBox, 100));