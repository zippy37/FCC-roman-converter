const convert = document.getElementById("convert-btn");
const form = document.getElementById("form");
const output = document.getElementById("output")
const reset = document.getElementById("reset-btn")


function isValidInput(str, int) {
  if (!str || str.match(/[e.]/g)) {
    output.innerText = "Please enter a valid number.";
  }
  else if (int < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  }
  
  else if (int > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999"
  }
  else {
    return true;
  }
  return false;
}

function convertToRoman(num) {
    const romanNumerals = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"],
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"]
    ];
    if (num === 0) {
      return "";
    }

    for (let i = 0; i < romanNumerals.length; i++ ) {
    if (num >= romanNumerals[i][0]) {
      console.log(convertToRoman(num - romanNumerals[i][0]));
      return romanNumerals[i][1] + convertToRoman(num - romanNumerals[i][0]);
    }
  }
}

function clearOutput() {
  output.innerText = "";
};

form.addEventListener('submit', function(event) { 
  event.preventDefault();
}); 

convert.addEventListener("click", () => {
  displayResult();
});

function displayResult() {
  
  const input = document.getElementById("number").value;
  const int = parseInt(input);
  output.classList.remove("hidden")
  clearOutput();
  if (isValidInput(input, int)) {
    output.innerText = convertToRoman(input);
  }
};




