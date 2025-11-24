let container = document.querySelector(".container");
let randomBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector("#colorInput");
let applyBtn = document.querySelector(".applyBtn");
let currentColorValue = document.querySelector(".currentColorValue");

const colorArray = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "cyan",
  "tomato",
  "lightcoral",
  "aqua",
  "white",
  "black",
  "gray",
  "skyblue",
  "brown",
];

const generateRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomNumber];
};

const changeColor = (color) => {
  container.style.backgroundColor = color;
  currentColorValue.innerHTML = color;
};

const handleRandomBtnClick = () => {
  const color = generateRandomColor();
  changeColor(color);
};

const handleApplyBtnClick = () => {
  const color = colorInput.value;
  changeColor(color);
};

randomBtn.addEventListener("click", handleRandomBtnClick);
applyBtn.addEventListener("click", handleApplyBtnClick);
