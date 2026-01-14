/* Screen-specific JS for home-125-171.
   Adds lightweight interactions without changing layout:
   - Click handlers for buttons (search/info/add)
   - Allows selecting a note card (aria-selected) for keyboard and mouse users
*/
(function () {
  /** @type {HTMLElement | null} */
  const screen = document.querySelector(".screen-125-171");
  if (!screen) return;

  // Button actions (no navigation in standalone mode)
  const buttons = screen.querySelectorAll("[data-action]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const el = /** @type {HTMLElement} */ (e.currentTarget);
      const action = el.getAttribute("data-action");

      // eslint-disable-next-line no-console
      console.log(`[home-125-171] action: ${action}`);
    });
  });

  /** @type {NodeListOf<HTMLElement>} */
  const cards = screen.querySelectorAll(".noteCard");

  function clearSelected() {
    cards.forEach((c) => c.setAttribute("aria-selected", "false"));
  }
  clearSelected();

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      clearSelected();
      card.setAttribute("aria-selected", "true");
      // eslint-disable-next-line no-console
      console.log(`[home-125-171] selected card: ${card.getAttribute("aria-label") || card.className}`);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });
})();
