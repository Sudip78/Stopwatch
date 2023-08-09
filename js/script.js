
//  Stopwatch function()

window.onload = function(){
    var seconds = 0;
    var milliseconds  = 0;
    var appendmillisseconds = document.getElementById("milliseconds");
    var appendseconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

   buttonStart.onclick = function(){
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10)
   }
   
   buttonStop.onclick = function(){
     clearInterval(Interval);
   }

   buttonReset.onclick = function(){
     clearInterval(Interval);
     milliseconds = "0";
     seconds = "0";
     appendmillisseconds.innerHTML = milliseconds;
     appendseconds.innerHTML = seconds;
   }

   function startTimer(){
     milliseconds++;
     if(milliseconds <= 9){
        appendmillisseconds.innerHTML = "0" + milliseconds;
     }
     if(milliseconds < 9){
        appendmillisseconds.innerHTML = milliseconds;
     }
     if(milliseconds < 99){
        seconds++
        appendseconds.innerHTML = "0" + seconds;
        milliseconds = 0;
        appendmillisseconds.innerHTML = "0" + 0;
     }
    if(seconds < 9){
        appendseconds.innerHTML = seconds;
    }

   }

}