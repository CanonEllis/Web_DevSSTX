
# Spotify API Web App with JavaScript, HTML, and CSS

This guide explains how to create a web app that uses the Spotify API with JavaScript, HTML, and CSS.

---

## Table of Contents

1. [Requirements](#requirements)
2. [HTML Structure](#html-structure)
3. [CSS for Styling](#css-for-styling)
4. [JavaScript for Spotify API Calls](#javascript-for-spotify-api-calls)
5. [Running the Application](#running-the-application)

---

## 1. Requirements

To use the Spotify Web API, you’ll need to set up a **Spotify Developer Account** and create a **Spotify App**.

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
2. Log in with your Spotify account.
3. Create a new application, which will give you a **Client ID** and **Client Secret**.

To obtain an **Access Token**:
- The easiest approach is to use Spotify’s **Authorization Code Flow** (for server-based apps) or **Implicit Grant Flow** (for client-side apps).
- In this example, we’ll assume you’ll handle token management on the client side and use the **Authorization Code Flow**.

---

## 2. HTML Structure

The following HTML creates an interface with an input for searching, a button to trigger the search, and a section to display the results.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify Search Web App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Spotify Search</h1>
        <input type="text" id="searchInput" placeholder="Search for songs, artists, or albums...">
        <button id="searchButton">Search</button>

        <div id="results"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

---

## 3. CSS for Styling

The CSS file (`styles.css`) provides some basic styling.

```css
* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #121212;
    color: #ffffff;
}

.container {
    width: 300px;
    padding: 20px;
    background-color: #282828;
    border-radius: 8px;
    text-align: center;
}

h1 {
    font-size: 1.5em;
    margin-bottom: 20px;
}

input, button {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
}

button {
    background-color: #1DB954;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #1aa34a;
}

#results {
    margin-top: 20px;
    text-align: left;
}
```

---

## 4. JavaScript for Spotify API Calls

The JavaScript file (`script.js`) performs the following steps:
1. Requests an access token.
2. Searches Spotify using the search query from the user.

Replace `"YOUR_ACCESS_TOKEN"` with a valid Spotify API access token.

```javascript
document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("searchInput").value;

    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    const accessToken = "YOUR_ACCESS_TOKEN";
    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track,artist,album&limit=10`;

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        displayResults(data);
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to fetch data. Check the console for more details.");
    });
});

function displayResults(data) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    // Display tracks
    if (data.tracks && data.tracks.items.length > 0) {
        data.tracks.items.forEach(track => {
            const trackDiv = document.createElement("div");
            trackDiv.innerHTML = `<p><strong>Track:</strong> ${track.name} - ${track.artists[0].name}</p>`;
            resultsDiv.appendChild(trackDiv);
        });
    } else {
        resultsDiv.innerHTML = "<p>No results found.</p>";
    }
}
```

### Explanation

- **Input Handling**: The user inputs a search term, and when the button is clicked, a request is made to Spotify’s API.
- **API Call**: The application sends a `GET` request to Spotify’s `search` endpoint, retrieving tracks, albums, or artists that match the search query.
- **Response Handling**: The data is parsed, and relevant information (e.g., track name and artist) is displayed in the `results` div.

---

## 5. Running the Application

1. **Save the Files**: Ensure `index.html`, `styles.css`, and `script.js` are in the same directory.
2. **Open `index.html` in a Browser**: Double-click `index.html` or open it with a local web server.
3. **Search on Spotify**: Enter a query, and click "Search" to see results.

---

This guide should help you set up a basic Spotify search app using JavaScript, HTML, and CSS.
