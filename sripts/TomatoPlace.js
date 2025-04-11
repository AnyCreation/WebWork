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
                        <div class="timePlace ${select.value}" style="width: ${60 * parseInt(minS.value)}px" id="T_${All.length}"></div>
                        </div>`
});


/// Start |------------------------------------------------
const start = document.getElementById("Start");
start.addEventListener("click", function() {
    var times = document.getElementsByClassName("timePlace");
    var lastIndex = times.length;
    var now = 0;
    console.log(lastIndex)
    var flag = false;

    let Interval = setInterval(function () {
        flag = S(now);
        if (flag) {
            now ++;
        }
        if (lastIndex - now == 0) {
            clearInterval(Interval)
        }
    }, 250);
})

function S(index) {
    console.log(index)
    let Real = document.getElementById(`T_${index}`)
    let W = parseInt(getComputedStyle(Real).width);

    if (W == 0) {
        return true;
    }

    Real.setAttribute("style", `width: ${W - 1}px`)
}

