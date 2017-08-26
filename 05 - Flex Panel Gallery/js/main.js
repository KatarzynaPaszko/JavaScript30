let panels = document.querySelectorAll(".panel");

function addOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach(elem => elem.addEventListener("click", addOpen));
panels.forEach(elem => elem.addEventListener("transitionend", toggleActive))
