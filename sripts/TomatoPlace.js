// ---tomato

// 1 min - one "\"

/// Add line |------------------------------------------------

const minS = document.getElementById("time");
const addTime = document.getElementById("addTime");
const select = document.getElementById("option");
const place = document.getElementById("Work");

let All = document.getElementsByClassName("timePlace")
addTime.addEventListener("click", function() {
    place.innerHTML += `<div class="Land">
                        <span class="take">${parseInt(minS.value)}</span>
                        <div class="timePlace ${select.value}" style="width: ${15 * parseInt(minS.value)}px" id="T_${All.length}"></div>
                        </div>`
});


/// Start |------------------------------------------------
const start = document.getElementById("Start");
const stoping = document.getElementById("Stop");

var runing = true;
stoping.addEventListener("click", function() {
    runing = false;
});
start.addEventListener("click", function() {
    if (runing) { // chacking if interval was create before
        var times = document.getElementsByClassName("timePlace");

        var lastIndex = times.length;
        var now = 0;
        var flag = false;

        let Interval = setInterval(function () {
            if (runing) {flag = S(now);} // chacking if interval runing
            if (flag) {
                now ++;
            }
            if (lastIndex - now === 0) {
                clearInterval(Interval)
            }
        }, 1000);
    } else {
        runing = true;
    }
});

function S(index) {
    let Real = document.getElementById(`T_${index}`)
    let W = parseInt(getComputedStyle(Real).width);

    if (W === 0) {
        return true;
    }

    Real.setAttribute("style", `width: ${W - 0.25}px`)
}

