const canvas = document.getElementById('network');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let nodes = Array.from({length: 40}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 0.5,
  vy: (Math.random() - 0.5) * 0.5
}));

let hue = 30; // color inicial cálido (naranja)

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `hsla(${hue}, 100%, 50%, 0.8)`;
  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
    ctx.fill();
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
    if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
  });

  ctx.strokeStyle = `hsla(${(hue + 40) % 360}, 100%, 50%, 0.3)`;
  nodes.forEach((a, i) => {
    nodes.slice(i+1).forEach(b => {
      let dx = a.x - b.x, dy = a.y - b.y;
      if (dx*dx + dy*dy < 10000) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    });
  });

  hue = (hue + 0.5) % 360;
  requestAnimationFrame(draw);
}
draw();