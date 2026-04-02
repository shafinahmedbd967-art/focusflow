/* Galaxy 3D Particle Effect */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* Particle Class */
class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radius = Math.random() * 1.5 + 0.5;
    this.color = `hsl(${Math.random()*360},80%,60%)`;
    this.angle = Math.random() * 2 * Math.PI;
    this.speed = Math.random() * 0.01 + 0.002;
    this.distance = Math.random() * (canvas.width/3);
  }
  update() {
    this.angle += this.speed;
    this.x = canvas.width / 2 + Math.cos(this.angle) * this.distance;
    this.y = canvas.height / 2 + Math.sin(this.angle) * this.distance;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const particles = [];
const particleCount = 400;

for(let i=0;i<particleCount;i++){
  particles.push(new Particle());
}

function animate(){
  ctx.fillStyle = "rgba(15,32,39,0.4)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.update();
    p.draw();
  });

  requestAnimationFrame(animate);
}
animate();