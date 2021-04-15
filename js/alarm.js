
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let year = document.getElementById("year");
let month = document.getElementById("month");
let dateday = document.getElementById("date");
let day = document.getElementById("day");
let message1 = document.getElementById("messagepara1");
let message2 = document.getElementById("messagepara2");



function showtime() {
    let date = new Date();
    if (date.getMinutes() < 10 && date.getSeconds() < 10) {
        min.innerHTML = `0${date.getMinutes()}`
        sec.innerHTML = `0${date.getSeconds()}`
        hrs.innerHTML = `${date.getHours()}`
    }
    else if (date.getMinutes() < 10) {
        min.innerHTML = `0${date.getMinutes()}`
        hrs.innerHTML = `${date.getHours()}`
        sec.innerHTML = `${date.getSeconds()}`
    }
    else if (date.getSeconds() < 10) {
        sec.innerHTML = `0${date.getSeconds()}`
        min.innerHTML = `${date.getMinutes()}`
        hrs.innerHTML = `${date.getHours()}`
    }
    else {
        sec.innerHTML = `${date.getSeconds()}`
        min.innerHTML = `${date.getMinutes()}`
        hrs.innerHTML = `${date.getHours()}`

    }

    setTimeout(() => {
        showtime();
    }, 500);
}
showtime();
showdate();
function showdate() {
    const dayobj = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date1 = new Date();
    dateday.innerHTML = `${date1.getDate()}`
    month.innerHTML = `${(date1.getMonth()) + 1}`
    year.innerHTML = `${date1.getFullYear()}`
    day.innerHTML = `${dayobj[date1.getDay()]}`
    setTimeout(() => {
        showdate();
    }, 3600000);
}
let time = document.getElementById("hourinput");

function timevalue() {
    pause();
    let date2 = new Date();
    let valv = time.value.toString();
    if (valv != "") {
        let hrs1 = Number(valv.slice(0, 2));
        let mints = Number(valv.slice(3, 5));
        let diffhrs = ((hrs1 % 24) - (date2.getHours()) % 24);
        if (diffhrs < 0) {
            diffhrs = 24 + diffhrs;
        }
        else {

            let b = 5;

        }

        let mindiff = mints % 100 + (60 - (date2.getMinutes() % 100));
        if (mindiff >= 60) {

            mindiff = mindiff - 60;
        }
        else {
            diffhrs--;
        }
        if (diffhrs >= 0 && mindiff >= 0) {

            message1.innerHTML = `Alarm saved!!It will ring after ${diffhrs} Hours and ${mindiff} Min`
            message1.style.display = "block";
            setTimeout(() => {
                message1.style.display = "none";
            }, 5000)
            setTimeout(() => {
                play();
            }, ((diffhrs * 3600000) + (mindiff * 60000)));
        }
        else {
            message2.innerHTML = `Time has passed! Please enter a valid time`
            message2.style.display = "block";
            setTimeout(() => {
                message2.style.display = "none";
            }, 5000)
        }
    }

}

function play() {
    document.getElementById("audio").play();
}
function pause() {
    document.getElementById("audio").pause();
    document.getElementById("audio").currentTime = 0;
}
 
function canclealarm()
 {
     let data=time.value.toString();
    if (data =="") {
        message2.innerHTML = `No Alarm active! please set a alarm first.`
        message2.style.display = "block";
        setTimeout(() => {
            message2.style.display = "none";
        }, 5000);
    }
    else {
        message2.innerHTML = `Alarm Cancelled! Please set a new alarm.`
        message2.style.display = "block";
        setTimeout(() => {
            message2.style.display = "none";
        }, 5000)
        setTimeout(() => {
            timevalue();
        }, 1000);
    }


}