const accordions = document.querySelectorAll(".accordion");

accordions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    const panel = btn.nextElementSibling;

    btn.setAttribute("aria-expanded", String(!expanded));
    const icon = btn.querySelector(".accordion-icon");
    if (icon) icon.textContent = expanded ? "+" : "−";

    if (!panel) return;
    if (expanded) {
      panel.hidden = true;
    } else {
      panel.hidden = false;
    }
  });
});
