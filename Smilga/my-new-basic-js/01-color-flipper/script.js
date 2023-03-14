const colors = ['red', 'green', 'blue'];
const button = document.getElementById('btn');
let colorNumber = 0;

document.body.style.backgroundColor = colors[colorNumber];

button.addEventListener('click', function () {
  //   const randomColor = getRandomColor();
  if (colorNumber >= 2) {
    colorNumber = 0;
  } else {
    colorNumber++;
  }
//   console.log("colorNumber", colorNumber);
  document.body.style.backgroundColor = colors[colorNumber];
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
