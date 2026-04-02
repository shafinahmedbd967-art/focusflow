let total = 1500
let remaining = total
let timer
let running=false

const progress = document.getElementById("progress")

function update(){

let m=Math.floor(remaining/60)
let s=remaining%60

document.getElementById("minutes").textContent=
String(m).padStart(2,'0')

document.getElementById("seconds").textContent=
String(s).padStart(2,'0')


let percent = remaining/total

progress.style.strokeDashoffset =
628 - (628*(1-percent))

}

function start(){

if(running) return

running=true

timer=setInterval(()=>{

remaining--

update()

if(remaining<=0){

clearInterval(timer)

running=false

sessionComplete()

}

},1000)

}

function stop(){

clearInterval(timer)
running=false

}

function reset(){

clearInterval(timer)

remaining=total

running=false

update()

}

document.getElementById("startBtn").onclick=start
document.getElementById("stopBtn").onclick=stop
document.getElementById("resetBtn").onclick=reset

update()


document.addEventListener("keydown",(e)=>{

if(e.code==="Space") start()

if(e.key==="r") reset()

if(e.key==="s") stop()

})