// Select the canvas and get the 2D context
const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');

// Variables to track drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Start drawing when the mouse is pressed
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Draw as the mouse moves
canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Stop drawing when the mouse is released or leaves the canvas
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
