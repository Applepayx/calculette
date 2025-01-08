document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // When the app comes back from the background, prompt for the password again
        promptPasswordAgain();
    }
});

function promptPasswordAgain() {
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    passwordInput.value = ''; // Clear the password input
    errorMessage.textContent = ''; // Clear the error message

    // Show the password screen and hide the gallery
    document.getElementById('password-screen').style.display = 'flex';
    document.getElementById('gallery').style.display = 'none';

    // Small delay to ensure the element is visible before focusing
    setTimeout(() => {
        passwordInput.focus();
    }, 300);
}

function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password === '"109') { // Replace 'aaaa' with your desired password
        // Hide the password screen and show the gallery
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('gallery').style.display = 'block';
    } else if (password !== '') {
        // Show an error message if the password is incorrect
        errorMessage.textContent = 'Incorrect ID. Please try again.';
        errorMessage.style.color = 'red';
    } else {
        // Clear the error message if no password is entered
        errorMessage.textContent = '';
    }
}
