function passwordInput() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Username: " + username);
    console.log("Password: " + password);

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        alert("Password must be at least 8 characters long and contain both uppercase and lowercase characters.");
        return;
    }

    alert("Welcome " + username + "!");
}
