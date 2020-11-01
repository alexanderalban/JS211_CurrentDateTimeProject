// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work 
// in 421 and you need to brush up on your HTML elements**

"use strict";

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
// console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  console.log(new Date);
  document.getElementById("time-and-date").innerHTML = currentDate;
};

const displayDay = () => {
  const currentDay = new Date();
  console.log(new Date);
  let myHour = currentDay.getHours();
  let myMinutes = currentDay.getMinutes();
  if (myMinutes < 10) {
    myMinutes = "0" + myMinutes;
  };
  let dayNumber = currentDay.getDay();
  let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let myDay = dayArray[dayNumber];
  document.getElementById("time-and-date").innerHTML = myDay + " " + myHour + ":" + myMinutes;
}

// ********Write a JavaScript program to convert a number to a string.

const convertToString = () => {
  let x = document.getElementById("number-to-string").value;
  let y = x.toString();
  console.log(y);
  console.log(x + " is now a " + typeof y + "!");
  document.getElementById("string-Result").innerHTML = x + " is now a " + typeof y + "!"
};



// ********Write a JavaScript program to convert a string to the number.

const convertToNumber = () => {
  let x = document.getElementById("string-to-number").value;
  let y = parseInt(x);
  let z = Number(y);
  console.log(x + " is now a " + typeof z + "!" + " It's " + y);
  document.getElementById("number-Result").innerHTML = x + " is now a " + typeof z + "!" + " It's " + y;
};


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String


const showDataType = () => {
  let x = document.getElementById("data-Reveal").value.toLowerCase();
  console.log(x);

  if (x === "false") {
    x = false;
  } else if (x === "true") {
    x = true;
  } else if (x === "null") {
    x = null;
  } else if (x === "") {
    x = undefined;
  } else if (x === "nan") {
    x = NaN;
  } else if (typeof x === "string") {
    x = Number(x);
    console.log(typeof x);
    if (isNaN(x) === true) {
      x = document.getElementById("data-Reveal").value;
    }
  }
  console.log(typeof x);
  console.log(x);
  document.getElementById("data-Result").innerHTML = x + " = " + typeof x + "!";
};



// ********Write a JavaScript program that adds 2 numbers together.

const addNumbers = (num1, num2) => {
  num1 = document.getElementById("math-num-1").value;
  num2 = document.getElementById("math-num-2").value;
  let x = parseInt(num1) + parseInt(num2);
  console.log(x);
  document.getElementById("sum-Result").innerHTML = x;
};



// ********Write a JavaScript program that runs only when 2 things are true.

const twoAreTrue = () => {
  let x = 45;
  let y = 45;
  let z = 64;
  let w = 64;

  if (x === y && z === w) {
    alert("Both are true! Thanks for clicking");
  }
}



// *********Write a JavaScript program that runs when 1 of 2 things are true.

const oneIsTrue = () => {
  let x = 45;
  let y = 45;
  let z = 64;
  let w = 64;

  if (x === y || y === w) {
    alert("Oh no! Only one of these statements is true! Try again!");
  }
}



// **********Write a JavaScript program that runs when both things are not true.  

const bothAreFalse = () => {
  let x = 45;
  let y = 45;
  let z = 64;
  let w = 64;

  if (x === z || y === w) {
    alert("Wait, what? How did you do that?");
  } else {
    alert("Oof, sorry. Neither of those are true. Try again!");
  }
}



// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built 
//above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
