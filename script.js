document.getElementById('subscription-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailInput.classList.add('error');
    errorMessage.style.display = 'inline';
    return;
  }

  document.getElementById('submitted-email').textContent = email;
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('success-message').style.display = 'block';
});

document.getElementById('dismiss-btn').addEventListener('click', function() {
  document.getElementById('signup-form').style.display = 'flex';
  document.getElementById('success-message').style.display = 'none';
  document.getElementById('email').classList.remove('error');
  document.getElementById('error-message').style.display = 'none';
  document.getElementById('email').value = '';
});

document.getElementById('email').addEventListener('input', function() {
  if (this.classList.contains('error')) {
    this.classList.remove('error');
    document.getElementById('error-message').style.display = 'none';
  }
}); 