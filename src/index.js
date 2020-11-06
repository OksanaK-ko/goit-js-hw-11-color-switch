import './styles.css';

const startOn = document.querySelector('[data-action="start"]');
const stopOn = document.querySelector('[data-action="stop"]');
let timerId = null;

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

console.log(startOn);
startOn.addEventListener('click', startOnClick);
function startOnClick() {
        timerId = setInterval(() => {
        document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
        startOn.setAttribute("disabled", "true")
        }, 1000);
    
    
};

stopOn.addEventListener('click', () => {
    clearInterval(timerId);
    document.querySelector('[data-action="start"]').removeAttribute("disabled");
    });

