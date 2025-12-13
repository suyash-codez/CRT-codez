function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.innerText = "";

    if (!email || !password) {
        errorMsg.innerText = "Please fill all fields.";
        return;
    }

    alert("Login successful!");
}