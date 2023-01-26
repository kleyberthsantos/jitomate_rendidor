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
  let setMinutes = parseInt(prompt("Ingresa los minutos o haz clic en 'OK'"));
  let minutes
  // OBTIENE EL VALOR EL USUARIO O SETEA POR DEFECTO
  if (setMinutes) {
    minutes = setMinutes;
  } else {
    minutes = 25;
  }

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

//CONTAR LAS VECES QUE INICIA STARTCOUNTER
let count = 0;
stopButton.addEventListener("click", function () {
  count++;
  let counter = document.getElementById("counter");
  counter.innerHTML = `Ciclos realizados hoy: ${count}`;
  console.log(count);
  })

//DETIENE EL CONTADOR Y LO REGRESA A SU ESTADO ORIGINAL
stopButton.addEventListener("click", function () {
  console.log("stop");
  clearInterval(interval);
  timer.innerHTML = "";
  let timerP = document.createElement("h5");
  timerP.innerHTML = "25:00";
  timer.appendChild(timerP);
});



/* TRANSFORMA LOS SEGUNDOS EN UN STRING QUE MUESTRA EN EL DOM EL FORMATO "MM:SS". 
SE INVOCA EN LA FUNCION screenTime()
 */
function secondsToString(seconds) {
  let minute = Math.floor((seconds / 60) % 60);
  minute = (minute < 10) ? '0' + minute : minute;
  let second = seconds % 60;
  second = (second < 10) ? '0' + second : second;
  return minute + ':' + second;
}

//ITERA ENTRE LOS DIFERENTES OPCIONES (BOTONES SUPERIORES)
let optionJitomate = document.getElementById("period_1");
let optionCherry = document.getElementById("period_2");
let optionLimachino = document.getElementById("period_3");

for (let i = 0; i < 4; i++) {
  let btnPeriod = document.getElementById(`btnPeriod_${i}`);
  if (i === 1) {
    btnPeriod.onclick = () => {
      optionJitomate.classList.add("active");
      optionCherry.classList.remove("active");
      optionLimachino.classList.remove("active");
    }
  } else if (i === 2) {
    btnPeriod.onclick = () => {
      optionCherry.classList.add("active");
      optionJitomate.classList.remove("active");
      optionLimachino.classList.remove("active");
    }
  } else if (i === 3) {
    btnPeriod.onclick = () => {
      optionLimachino.classList.add("active");
      optionJitomate.classList.remove("active");
      optionCherry.classList.remove("active");
    }
  } else {
    optionJitomate.classList.add("active");
    optionCherry.classList.remove("active");
    optionLimachino.classList.remove("active");
  }
}
