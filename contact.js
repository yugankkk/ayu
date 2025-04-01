// Smooth Page Navigation
function navigateTo(pageUrl) {
    document.body.style.opacity = '0';
    setTimeout(() => {
      window.location.href = pageUrl;
    }, 300); // 300ms for smooth transition
  }
  
  // Form Validation
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    // Simple Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Success Message (You can replace this with API call)
    alert('Your message has been sent successfully!');
    document.getElementById('contactForm').reset();
  });
  