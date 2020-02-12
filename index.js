const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const switcher = {
  isActive: false,
  start() {
    if (this.isActive) return;
    this.isActive = true;

    this.switcherId = setInterval(colorChange, 1000, colors);
  },

  stop() {
    this.isActive = false;
    clearInterval(this.switcherId);
  },
};

const colorChange = function colorChange(arr) {
  const colorsTotal = arr.length - 1;
  const colorIdx = randomIntegerFromInterval(0, colorsTotal);
  body.setAttribute('style', `background: ${arr[colorIdx]}`);
};

btnStart.addEventListener('click', switcher.start.bind(switcher));

btnStop.addEventListener('click', switcher.stop.bind(switcher));
