const menu = document.querySelector(".menu-btn");
const body = document.body;

menu?.addEventListener("click", () => {
  body.classList.toggle("menu-open");
  menu.textContent = body.classList.contains("menu-open") ? "CLOSE" : "MENU";
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener("click", () => {
    body.classList.remove("menu-open");
    if (menu) menu.textContent = "MENU";
  });
});

const codeStatus = document.querySelector(".code-status");
const statuses = ["SYSTEM ONLINE", "BUILD READY", "DEPLOYED", "SYSTEM ONLINE"];
let i = 0;
setInterval(() => {
  if (!codeStatus) return;
  i = (i + 1) % statuses.length;
  codeStatus.firstChild.textContent = `● ${statuses[i]} `;
}, 2600);

document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 3;
    const y = ((e.clientY - r.top) / r.height - .5) * -3;
    card.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-5px)`;
  });
  card.addEventListener("mouseleave", () => card.style.transform = "");
});
