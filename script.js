document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page refresh

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value;

    // Execution check: Basic validation
    if (email === "" || password === "") {
        alert("Please enter your credentials.");
        return;
    }

    // Mocking an API call
    console.log("Attempting login...");
    console.log("Email:", email);
    console.log("Password:", password);
    
    // You could add a 'loading' state here to show interviewers your execution skills
    const loginBtn = document.querySelector('.btn-login');
    loginBtn.innerText = "Logging in...";
    loginBtn.disabled = true;

    setTimeout(() => {
        alert("Login functionality is not connected to a server yet!");
        loginBtn.innerText = "Log in";
        loginBtn.disabled = false;
    }, 1500);
});