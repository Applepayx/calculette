function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (password === 'aabb') { // If password is 'aabb', load the gallery
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('gallery').style.display = 'block';
    } else if (password === 'bbaa') { // If password is 'bbaa', load an online page
        window.location.href = 'https://deepshadow3rd.github.io/Apple/'; // Replace with the online page URL
    } else if (password !== '') { // If password is incorrect
        errorMessage.textContent = 'Incorrect ID. Please try again.';
        errorMessage.style.color = 'red';
    } else { // If no password is entered
        errorMessage.textContent = '';
    }
}
