function goToApply() {
  window.location.href = "registration.html";
}

function goHome() {
  window.location.href = "index.html";
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name.length < 3) {
    alert("Name too short");
    return false;
  }

  if (!email.includes("@")) {
    alert("Invalid email");
    return false;
  }

  window.location.href = "thankyou.html";
  return false;
}