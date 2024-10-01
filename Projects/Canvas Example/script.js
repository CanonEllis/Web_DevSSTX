// Get the canvas and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set initial circle color
let circleColor = '#FF0000';

// Function to draw a circle on the canvas
function drawCircle(color) {
    // Clear the previous drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Begin drawing the circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

// Event listener for the color picker
document.getElementById('colorPicker').addEventListener('input', function(event) {
    circleColor = event.target.value;
    drawCircle(circleColor); // Redraw the circle with the new color
});

// Draw the initial circle
drawCircle(circleColor);
