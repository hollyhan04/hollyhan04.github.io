const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = link.closest("details");
    if (menu) menu.open = false;
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".desktop-nav a, .mobile-nav a")];

function updateNav() {
  const line = window.scrollY + 110;
  let active = sections[0]?.id || "";
  sections.forEach((section) => {
    if (section.offsetTop <= line) active = section.id;
  });
  const atBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (atBottom) active = sections[sections.length - 1].id;

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${active}`) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

updateNav();
window.addEventListener("scroll", updateNav, { passive: true });
window.addEventListener("resize", updateNav);
