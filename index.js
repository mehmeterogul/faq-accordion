const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    handleAccordionClick(item);
  });
});

function handleAccordionClick(accordionItem) {
  accordionItem.classList.toggle("open");
}
