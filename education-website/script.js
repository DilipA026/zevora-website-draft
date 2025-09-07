// Dark Mode Toggle with persistence
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

// On page load, check if dark mode was enabled before
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
}

// Blog "Read More" Toggle
const readMoreButtons = document.querySelectorAll('.readmore');
readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const blogCard = button.closest('.blog-card');
    const hiddenText = blogCard.querySelector('.hidden');

    if (hiddenText.style.display === 'block') {
      hiddenText.style.display = 'none';
      button.textContent = 'Read More';
    } else {
      hiddenText.style.display = 'block';
      button.textContent = 'Read Less';
    }
  });
});

// Form validation and alert messages for all forms
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const mobileInput = form.querySelector('input[type="tel"]');

    // Email validation
    if (emailInput && !emailInput.checkValidity()) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return;
    }

    // Mobile validation (10-digit number)
    if (mobileInput) {
      const mobileValue = mobileInput.value.trim();
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(mobileValue)) {
        alert('Please enter a valid 10-digit mobile number.');
        mobileInput.focus();
        return;
      }
    }

    // Customize alert message by form id
    if (form.id === 'contactForm') {
      alert('Your message has been sent successfully!');
    } else if (form.id === 'enrollForm') {
      alert('Enrollment form submitted successfully!');
    } else {
      alert('Form submitted successfully!');
    }

    form.reset();
  });
});
