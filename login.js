
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username, password);
    if (username === 'admin' && password === 'admin') {
        alert('Login successful');
        window.location.href = '3.html';
    } else {
        alert('Login failed');
    }
}
