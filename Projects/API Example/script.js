// PokéAPI base URL
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Function to fetch and display Pokémon data
async function getPokemon() {
    const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase(); // Get input value
    const pokemonContainer = document.getElementById('pokemonContainer');
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous data and errors
    pokemonContainer.style.display = 'none';
    errorMessage.textContent = '';

    if (!pokemonInput) {
        errorMessage.textContent = 'Please enter a Pokémon name or ID.';
        return;
    }

    try {
        // Fetch Pokémon data from PokéAPI
        const response = await fetch(`${apiUrl}${pokemonInput}`);
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }

        const data = await response.json();
        displayPokemon(data); // Call function to display Pokémon details
    } catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
    }
}

// Function to display Pokémon data
function displayPokemon(data) {
    const pokemonName = document.getElementById('pokemonName');
    const pokemonImage = document.getElementById('pokemonImage');
    const pokemonType = document.getElementById('pokemonType');
    const pokemonHeight = document.getElementById('pokemonHeight');
    const pokemonWeight = document.getElementById('pokemonWeight');
    const pokemonContainer = document.getElementById('pokemonContainer');

    // Set the Pokémon name, image, type, height, and weight
    pokemonName.textContent = capitalizeFirstLetter(data.name);
    pokemonImage.src = data.sprites.front_default;
    pokemonType.textContent = data.types.map(type => capitalizeFirstLetter(type.type.name)).join(', ');
    pokemonHeight.textContent = `${data.height / 10} m`; // Convert to meters
    pokemonWeight.textContent = `${data.weight / 10} kg`; // Convert to kilograms

    // Display the Pokémon container
    pokemonContainer.style.display = 'block';
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
