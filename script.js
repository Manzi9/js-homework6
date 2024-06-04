// FORK THIS PEN

// 1. Wire up the buttons to the lights

// You'll have to select and store the lights as a variable (although it may help you later to have a reference to all of them at once via the 'light' class)

// You'll have to select and store the buttons as separate variables

// then, add an event listener to each of the buttons

// in the 'handler' (the function you give to the listener) you add a class of 'on' to the relevant light

// Also make the lights go on and off on hover (of the light!!)

// 2. (Extra credit): Have a go at making it so that only one light can be on at one time

// 3. (wild&crazy credit) See if you can set up a timer of some sort to do that automatically (You'll have to add new start and stop buttons to the page)

const stopButton = document.getElementById("stop");
const stopLight = document.querySelector(".light.stop");
const cautionButton = document.getElementById("caution");
const cautionLight = document.querySelector(".light.caution");
const goButton = document.getElementById("go");
const goLight = document.querySelector(".light.go");

stopButton.addEventListener("click", (e) => {
  stopLight.classList.add("on");
  cautionLight.classList.remove("on");
  goLight.classList.remove("on");
});

cautionButton.addEventListener("click", (e) => {
  stopLight.classList.remove("on");
  cautionLight.classList.add("on");
  goLight.classList.remove("on");
});

goButton.addEventListener("click", (e) => {
  stopLight.classList.remove("on");
  cautionLight.classList.remove("on");
  goLight.classList.add("on");
});
