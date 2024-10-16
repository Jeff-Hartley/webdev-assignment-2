// variables using the elements of the HTML
const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('displayName');

//event listeners for the buttons so they call the functions needed
saveBtn.addEventListener('click', saveData);
clearBtn.addEventListener('click', clearData);

// code for the function to display the saved name
function displaySavedUsername() {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        displayName.textContent = `Name saved on file: ${savedName}`;
    }
}

// function to save the data from the username input
function saveData() {
    const uname = usernameInput.value;
    localStorage.setItem('username', uname);
    displaySavedUsername();
    usernameInput.value = '';
}

// function to clear the data in the username input and display name field
function clearData() {
    localStorage.clear();
    displayName.textContent = '';
    usernameInput.value = '';
}

// Displays name when window loads up from localStorage
window.onload = displaySavedUsername;