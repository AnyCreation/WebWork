const Clock = document.getElementById("Timer")
const d = new Date();

function Now() {
    Clock.innerHTML
    setInterval(Now, 1000)
}
Now()