const counterEl = document.querySelector(".counter");
let counterTitleEl = document.querySelector(".counter__title");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
let counterValue = document.querySelector(".counter__value");

const incrementer = () => {
  const currentValue = counterValue.textContent;

  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber + 1;
  if (newValue > 5) {
    newValue = 5;
    counterEl.classList.add("counter--limit");
    counterTitleEl.innerHTML = `Limit! Buy <b>Pro</b> for >5`;
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  counterValue.textContent = newValue;
  increaseButtonEl.blur();
};

const decrementer = () => {
  const currentValue = counterValue.textContent;

  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber - 1;

  if (newValue < 0) {
    newValue = 0;
  }
  counterValue.textContent = newValue;
  decreaseButtonEl.blur();
};

increaseButtonEl.addEventListener("click", incrementer);

decreaseButtonEl.addEventListener("click", decrementer);

document.addEventListener("keydown", incrementer);

resetButtonEl.addEventListener("click", () => {
  counterEl.classList.remove("counter--limit");
  counterTitleEl.innerHTML = `Fancy Counter`;
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  counterValue.textContent = 0;
  resetButtonEl.blur();
});
