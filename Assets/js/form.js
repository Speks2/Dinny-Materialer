const loginBtn = document.getElementById('loginBtn');
const loginContainer = document.getElementById('loginContainer');

loginBtn.addEventListener('click', function() {
  loginContainer.classList.toggle('show-login');
});
