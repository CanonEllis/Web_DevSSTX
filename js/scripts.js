// Timer functionality
// This function starts a timer that increments every second. The result is displayed in a paragraph with the id "timerDisplay".
// The interval is set using the setInterval() method, and is cleared when stopTimer() is called.
let timer;
let seconds = 0;

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            document.getElementById("timerDisplay").textContent = `Time: ${seconds} seconds`;
        }, 1000);
    }
}

// This function stops the timer by clearing the interval set in startTimer().
function stopTimer() {
    clearInterval(timer);
    timer = null;
}

// File upload functionality
// This function handles the event when a user selects a file in the file input element.
// It displays the selected file's name and size.
function handleFileUpload() {
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.getElementById('fileInfo');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        fileInfo.textContent = `File name: ${file.name}, File size: ${file.size} bytes`;
    } else {
        fileInfo.textContent = 'No file selected';
    }
}

// Background color change functionality
// This function randomly changes the background color of the body when a button is clicked.
// It uses an array of predefined colors and selects one randomly.
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Modal functionality
// This function displays a modal (pop-up window) when called.
// The modal is made visible by setting its display property to "block".
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// This function closes the modal by setting its display property to "none".
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Close modal when clicking outside of it
// This function ensures that clicking outside of the modal also closes it.
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Fetch API functionality
// This function fetches data from the GitHub API, specifically a list of repositories for a given user.
// It displays the list of repository names in an unordered list.
function fetchGitHubRepos() {
    const username = 'octocat'; // Example GitHub user
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            const repoList = document.getElementById("repoList");
            repoList.innerHTML = ''; // Clear the list before adding new items
            data.forEach(repo => {
                const li = document.createElement("li");
                li.textContent = repo.name;
                repoList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching repos:', error));
}

// DOM Manipulation functionality
// This function adds a new to-do item to the list. The input text is taken from the input field with the id "todoInput".
// A new list item <li> is created, and the input text is added to this new element. It also appends buttons to mark the task as complete or remove it.
function addTodo() {
    const todoInput = document.getElementById('todoInput').value;
    if (todoInput.trim() === "") {
        alert("Please enter a valid task!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = todoInput;

    // Add a "Complete" button to the to-do item
    const completeButton = document.createElement('button');
    completeButton.textContent = "Complete";
    completeButton.onclick = function() {
        li.style.textDecoration = "line-through";
    };
    li.appendChild(completeButton);

    // Add a "Remove" button to the to-do item
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        li.remove();
    };
    li.appendChild(removeButton);

    document.getElementById('todoList').appendChild(li);
    document.getElementById('todoInput').value = "";  // Clear input field after adding the task
}

// The to-do list functionality demonstrates how to dynamically create, update, and remove elements from the DOM.
// It utilizes the document.createElement() function to create new list items and buttons.
// The onclick events allow interaction, letting the user complete or remove tasks.


// Local Storage functionality
// This function saves a string entered by the user to the browser's localStorage.
// The saved data persists even if the page is refreshed or closed.
function saveToLocalStorage() {
    const input = document.getElementById("localStorageInput").value;
    localStorage.setItem("savedData", input);
    displayLocalStorageData();
}

// This function displays the data saved in localStorage in a paragraph element.
function displayLocalStorageData() {
    const savedData = localStorage.getItem("savedData");
    document.getElementById("localStorageOutput").textContent = savedData ? `Saved Data: ${savedData}` : 'No saved data.';
}


// Drag and Drop functionality
// This function is triggered when the user starts dragging an item. It sets the dragged item's ID in the dataTransfer object.
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// This function allows the drop by preventing the default behavior (which is to not allow dropping).
function allowDrop(event) {
    event.preventDefault();
}

// This function is triggered when an item is dropped into the drop zone.
// It retrieves the dragged item's ID, appends the dragged element to the drop area, and optionally changes its styling.
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);

    // Optionally change the styling of the dragged element after it is dropped
    draggedElement.style.backgroundColor = "#DFF2BF";
    draggedElement.style.color = "#4F8A10";
    draggedElement.style.border = "1px solid #4F8A10";
}

// Key Presses functionality
// This function handles keypress events from an input field.
// It displays the last key that was pressed in a <span> element with the ID "lastKeyPressed".
function handleKeyPress(event) {
    const key = event.key;  // Get the key that was pressed
    document.getElementById("lastKeyPressed").textContent = key;  // Update the UI to display the key
}



// Display saved data when the page loads
window.onload = function() {
    displayLocalStorageData();
};
