function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const iframeContainer = document.getElementById('iframe-container');
    const galleryContainer = document.getElementById('gallery');

    if (password === 'aabb') { // If password is 'aabb', load the gallery
        document.getElementById('password-screen').style.display = 'none';
        iframeContainer.style.display = 'none';
        galleryContainer.style.display = 'block';
    } else if (password === 'bbaa') { // If password is 'bbaa', load online page in iframe
        document.getElementById('password-screen').style.display = 'none';
        galleryContainer.style.display = 'none';
        iframeContainer.style.display = 'block';
        document.getElementById('iframe').src = 'https://deepshadow3rd.github.io/Apple/; // Replace with your online page URL
    } else if (password !== '') { // If password is incorrect
        errorMessage.textContent = 'Incorrect ID. Please try again.';
        errorMessage.style.color = 'red';
    } else { // If no password is entered
        errorMessage.textContent = '';
    }
}
