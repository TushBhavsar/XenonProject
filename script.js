

const loginForm = document.getElementById('loginForm');
const logoutForm = document.getElementById('logoutForm');
const loggedInUsername = document.getElementById('loggedInUsername');
const logoutButton = document.getElementById('logoutButton');


  
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  

  if (username === 'Tushar' && password === 'Tushar@123') {
  
    loggedInUsername.textContent = username;
    loginForm.style.display = 'none';
    logoutForm.style.display = 'block';
  } else {

    alert('Invalid username or password');
  }
});

logoutButton.addEventListener('click', () => {

  loggedInUsername.textContent = '';
  loginForm.style.display = 'block';
  logoutForm.style.display = 'none';
});