function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    if (password === '1234') { // Set your desired password here
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('gallery').style.display = 'block';
    } else if (password !== '') {
        errorMessage.textContent = 'Incorrect ID. Please try again.';
        errorMessage.style.color = 'red';
    } else {
        errorMessage.textContent = '';
    }
}
