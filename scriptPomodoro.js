let timer = document.getElementById("timer");
let startButton = document.getElementById("startButton");


function screenTime(time){
  timer.innerHTML="";
  let timerP = document.createElement("h5");
  timerP.innerHTML = time;
  timer.appendChild(timerP);
}


startButton.addEventListener("click", function(){
  console.log("start");
  let startCounter = false;
  let minutes = 0.5;
  let seconds = 0;
  let interval;
    seconds = minutes*60 || 0;
    interval = setInterval(function() {
      seconds--;
      console.log(seconds);
      screenTime(seconds);
        if(!seconds){
            clearInterval(interval); 
            alert("🚨 It is Cool 😎. I wish you could share ");
      }
  },1000)
})

