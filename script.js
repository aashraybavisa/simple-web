function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const errorElement = document.getElementById("error");

  // Clear previous error messages
  errorElement.textContent = "";

  // Simple validation
  if (!name?.value || !email?.value || !message?.value) {
    errorElement.textContent = "All fields are required.";
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email?.value)) {
    errorElement.textContent = "Please enter a valid email address.";
    return;
  }

  alert("Form submitted successfully!");

  // Clear form
  const form = document.getElementById('contactForm');
  form.reset();
}
