
# Pokémon API Web App

---

## Overview

This project is a **Pokédex-style web app** that allows users to search for a Pokémon by name or ID and view basic information like its type, height, and weight. The app uses HTML, CSS, and JavaScript, and it fetches data from the **PokéAPI** to display Pokémon details dynamically.

This README will walk you through how the app works, with an emphasis on the **JavaScript** logic, especially how it interacts with the **PokéAPI**.

---

## Project Structure

1. **HTML (index.html)**: Sets up the structure of the webpage, including the input field for entering the Pokémon name or ID, and placeholders for displaying the Pokémon's details.
2. **CSS (style.css)**: Styles the page to resemble a Pokédex, using colors, fonts, and layouts reminiscent of the old Pokédex devices.
3. **JavaScript (script.js)**: Handles the interaction with the PokéAPI and the dynamic display of Pokémon data. The JavaScript file is where the core functionality happens, including fetching the data and updating the DOM.

---

## Detailed Explanation of Files

### 1. **index.html** - The HTML Structure

The **HTML** file provides the structure of the web page. It includes:
- A search input field (`<input>`) where users can enter the Pokémon name or ID.
- A button (`<button>`) to trigger the search.
- A section (`<div>`) to display the Pokémon's details, such as its name, image, type, height, and weight.

```html
<div class="pokedex-container">
    <div class="pokedex-header">
        <h1>Pokédex</h1>
    </div>
    <input type="text" id="pokemonInput" placeholder="Enter Pokémon name or ID">
    <button onclick="getPokemon()">Search</button>

    <div class="pokemon-container" id="pokemonContainer" style="display: none;">
        <h3 id="pokemonName"></h3>
        <img id="pokemonImage" src="" alt="Pokemon Image">
        <p><strong>Type:</strong> <span id="pokemonType"></span></p>
        <p><strong>Height:</strong> <span id="pokemonHeight"></span></p>
        <p><strong>Weight:</strong> <span id="pokemonWeight"></span></p>
    </div>

    <p class="error-message" id="errorMessage"></p>
</div>
```

---

### 2. **style.css** - Styling the App

The **CSS** styles the app to give it a retro Pokédex look. Some key styles include:
- **`.pokedex-container`**: The main container styled with a red background and rounded corners to look like a Pokédex.
- **Buttons and Inputs**: Styled to match the retro feel with large, bold text and bright colors.
- **Error Messages**: Styled to be bold and bright yellow to stand out.

```css
.pokedex-container {
    background-color: #dc0a2d;
    border: 5px solid #333;
    border-radius: 15px;
    width: 400px;
    padding: 20px;
    color: white;
    text-align: center;
}

button {
    padding: 10px 20px;
    background-color: #feca1b;
    color: black;
    border: none;
    border-radius: 5px;
}
```

---

### 3. **script.js** - Fetching and Displaying Data from the API

The **JavaScript** file is where the core functionality resides. Here's what happens in this file:

1. **API Request with `fetch()`**:
   - The app uses the **PokéAPI** to fetch data based on the user’s input.
   - The `getPokemon()` function triggers when the user clicks the search button. It takes the input, makes a request to the API, and processes the response.

```javascript
async function getPokemon() {
    const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
    const pokemonContainer = document.getElementById('pokemonContainer');
    const errorMessage = document.getElementById('errorMessage');

    pokemonContainer.style.display = 'none';
    errorMessage.textContent = '';

    if (!pokemonInput) {
        errorMessage.textContent = 'Please enter a Pokémon name or ID.';
        return;
    }

    try {
        const response = await fetch(`${apiUrl}${pokemonInput}`);
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
    }
}
```

- **`fetch()`**: The `fetch()` function sends a request to the PokéAPI using the Pokémon name or ID entered by the user. If the response is successful (`response.ok`), it processes the data. If not, it throws an error.

2. **Displaying the Pokémon Data**:
   - Once the data is fetched, the `displayPokemon()` function is called to update the DOM with the Pokémon’s name, image, type, height, and weight.

```javascript
function displayPokemon(data) {
    const pokemonName = document.getElementById('pokemonName');
    const pokemonImage = document.getElementById('pokemonImage');
    const pokemonType = document.getElementById('pokemonType');
    const pokemonHeight = document.getElementById('pokemonHeight');
    const pokemonWeight = document.getElementById('pokemonWeight');
    const pokemonContainer = document.getElementById('pokemonContainer');

    pokemonName.textContent = capitalizeFirstLetter(data.name);
    pokemonImage.src = data.sprites.front_default;
    pokemonType.textContent = data.types.map(type => capitalizeFirstLetter(type.type.name)).join(', ');
    pokemonHeight.textContent = `${data.height / 10} m`; 
    pokemonWeight.textContent = `${data.weight / 10} kg`;

    pokemonContainer.style.display = 'block';
}
```

- **Dynamically Updating the DOM**: The Pokémon’s data is inserted into the HTML elements dynamically using JavaScript. The Pokémon's height is converted from decimeters to meters, and its weight is converted from hectograms to kilograms.
- **Error Handling**: If the user enters an invalid name or ID, an error message is displayed.

3. **Helper Function**: 
   - A small utility function called `capitalizeFirstLetter()` is used to format the Pokémon name and type, ensuring the first letter is always capitalized.

```javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
```

---

## How the App Works (Step-by-Step)

1. The user enters a Pokémon name or ID into the search box.
2. When the "Search" button is clicked, the `getPokemon()` function is triggered.
3. The function fetches the data from the PokéAPI and processes the JSON response.
4. The fetched data is passed to the `displayPokemon()` function, which updates the HTML elements with the Pokémon's details.
5. If the Pokémon is not found, an error message is displayed.

---

## Next Steps

After understanding this basic setup, you can:
- Add more Pokémon information, such as abilities or stats.
- Implement a search history feature or favorite Pokémon list.
- Explore other APIs to build more dynamic and interesting projects.
