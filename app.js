var hour=0;
var min=0;
var sec=0;
var msec=0;
var msecHeading = document.getElementById("msec");
var secHeading = document.getElementById("sec");
var minHeading = document.getElementById("min");
var hourHeading = document.getElementById("hour");
var intreval;
function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec>=100)
    {
        sec++
        secHeading.innerHTML=sec;
        msec = 0;
    }
    else if(sec>=60)
    {
        min++;
        minHeading.innerHTML=min;
        sec=0;
    }
    else if(min>=60)
    {
        hour++;
        hourHeading.innerHTML=hour;
        min=0;
    }
}
function startPause()
{
    if(document.getElementById("start").innerHTML === "Start")
    {
        document.getElementById("start").innerHTML = "Pause";
        intreval = setInterval(timer,10);
    }
    else if(document.getElementById("start").innerHTML === "Pause")
    {
        clearInterval(intreval);
        document.getElementById("start").innerHTML = "Start";
    }
}
function reset()
{
    min=0;
    sec=0;
    hour=0;
    msec=0;
    secHeading.innerHTML=sec;
    minHeading.innerHTML = min;
    hourHeading.innerHTML = hour
    msecHeading.innerHTML = msec;
    Laps.innerHTML="";
    clearInterval(intreval);
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = false;
}
var Lap = document.getElementById("lap");
var Laps = document.getElementById("laps");
function lap() {
  Laps.innerHTML += "<li>" +hour+" : "+ min + " : " + sec + " : " + msec + "</li>";
}
