const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    handleAccordionClick(item);
  });

  item.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleAccordionClick(item);
    }
  });
});

function handleAccordionClick(accordionItem) {
  accordionItem.classList.toggle("open");
}
