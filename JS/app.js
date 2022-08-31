// console.log("This is a clock application")

// getting the divs corresponding to the hours minute and seconds
const hourhand = document.querySelector(".hour");
const minutehand = document.querySelector(".minute");
const secondhand = document.querySelector(".second");
let x;
// console.log(hourhand,minutehand,secondhand)

// this is a function that sets the clock time and determines the rotation ratio for the hands of the clock to turn
function updateClock() {
  //creating a Date object
  const date = new Date();
  // getting the hour,minute and seconds from the Date object using the respective functions
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  // determing the turn ratio, by which each hand would move in the clock as time passes by

  const secondturnRatio = seconds / 60;
  const minuteturnRatio = (secondturnRatio + minute) / 60;
  const hourturnRatio = (minuteturnRatio + hour) / 12;

  // calling a rotate function that can rotate the clock's hands smoothly
  rotate(secondhand, secondturnRatio);
  rotate(minutehand, minuteturnRatio);
  rotate(hourhand, hourturnRatio);
}

// this function helps to rotate the hand
function rotate(element, rotationratio) {
  // The rotation variable, that is set in the style sheet is updated for every function call, for individual hands(that is hour, minute and second)
  element.style.setProperty("--rotation", rotationratio * 360);
}

// running the function first time when the page loads
updateClock();
// running the function at an interval of 1000ms or 1sec
setInterval(updateClock, 1000);

//==============================================================================
//==============================================================================
//==============================================================================
// making of digital clock

// setting a event listener, such that if one clicks on the button, the style of the clock changes
let clockdiv = document.querySelector(".clock");

let digitalBtn = document.getElementById("digi");
digitalBtn.addEventListener("click", () => {
  console.log("clicked");
  clockdiv.innerHTML = "";
  clockdiv.classList = "";
  updateDigitalClock();
  x = setInterval(updateDigitalClock, 1000);
});

function updateDigitalClock() {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();

  let timeofDay = currentHour < 12 ? "AM" : "PM";

  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
  currentHour = currentHour > 12 ? currentHour - 12 : currentHour;
  currentHour = (currentHour < 10 ? "0" : "") + currentHour;

  currentHour = currentHour == 0 ? 12 : currentHour;
  let currentTimeStr =
    currentHour +
    ":" +
    currentMinutes +
    ":" +
    currentSeconds +
    "  " +
    timeofDay;
  // console.log(currentTimeStr)

  document.getElementById("digital").innerHTML = currentTimeStr;
}

let analogclock = document.getElementById("analog");
analogclock.addEventListener("click", function () {
  // clockdiv.innerHTML = ""
  // location.reload()
  clearInterval(x);
  let digitalelement = document.getElementById("digital")
  digitalelement.innerHTML = "";
  // clockdiv.classList.add('clock')
  // clockdiv.classList.add('number')
  // clockdiv.classList.add('number1')
  // clockdiv.classList.add('number2')
  // clockdiv.classList.add('body')
  updateClock()
  setInterval(updateClock,100)

//   const stylesheet = document.styleSheets[0];
//   let elementRules;

//   // looping through all its rules and getting your rule
//   for (let i = 0; i < stylesheet.cssRules.length; i++) {
    
//       console.log(stylesheet.cssRules[i]);

//       digitalelement.style.css = stylesheet.cssRules[i]
//   }
location.reload()
});
