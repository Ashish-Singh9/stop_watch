const Start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");
var minSet=document.getElementById("min");
var secSet=document.getElementById("sec");
var msecSet=document.getElementById("msec");
var interval;
var min=00;
var sec=0;
var msec=0;
function timmer(){
  msec++;
  if(msec<9)
  {
      msecSet.innerText="0"+msec;
  }
  if(msec>9)
  {
    msecSet.innerText=msec;
  }
  if(msec>99)
  {
      sec++;
      secSet.innerText="0"+sec;
      msec=0;
      msecSet.innerText="00";
  }
  if(sec>9)
  {
      secSet.innerText=sec;
  }
  if(sec>99)
  {
      min++;
      minSet.innerText="0"+min;
      sec=0;
      secSet.innerText="00";
  }
  if(min>9)
  {
      minSet.innerText=min;
  }
}
Start.addEventListener("click",function(){
    interval=setInterval(timmer);
    msecSet.style.color="red"
    Start.disabled=true;
});
stop.addEventListener("click",function(){
    clearInterval(interval);
    msecSet.style.color="white"
    Start.disabled=false;
});
reset.addEventListener("click",function(){
    clearInterval(interval);
    min="00";
    sec="00";
    msec="00";
   minSet.innerText=min;
   secSet.innerText=sec;
   msecSet.innerText=msec;
   msecSet.style.color="white"
   Start.disabled=false;
});