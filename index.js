let text=document.getElementById("text");
let author=document.getElementById("author");

const getNewQuote = async () =>
{
    var url="https://favqs.com/api/qotd";

    fetch('https://favqs.com/api/qotd')
        .then(response => response.json())
        .then(data => {
            console.log(`${data.quote.body} —${data.quote.author}`);
            const quote = data.quote.body;

            const auth = data.quote.auhtor;

            if(auth==null){
                author = "Anonymous";
            }
        
            text.innerHTML ="\""+ quote +"\"";
            author.innerHTML = auth;
        });
}
getNewQuote();

const currentTime = () =>
{
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let session = "AM";
    var greeting = "GOOD MORNING,";

    if (hh==0){
        hh=12;
    }
    if (hh>12){
        hh-=12;
        session = 'PM';
    }
    if(hh==12){
        session = 'PM';
    }
    if (session == 'AM'){
        greeting = "GOOD MORNING,";
    }
    if (hh<=4 || hh==12 && session == 'PM'){
        greeting = "GOOD AFTERNOON,";
    }
    if (hh>4 && hh<=6 && session == 'PM'){
        greeting = "GOOD EVENING,";
        document.getElementById("icon").src = "./assets/moon.svg";
    }
    if (hh>6 && hh<12 && session == 'PM'){
        greeting = "GOOD NIGHT,";
        document.getElementById("icon").src = "./assets/moon.svg";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;

    let time = hh + ":" + mm + " ";
    document.getElementById("greeting").innerHTML = greeting + " " + "IT'S CURRENTLY";
    document.getElementById("time").innerHTML = time;
    document.getElementById("session").innerHTML = session;
    let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();

var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay(){
    isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
    isPlaying = true;
    document.getElementById("play-pause").src = "./assets/pause.svg";
};

myAudio.onpause = function() {
    isPlaying = false;
    document.getElementById("play-pause").src = "./assets/play.svg";
};