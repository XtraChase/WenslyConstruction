// contact.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Validate form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formStatus = document.getElementById("form-status");

    if (name === "" || email === "" || message === "") {
        formStatus.innerHTML = "Please fill in all fields.";
        formStatus.style.color = "red";
        return;
    }

    // Send form data via EmailJS
    emailjs.send("service_g4r46ve", "template_g3mgbjd", {
        from_name: name,
        from_email: email,
        message: message,
    }, "4a8vLKaELp9KinJ20")
    .then(function(response) {
        formStatus.innerHTML = "Your message has been sent!";
        formStatus.style.color = "green";
        document.getElementById("contactForm").reset(); // Clear the form
    }, function(error) {
        formStatus.innerHTML = "Failed to send your message. Please try again.";
        formStatus.style.color = "red";
    });
});
