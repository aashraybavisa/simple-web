function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const errorElement = document.getElementById("error");

  // Clear previous error messages
  errorElement.textContent = "";

  // Simple validation
  if (!name || !email || !message) {
    errorElement.textContent = "All fields are required.";
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorElement.textContent = "Please enter a valid email address.";
    return;
  }

  alert("Form submitted successfully!");
}
