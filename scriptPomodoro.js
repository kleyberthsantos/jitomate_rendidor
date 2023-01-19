let timer = document.getElementById("timer");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");



function screenTime(time) {
  timer.innerHTML = "";
  let timerP = document.createElement("h5");
  timerP.innerHTML = secondsToString(time);
  timer.appendChild(timerP);
}
let interval;

// INICIA EL CONTADOR
startButton.addEventListener("click", function () {
  console.log("start");
  let startCounter = false;
  let minutes = 25;
  let seconds = 0;
  seconds = minutes * 60 || 0;
  interval = setInterval(function () {
    seconds--;
    console.log(seconds);
    screenTime(seconds);
    if (!seconds) {
      clearInterval(interval);
      alert("🚨 It is Cool 😎. Time to take a break!");
    }
  }, 1000)
});

//DETIENE EL CONTADOR Y LO REGRESA A SU ESTADO ORIGINAL
stopButton.addEventListener("click", function () {
  console.log("stop");
  clearInterval(interval);
  timer.innerHTML = "";
  let timerP = document.createElement("h5");
  timerP.innerHTML = "25:00";
  timer.appendChild(timerP);
});



/* TRANSFORMA LOS SEGUNDOS EN UN STRING QUE MUETRA EN EL DOM EL FORMATO "MM:SS". 
SE INVOCA EN LA FUNCION screenTime()
 */
function secondsToString(seconds) {
  let minute = Math.floor((seconds / 60) % 60);
  minute = (minute < 10) ? '0' + minute : minute;
  let second = seconds % 60;
  second = (second < 10) ? '0' + second : second;
  return minute + ':' + second;
}


