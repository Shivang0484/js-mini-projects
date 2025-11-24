let totalAmount = document.querySelector("#total-amount");
let tipPercent = document.querySelector("#tip-percent");
let calculateBtn = document.querySelector(".calculate-btn");
let showTip = document.querySelector(".show-tip");
let showAmount = document.querySelector(".show-amount");
let clearBtn = document.querySelector(".clear-btn");

let calculateBtnClick = () => {
  if (totalAmount.value === "" || tipPercent.value === "") {
    alert("Enter the amount and tip percent first!");
  } else if (isNaN(totalAmount.value) || isNaN(tipPercent.value)) {
    alert("Enter numbers only!");
  } else {
    let calculatedTipPercent = (tipPercent.value * totalAmount.value) / 100;
    showTip.innerHTML = calculatedTipPercent.toFixed(2);
    showAmount.innerHTML = totalAmount.value;
    totalAmount.value = "";
    tipPercent.value = "";
  }
};

let clearBtnClick = () => {
  if (showAmount.innerHTML === "0" || showTip.innerHTML === "0") {
    alert("Values are already cleared!");
  } else {
    showTip.innerHTML = "0";
    showAmount.innerHTML = "0";
  }
};

calculateBtn.addEventListener("click", calculateBtnClick);
clearBtn.addEventListener("click", clearBtnClick);
