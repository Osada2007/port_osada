const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
window.addEventListener('resize', initDrops);

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; 
const charArray = chars.split('');
const fontSize = 14; 
let columns = canvas.width / fontSize; 
let drops = [];

function initDrops() {
    columns = canvas.width / fontSize;
    drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
}

initDrops();

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#444444'; // Base Grey Color
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Random glimmers
        if(Math.random() > 0.98) {
             ctx.fillStyle = '#bbbbbb'; // Bright grey highlight
        } else {
             ctx.fillStyle = '#444444'; // Dark grey
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);