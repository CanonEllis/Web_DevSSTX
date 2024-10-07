
# **Guide for OpenF1 API: Using JavaScript, HTML, and CSS with New Endpoint**

## **Table of Contents:**
1. [Overview of OpenF1 API](#overview)
2. [Setting Up the Project](#setting-up-the-project)
3. [HTML Structure](#html-structure)
4. [CSS Styling](#css-styling)
5. [JavaScript: Fetching Driver Data from New API](#javascript-fetching-driver-data-from-new-api)
6. [Displaying Driver Data](#displaying-driver-data)
7. [Conclusion](#conclusion)

---

## **1. Overview of OpenF1 API**

The OpenF1 API provides access to various Formula 1 data, including drivers, constructors, and races. We will use the latest API endpoint: `https://api.openf1.org/v1/drivers` to fetch F1 driver data and display it on a webpage.

### **API Endpoint for Drivers:**
```
https://api.openf1.org/v1/drivers
```

- **Query Parameters** (optional):
  - **year**: Fetch drivers from a specific year (e.g., `?year=2023`).
  - **constructor**: Filter by constructor (e.g., `?constructor=Mercedes`).
  - **nationality**: Filter by driver nationality (e.g., `?nationality=British`).

## **2. Setting Up the Project**

You will need the following project files:
- **index.html**: HTML file for the webpage structure.
- **style.css**: CSS file for styling the webpage.
- **script.js**: JavaScript file to handle fetching and displaying data.

## **3. HTML Structure**

In the HTML file, we’ll create a simple structure to display driver data, including a section to load and show driver information.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>F1 Drivers</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Formula 1 Drivers</h1>
  </header>

  <section class="driver-container" id="driverContainer">
    <p>Loading driver data...</p>
  </section>

  <script src="script.js"></script>
</body>
</html>
```

## **4. CSS Styling**

The CSS file adds styles to make the webpage visually appealing. You can style the driver information in cards for a better look.

```css
/* General Styling */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 0;
}

header {
  background-color: #20232a;
  color: #61dafb;
  text-align: center;
  padding: 20px 0;
}

h1 {
  margin: 0;
}

/* Driver Cards */
.driver-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.driver-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px;
  padding: 20px;
  width: 300px;
  text-align: center;
}

.driver-card h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.driver-card p {
  margin: 5px 0;
  color: #555;
}
```

## **5. JavaScript: Fetching Driver Data from New API**

Now, we’ll update the JavaScript code to fetch driver data from the new API endpoint `https://api.openf1.org/v1/drivers`.

```javascript
// JavaScript code for fetching and displaying drivers
const driverContainer = document.getElementById('driverContainer');

// API URL to fetch drivers from the 2023 season
const apiUrl = 'https://api.openf1.org/v1/drivers?year=2023';

// Function to fetch drivers
function fetchDrivers() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(drivers => {
      displayDrivers(drivers);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      driverContainer.innerHTML = '<p>Failed to load driver data.</p>';
    });
}

// Function to display drivers in the HTML
function displayDrivers(drivers) {
  driverContainer.innerHTML = ''; // Clear loading message
  drivers.forEach(driver => {
    // Create a div for each driver card
    const driverCard = document.createElement('div');
    driverCard.classList.add('driver-card');

    // Populate the card with driver details
    driverCard.innerHTML = `
      <h2>${driver.name}</h2>
      <p><strong>Constructor:</strong> ${driver.constructor}</p>
      <p><strong>Nationality:</strong> ${driver.nationality}</p>
      <p><strong>Year:</strong> ${driver.year}</p>
    `;

    // Append the card to the driver container
    driverContainer.appendChild(driverCard);
  });
}

// Call the fetchDrivers function when the page loads
fetchDrivers();
```

## **6. Displaying Driver Data**

When the JavaScript runs, it fetches data from the new API and creates driver cards dynamically in the `.driver-container`. Each driver’s name, constructor, nationality, and year will be displayed in their own styled card.

## **7. Conclusion**

By integrating the updated OpenF1 API with **JavaScript**, **HTML**, and **CSS**, you’ve built a fully functional webpage that fetches and displays F1 driver data. You can further customize the design and extend the functionality to include more API data (e.g., filtering by constructor or nationality).

---

