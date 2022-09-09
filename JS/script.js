"use strict";

window.onload = () => {
        setTimeout(() => {
                document.querySelector(".countdown").style.cssText = `display: flex`;
        }, 3000);
};

document.querySelector(".countdown").insertAdjacentHTML('afterbegin', `
        <ul>
                <li><span id="month"></span>Months</li>
                <li><span id="days"></span>days</li>
                <li><span id="hours"></span>Hours</li>
                <li><span id="minutes"></span>Minutes</li>
                <li><span id="seconds"></span>Seconds</li>
        </ul>
`);

function countdownCounter(months, day) {

        const countdown = setInterval(() => {

                const currentDate = new Date().getTime();
                const newDate = new Date( `${months}, ${day} 2022 23:59:59`).getTime();

                const difference = newDate - currentDate;

                const mt =  Math.floor((difference % (1000 * 60 * 60 * 24 * (365 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365 / 12)));
                const d = Math.floor(difference % (1000 * 60 * 60 * 24 * (365 / 12)) / (1000 * 60 * 60 * 24));
                const h =  Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((difference % (1000 * 60)) / 1000);
                
                document.getElementById("seconds").innerHTML = s < 10 ? '0' + s : s;
                document.getElementById("minutes").innerHTML = m < 10 ? '0' + m : m;
                document.getElementById("hours").innerHTML = h < 10 ? '0' + h : h;
                document.getElementById("days").innerHTML = d < 10 ? '0' + d : d;
                document.getElementById("month").innerHTML = mt < 10 ? '0' + mt : mt;

                if(mt === 0 && d === 0 && h === 0 && m === 0 && s === 0) {
                      clearInterval(countdown);
                }

        }, 1000);
}
countdownCounter (11, 21);