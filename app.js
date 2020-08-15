// - Global Data -

display_screen = [];
console.log(5 + 0.0);

// - DOM Objects -

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

const decimal = document.querySelector(".decimal");
const calculate = document.querySelector(".calculate");

const add_btn = document.querySelector(".add");
const subtract_btn = document.querySelector(".subtract");
const multiply_btn = document.querySelector(".multiply");
const divide_btn = document.querySelector(".divide");

const clear_btn = document.querySelector(".clear");
const negate_btn = document.querySelector(".negate");

const displayOperand = document.getElementById("display-operand");
const display = document.getElementById("display");

// - Functions -

const calculate_exp = (operand1, operand2, operator) => {
  if (operator === "+") {
    return operand1 + operand2;
  } else if (operator === "-") {
    return operand1 - operand2;
  } else if (operator === "*") {
    return operand1 * operand2;
  } else if (operator === "/") {
    return operand1 / operand2;
  }
};

const updateScreen = () => {
  if (display_screen.length > 10) {
    var sliced = display_screen.slice(0, 9);
    display.innerHTML = sliced;
  } else {
    display.innerHTML = display_screen.join("");
  }
};

const checkForNan = () => {
  var joined = display_screen.join("");
  if (joined.startsWith("NaN")) {
    display_screen = [];
  }
};

/* const handleDecimal = () => {
    var joined = display_screen.join("");
    if (joined.startsWith('.')) {

    }
} */

if (zero) {
  zero.addEventListener("click", () => {
    checkForNan();
    let zero = 0;
    display_screen.push(zero);
    updateScreen();
  });
}
if (one) {
  one.addEventListener("click", () => {
    checkForNan();
    let one = 1;
    display_screen.push(one);
    updateScreen();
  });
}
if (two) {
  two.addEventListener("click", () => {
    checkForNan();
    let two = 2;
    display_screen.push(two);
    updateScreen();
  });
}
if (three) {
  three.addEventListener("click", () => {
    checkForNan();
    let three = 3;
    display_screen.push(three);
    updateScreen();
  });
}
if (four) {
  four.addEventListener("click", () => {
    checkForNan();
    let four = 4;
    display_screen.push(four);
    updateScreen();
  });
}
if (five) {
  five.addEventListener("click", () => {
    checkForNan();
    let five = 5;
    display_screen.push(five);
    updateScreen();
  });
}
if (six) {
  six.addEventListener("click", () => {
    checkForNan();
    let six = 6;
    display_screen.push(six);
    updateScreen();
  });
}
if (seven) {
  seven.addEventListener("click", () => {
    checkForNan();
    let seven = 7;
    display_screen.push(seven);
    updateScreen();
  });
}
if (eight) {
  eight.addEventListener("click", () => {
    checkForNan();
    let eight = 8;
    display_screen.push(eight);
    updateScreen();
  });
}
if (nine) {
  nine.addEventListener("click", () => {
    checkForNan();
    let nine = 9;
    display_screen.push(nine);
    updateScreen();
  });
}

if (clear_btn) {
  clear_btn.addEventListener("click", () => {
    /* for (var i = 0; i < display_screen.length; i++) {
      display_screen.shift();
    } */
    display_screen = [];
    displayOperand.innerHTML = "";
    updateScreen();
  });
}

if (decimal) {
  decimal.addEventListener("click", () => {
    checkForNan();
    if (!display_screen.includes(".")) {
      display_screen.push(".");
    }
    updateScreen();
  });
}

if (negate_btn) {
  negate_btn.addEventListener("click", () => {
    if (!display_screen.includes(".")) {
      var numero = display_screen.join("");
      var new_numero = parseFloat(numero, 10);
      negated = new_numero * -1;
      display_screen = [];
      display_screen.push(negated);
      updateScreen();
    } else {
      var numero = display_screen.join("");
      var new_numero = parseFloat(numero, 10);
      negated = new_numero * -1;
      display_screen = [];
      display_screen.push(negated);
      updateScreen();
    }
  });
}

if (add_btn) {
  add_btn.addEventListener("click", () => {
    if (
      !display_screen.includes("+") &&
      !display_screen.includes("-") &&
      !display_screen.includes("*") &&
      !display_screen.includes("/")
    ) {
      display_screen.push("+");
      displayOperand.innerHTML = "+";
    }
    updateScreen();
  });
}
if (subtract_btn) {
  subtract_btn.addEventListener("click", () => {
    if (
      !display_screen.includes("+") &&
      !display_screen.includes("-") &&
      !display_screen.includes("*") &&
      !display_screen.includes("/")
    ) {
      display_screen.push("-");
      displayOperand.innerHTML = "-";
    }
    updateScreen();
  });
}
if (multiply_btn) {
  multiply_btn.addEventListener("click", () => {
    if (
      !display_screen.includes("+") &&
      !display_screen.includes("-") &&
      !display_screen.includes("*") &&
      !display_screen.includes("/")
    ) {
      display_screen.push("*");
      displayOperand.innerHTML = "*";
    }
    updateScreen();
  });
}
if (divide_btn) {
  divide_btn.addEventListener("click", () => {
    if (
      !display_screen.includes("+") &&
      !display_screen.includes("-") &&
      !display_screen.includes("*") &&
      !display_screen.includes("/")
    ) {
      display_screen.push("/");
      displayOperand.innerHTML = "/";
    }
    updateScreen();
  });
}

const calculate_function = () => {
  var joined = display_screen.join("");
  if (joined.includes("+")) {
    if (joined.startsWith("-")) {
      console.log("sunny weather");
      display_screen.shift();
      var splitted = joined.split("+");
      rand1 = parseFloat(splitted[0]);
      rand2 = parseFloat(splitted[1]);
      var ans = calculate_exp(rand1, rand2, "+");
      console.log("ans: " + ans);
      display.innerHTML = ans;
      displayOperand.innerHTML = "";
    } else {
      var splitted = joined.split("+");
      rand1 = parseFloat(splitted[0]);
      rand2 = parseFloat(splitted[1]);
      var ans = calculate_exp(rand1, rand2, "+");
      display_screen = [];
      display_screen.push(ans);
      updateScreen();
      displayOperand.innerHTML = "";
    }
  } else if (joined.includes("-")) {
    if (joined.startsWith("-")) {
      display_screen.shift();
      var splitted = joined.split("-");
      rand1 = parseFloat(splitted[1] * -1);
      rand2 = parseFloat(splitted[2]);
      var ans = calculate_exp(rand1, rand2, "-");
      display_screen = [];
      display_screen.push(ans);
      updateScreen();
      displayOperand.innerHTML = "";
    } else {
      var splitted = joined.split("-");
      rand1 = parseFloat(splitted[0]);
      rand2 = parseFloat(splitted[1]);
      var ans = calculate_exp(rand1, rand2, "-");
      display_screen = [];
      display_screen.push(ans);
      updateScreen();
      displayOperand.innerHTML = "";
    }
  } else if (joined.includes("*")) {
    var splitted = joined.split("*");
    rand1 = parseFloat(splitted[0]);
    rand2 = parseFloat(splitted[1]);
    var ans = calculate_exp(rand1, rand2, "*");
    display_screen = [];
    display_screen.push(ans);
    updateScreen();
    displayOperand.innerHTML = "";
  } else if (joined.includes("/")) {
    var splitted = joined.split("/");
    rand1 = parseFloat(splitted[0]);
    rand2 = parseFloat(splitted[1]);
    var ans = calculate_exp(rand1, rand2, "/");
    display_screen = [];
    if (ans == Math.floor(ans)) {
      display_screen.push(ans);
      updateScreen();
      displayOperand.innerHTML = "";
    } else {
      var newAns = ans.toFixed(3);
      display_screen.push(newAns);
      updateScreen();
      displayOperand.innerHTML = "";
    }
  }
};

if (calculate) {
  calculate.addEventListener("click", calculate_function);
}

//Key Pressed Event
window.addEventListener("keyup", move);
function move(e) {
  if (e.keyCode == 48) {
    let zero = 0;
    display_screen.push(zero);
    updateScreen();
  } else if (e.keyCode == 49) {
    let one = 1;
    display_screen.push(one);
    updateScreen();
  } else if (e.keyCode == 50) {
    let two = 2;
    display_screen.push(two);
    updateScreen();
  } else if (e.keyCode == 51) {
    let three = 3;
    display_screen.push(three);
    updateScreen();
  } else if (e.keyCode == 52) {
    let four = 4;
    display_screen.push(four);
    updateScreen();
  } else if (e.keyCode == 53) {
    let five = 5;
    display_screen.push(five);
    updateScreen();
  } else if (e.keyCode == 54) {
    let six = 6;
    display_screen.push(six);
    updateScreen();
  } else if (e.keyCode == 55) {
    let seven = 7;
    display_screen.push(seven);
    updateScreen();
  } else if (e.keyCode == 56) {
    let eight = 8;
    display_screen.push(eight);
    updateScreen();
  } else if (e.keyCode == 57) {
    let nine = 9;
    display_screen.push(nine);
    updateScreen();
  } else if (e.key == "+") {
    if (
      !display_screen.includes("+") &&
      !display_screen.includes("-") &&
      !display_screen.includes("*") &&
      !display_screen.includes("/")
    ) {
      display_screen.push("+");
      displayOperand.innerHTML = "+";
    }
    updateScreen();
  } else if (e.key == "-") {
    if (
      !display_screen.includes("+") &&
      !display_screen.includes("-") &&
      !display_screen.includes("*") &&
      !display_screen.includes("/")
    ) {
      display_screen.push("-");
      displayOperand.innerHTML = "-";
    }
    updateScreen();
  } else if (e.shiftKey && e.keyCode == "56") {
    if (
      !display_screen.includes("+") &&
      !display_screen.includes("-") &&
      !display_screen.includes("*") &&
      !display_screen.includes("/")
    ) {
      display_screen.push("*");
      displayOperand.innerHTML = "*";
    }
    updateScreen();
  } else if (e.key == "/") {
    if (
      !display_screen.includes("+") &&
      !display_screen.includes("-") &&
      !display_screen.includes("*") &&
      !display_screen.includes("/")
    ) {
      display_screen.push("/");
      displayOperand.innerHTML = "/";
    }
    updateScreen();
  } else if (e.keyCode == 8) {
    if (display_screen.length > 0) {
      display_screen.pop();
      updateScreen();
    }
  } else if (e.keyCode == 13) {
    calculate_function();
  }
}

// window.addEventListener("keydown", (event) => {
//   if (event.keyCode === 48) {
//     event.preventDefault();
//     console.log("the 0 key was pressed");
//   }
// });
