// Select elements
const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');
const clearCanvas = document.getElementById('clearCanvas');

// Variables to track drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentColor = '#000000'; // Default black
let currentBrushSize = 5;    // Default size

// Update the brush color
colorPicker.addEventListener('change', (e) => {
  currentColor = e.target.value;
});

// Update the brush size
brushSize.addEventListener('change', (e) => {
  currentBrushSize = e.target.value;
});

// Clear the canvas
clearCanvas.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

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
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = currentBrushSize;
  ctx.lineCap = 'round';
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Stop drawing when the mouse is released or leaves the canvas
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
