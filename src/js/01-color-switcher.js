const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
}

let tomeId = null;

refs.start.addEventListener('click', () => {
  tomeId = setInterval(getBackgraundColor, 1000);
  refs.start.disabled = true;
});

refs.stop.addEventListener('click', () => {
  clearInterval(tomeId);
  refs.start.disabled = false;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getBackgraundColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

