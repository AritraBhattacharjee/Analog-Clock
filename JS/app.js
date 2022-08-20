console.log("This is a clock application")

// getting the divs corresponding to the hours minute and seconds
const hourhand = document.querySelector('.hour')
const minutehand = document.querySelector('.minute')
const secondhand = document.querySelector('.second')

// console.log(hourhand,minutehand,secondhand)

// this is a function that sets the clock time and determines the rotation ratio for the hands of the clock to turn
function updateClock(){
    //creating a Date object
    const date = new Date()
    // getting the hour,minute and seconds from the Date object using the respective functions
    const hour = date.getHours()
    const minute = date.getMinutes()
    const seconds = date.getSeconds()
    
    // determing the turn ratio, by which each hand would move in the clock as time passes by

    const secondturnRatio = seconds/60 
    const minuteturnRatio = (secondturnRatio+minute)/60
    const hourturnRatio = (minuteturnRatio+hour)/12

    // calling a rotate function that can rotate the clock's hands smoothly
    rotate(secondhand,secondturnRatio)
    rotate(minutehand,minuteturnRatio)
    rotate(hourhand,hourturnRatio)
 }

 // this function helps to rotate the hand
 function rotate(element,rotationratio)
 {
    // The rotation variable, that is set in the style sheet is updated for every function call, for individual hands(that is hour, minute and second)
    element.style.setProperty('--rotation',rotationratio*360)
 }

 // running the function first time when the page loads
updateClock()

// running the function at an interval of 10ms or 1sec

setInterval(updateClock,1000)