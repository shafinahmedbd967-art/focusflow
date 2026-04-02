const rain = new Audio("assets/rain.mp3")
const forest = new Audio("assets/forest.mp3")

rain.loop = true
forest.loop = true

function stopAll(){

rain.pause()
forest.pause()

rain.currentTime = 0
forest.currentTime = 0

}

document.getElementById("rainSound").onclick = ()=>{

stopAll()
rain.play()

}

document.getElementById("forestSound").onclick = ()=>{

stopAll()
forest.play()

}

document.getElementById("stopSound").onclick = stopAll