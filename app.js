document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // When the app comes back from the background, prompt for the password again
        promptPasswordAgain();
    }
});

async function promptPasswordAgain() {
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    passwordInput.value = ''; // Clear the password input
    errorMessage.textContent = ''; // Clear the error message

    // Check clipboard for a password
    const clipboardText = await readClipboard();
    if (clipboardText === 'aaaa') { // Replace 'aaaa' with your desired password
        openGallery(); // Automatically open the gallery if the password matches
        return;
    }

    // Show the password screen and hide the gallery
    document.getElementById('password-screen').style.display = 'flex';
    document.getElementById('gallery').style.display = 'none';
}

async function readClipboard() {
    try {
        if (navigator.clipboard && navigator.clipboard.readText) {
            const text = await navigator.clipboard.readText(); // Read text from the clipboard
            return text.trim(); // Return trimmed clipboard text
        }
    } catch (err) {
        console.error('Failed to read clipboard:', err);
    }
    return null; // Return null if clipboard reading fails
}

function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password === 'aaaa') { // Replace 'aaaa' with your desired password
        openGallery(); // Open the gallery if the password is correct
    } else if (password !== '') {
        // Show an error message if the password is incorrect
        errorMessage.textContent = 'Incorrect ID. Please try again.';
        errorMessage.style.color = 'red';
    } else {
        // Clear the error message if no password is entered
        errorMessage.textContent = '';
    }
}

function openGallery() {
    // Hide the password screen and show the gallery
    document.getElementById('password-screen').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
}
