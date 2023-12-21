/** you can edit the countdown messages below **/
var countDownDate = new Date("Dec 25, 2023 00:00:00 ").getTime();
var countdownMessage = "it is chrimis merry chrysler happy crisis";
/** you can edit the countdown messages above **/

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('count').innerHTML = "can you believe it guys?! christmas!!! just <u>" + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds +  " seconds</u> away!!! woohoo!!! i am so happy about this information!!! christmas just <u>" + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds +  " seconds</u> away!!! oh wow!!! can you believe it?! christmas!!!";
  
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("happy").innerHTML = countdownMessage;
        document.getElementById("count").innerHTML = "";
    } else {
        document.getElementById("happy").innerHTML = "";
    }
}, 1000);