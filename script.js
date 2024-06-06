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
const playButton = document.getElementById("play");

stopButton.addEventListener("click", (e) => {
  stopLight.classList.toggle("on");
  cautionLight.classList.remove("on");
  goLight.classList.remove("on");
});

cautionButton.addEventListener("click", (e) => {
  stopLight.classList.remove("on");
  cautionLight.classList.toggle("on");
  goLight.classList.remove("on");
});

goButton.addEventListener("click", (e) => {
  stopLight.classList.remove("on");
  cautionLight.classList.remove("on");
  goLight.classList.toggle("on");
});

clear.addEventListener("click", function (e) {
  stopLight.classList.remove("on");
  cautionLight.classList.remove("on");
  goLight.classList.remove("on");
});

play.addEventListener("click", (e) => {
  //Have to CLEAR first
  //Why do we need arrow again?
  setTimeout(() => {
    stopLight.classList.add("on");
    cautionLight.classList.add("on");
  }, 2000);

  setTimeout(() => {
    stopLight.classList.remove("on");
    cautionLight.classList.remove("on");
    goLight.classList.add("on");
  }, 4001);
});
