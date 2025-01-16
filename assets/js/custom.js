const currentYearTag = document?.querySelector("#currentYearTag");
const megaMenuButton = document?.querySelector(".mega-menu-button");
const navLinks = document?.querySelector(".nav-links");
const currentYear = new Date().getFullYear();
currentYearTag.innerText = currentYear;
megaMenuButton?.addEventListener("click", function (e) {
  e.target.classList.toggle("active");
  if (e.target.classList.contains("active")) { 
    navLinks.classList.remove("hide");
    navLinks.classList.add("show");
  } else {
    navLinks.classList.remove("show");
    navLinks.classList.add("hide");
  }
})