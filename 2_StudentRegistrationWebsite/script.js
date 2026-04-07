// TOGGLE MOBILE MENU
function toggleMenu() {
  const menu = document.querySelector(".mobile_menu");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// BUTTON NAVIGATION
function goToApply() {
  window.location.href = "registration.html";
}