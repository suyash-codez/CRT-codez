function register() {
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.innerText = "";

    if (!fullname || !username || !email || !gender || !password || !repeatPassword) {
        errorMsg.innerText = "Please fill all fields.";
        return;
    }

    if (password !== repeatPassword) {
        errorMsg.innerText = "Passwords do not match.";
        return;
    }

    alert("Registration successful!");
}