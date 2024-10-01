
# Canvas Circle Drawing Example

## Overview

This project demonstrates how to use the **HTML5 Canvas** element and JavaScript to draw and dynamically update a shape on the canvas. In this case, we are drawing a circle and allowing the user to change its color using a color picker.

## Project Structure

- **index.html**: The main structure of the web page, containing the canvas element and a color picker for user interaction.
- **style.css**: This file provides styling for the page, ensuring that the canvas is centered, and the layout looks clean.
- **script.js**: Contains the JavaScript logic for handling the canvas drawing functionality and color-changing feature.

---

## How It Works

### 1. **Canvas Setup**

The **Canvas** is an HTML element used to draw graphics via JavaScript. It provides a drawing surface that can be manipulated through a script to render shapes, images, or text.

In the `index.html` file, we set up the canvas with specific dimensions. Here’s how it's done:

```html
<canvas id="myCanvas" width="400" height="400"></canvas>
```

We also include a color picker (`<input type="color">`) that allows the user to select different colors to apply to the circle.

### 2. **JavaScript (script.js)**

In the `script.js` file, the following functionality is implemented:

- **Canvas Context**: We first get the 2D rendering context using the `getContext('2d')` method. This context object allows us to draw on the canvas.
- **Circle Drawing**: The `drawCircle()` function is used to draw a circle on the canvas. The `arc()` method is called on the context object to create the circle, and the `fill()` method fills it with the selected color.
- **Color Change**: The user can pick a color from the color picker. When the color is changed, an event listener triggers the `drawCircle()` function to redraw the circle with the new color.

### 3. **CSS (style.css)**

In the `style.css` file, the canvas is styled to be centered on the page, and other elements such as the color picker are aligned for a clean layout.

```css
.canvas-container {
    text-align: center;
    padding-top: 50px;
}

canvas {
    border: 2px solid #333;
}
```

---

## Instructions to Run

1. Download or clone this repository.
2. Open the `index.html` file in your browser.
3. Use the color picker to select a color, and the circle on the canvas will update dynamically with the chosen color.

---

## Next Steps

Here are some ideas for extending this project:
- Allow the user to resize the circle using a slider input.
- Add multiple shapes (rectangles, triangles, etc.) and allow the user to toggle between them.
- Implement animation where the circle moves around the canvas.
