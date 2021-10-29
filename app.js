//Declares cost variables
let tipPercent = 0;
let tipAmount = 0.0;
let payAmount = 0.0;
let peopleAmount = 0;

//Access DOM classes
const totalBill = document.querySelector(".total-input");
const calculateBtn = document.querySelector(".calculate-btn");
const tipAmountDisplay = document.querySelector(".tip-amount");
const payAmountDisplay = document.querySelector(".pay-amount");

//Manipulate DOM class texts - total tip & pay amount
tipAmountDisplay.innerHTML = "Tip to leave: £" + tipAmount + ".00";
payAmountDisplay.innerHTML = "Each person pays: £" + payAmount + ".00";

//Calculates tip amount
function calculateTip() {
  const calculateBill = totalBill.value; //Variable declared with user amount input
  tipAmount = (tipPercent / 100) * calculateBill; //Calculation executed

  //If user does not enter a total bill
  if (calculateBill <= 0 || isNaN(tipAmount)) {
    alert("Please enter valid amount. At least £1.");
    // tipAmountDisplay.innerHTML = "Tip to leave: £" + rounded;
  } else {
    let rounded = tipAmount.toFixed(2); //Amount rounded to two decimal places
    tipAmountDisplay.innerHTML = "Tip to leave: £" + rounded; //Manipulate DOM h3
    calculatePeople(tipAmount); //Invokes calculatePeople with tipAmount as arg
  }
}

//Calculates amount each person pays
//Declared with tipAmount parameter
function calculatePeople(tipAmount) {
  payAmount = tipAmount / peopleAmount; //Divide tipAmount with people amount

  //If user does not iput tip amount
  if (isNaN(payAmount)) {
    alert(
      "Invalid tip. Please check tip percentage is at least 1% and you have selected an amount of people to contribute."
    );
  } else {
    let rounded = payAmount.toFixed(2); //Rounded to two decimal places
    payAmountDisplay.innerHTML = "Each person pays: £" + rounded; //Manipulate DOM h3
  }
}

//Slider DOM Access
let slider = document.getElementById("slider");
let output = document.querySelector(".tip-display");

slider.oninput = function () {
  output.innerHTML = slider.value; //Displays slider value
  tipPercent = this.value; //Variable value is now slider value

  if (tipPercent <= 5) {
    slider.style.backgroundColor = "#fff";
  } else if (tipPercent <= 20) {
    slider.style.backgroundColor = "#95F985";
  } else if (tipPercent < 50) {
    slider.style.backgroundColor = "#92DFF3";
  }

  if (tipPercent >= 50) {
    slider.style.backgroundColor = "#993333";
  }
};

// Dropdown Menu for people numbers
let click = document.querySelector(".click");
let option = document.querySelectorAll(".option");

click.addEventListener("click", () => {
  peopleAmount = click.value; //peopleAmount equals value of option
});

//Click event to calculate
calculateBtn.addEventListener("click", calculateTip); //runs calculateTip function
