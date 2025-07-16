let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;
function update(){
seconds++;
if(seconds===60){
    seconds=0;
    minutes++;
}
if(minutes===60){
    minutes=0;
    hours++;
}
document.getElementById("stopwatch").innerText=(hours<10?"0" : "")+hours+":"+(minutes<10?"0": "")+minutes+":"+(seconds<10?"0": "")+seconds;
}

function start(){
    interval = setInterval(update, 1000)
}
function stop(){
    clearInterval(interval)
}
function reset(){
    clearInterval(interval)
    hours=0;
    minutes=0;
    seconds=0;
    document.getElementById("stopwatch").innerText="00:00:00";
}
