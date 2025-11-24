let heightInput = document.querySelector("#height-input");
let weightInput = document.querySelector("#weight-input");
let calculateBtn = document.querySelector(".btn");
let bmiValue = document.querySelector(".bmi-value");

let calculateBtnClicked = () => {
  let heightCm = parseFloat(heightInput.value);
  let weightKg = parseFloat(weightInput.value);

  if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
    bmiValue.innerHTML = "Please enter valid values.";
  } else {
    let bmiCalculate = (weightKg * 10000) / heightCm ** 2;
    bmiValue.innerHTML = bmiCalculate.toFixed(2);
    heightInput.value = "";
    weightInput.value = "";
  }
};

calculateBtn.addEventListener("click", calculateBtnClicked);
