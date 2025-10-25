// === CHECK AFTER REFRESH ===
let lockUntil = parseInt(localStorage.getItem("lockUntil") || 0);
const now = Date.now();
if (now < lockUntil) {
  // Lock is still active
  lockForm();
  // Calculate remaining lock time and automatically unlock
   lockUntil = lockUntil - now;
  setTimeout(() => {
    Unlockform();
  }, lockUntil);
}
function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const user = { username: "kali", password: "kali" };

  // make attempts and lockUntil get the values from  the browser storge
  let attempts = parseInt(localStorage.getItem("attempts")) || 0;
  let lockUntil = parseInt(localStorage.getItem("lockUntil") || 0);
  if (username === user.username && password === user.password) {
    localStorage.removeItem("attempts");
    localStorage.removeItem("lockUntil");
    window.location.href = "student.html";
    return;
  } else {
    if (attempts <= 1) {
      if (attempts === 1) {
        alert(" this is ur last chance!!!");
        attempts++;
        localStorage.setItem("attempts", attempts);
      } else {
        alert("you have " + (2 - attempts) + " left");
        attempts++;
        localStorage.setItem("attempts", attempts);
      }
    } else if (attempts === 2) {
      alert("Too many failed attempts. Locking for 5 seconds.");
      const lockTime = Date.now() + 5000;
      localStorage.setItem("lockUntil", lockTime);
      lockForm();
      setTimeout(() => {
        Unlockform();
      }, 5000);
    }
  }
}
function lockForm() {
  document
    .querySelectorAll(".login-box input")
    .forEach((el) => (el.disabled = true));
  document.querySelector(".login-box button[type='submit']").disabled = true;
}
function Unlockform() {
  document
    .querySelectorAll(".login-box input")
    .forEach((el) => (el.disabled = false));
  document.querySelector(".login-box button[type='submit']").disabled = false;
  localStorage.removeItem("attempts");
  localStorage.removeItem("lockUntil");
}
