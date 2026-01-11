function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Optional: simple contact form alert
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});
