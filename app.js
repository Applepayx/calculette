function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (password === 'aabb') { // If password is 'aabb', load the gallery
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('gallery').style.display = 'block';
    } else if (password === 'bbaa') { // If password is 'bbaa', load a different HTML page
        window.location.href = 'd2386e91ff2e2d5b2b4f4d5d0c8a9e0f.html'; // Replace 'differentPage.html' with your desired page
    } else if (password !== '') { // If password is incorrect
        errorMessage.textContent = 'Incorrect ID. Please try again.';
        errorMessage.style.color = 'red';
    } else { // If no password is entered
        errorMessage.textContent = '';
    }
}
