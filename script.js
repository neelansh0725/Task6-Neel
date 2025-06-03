document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;

  if (name === "" || email === "" || message === "") {
    Swal.fire({
      icon: "error",
      title: "Missing Fields",
      text: "Please fill in all fields before submitting."
    });
    return;
  }

  if (!emailPattern.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Email",
      text: "Please enter a valid email address."
    });
    return;
  }

  // If all validations pass
  Swal.fire({
    icon: "success",
    title: "Message Sent!",
    text: "Thank you for contacting us.",
    timer: 2000,
    showConfirmButton: false
  });

  document.getElementById("contactForm").reset();
});

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;

  if (!name || !email || !message) {
    Swal.fire({
      icon: "error",
      title: "Missing Fields",
      text: "Please fill in all fields before submitting."
    });
    return;
  }

  if (!emailPattern.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Email",
      text: "Please enter a valid email address."
    });
    return;
  }

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  Swal.fire({
    icon: "success",
    title: "Message Sent!",
    text: "Thank you for contacting us 🎉",
    timer: 2000,
    showConfirmButton: false
  });

  document.getElementById("contactForm").reset();
});


