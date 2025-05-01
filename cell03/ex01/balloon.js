const balloon = document.getElementById('balloon');
let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

balloon.addEventListener('click', () => {
  size += 10;
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;

  colorIndex = (colorIndex + 1) % colors.length;
  balloon.style.backgroundColor = colors[colorIndex];

  if (size > 420) {
    size = 200;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
  }
});

balloon.addEventListener('mouseleave', () => {
  size = Math.max(200, size - 5);
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;

  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  balloon.style.backgroundColor = colors[colorIndex];
});