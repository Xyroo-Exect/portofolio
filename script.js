const menu = document.querySelector(".menu-btn");
const body = document.body;
menu?.addEventListener("click", () => {
  body.classList.toggle("menu-open");
  menu.textContent = body.classList.contains("menu-open") ? "CLOSE" : "MENU";
});
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => {
  body.classList.remove("menu-open");
  if (menu) menu.textContent = "MENU";
}));
document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const rx = ((e.clientY-r.top)/r.height-.5)*-2;
    const ry = ((e.clientX-r.left)/r.width-.5)*2;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  });
  card.addEventListener("mouseleave", () => card.style.transform = "");
});
