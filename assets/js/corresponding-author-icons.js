const moveCorrespondingAuthorIcons = () => {
  document.querySelectorAll(".publications .author").forEach((authorBlock) => {
    const selfAuthor = authorBlock.querySelector("em");
    const annotationIcon = authorBlock.querySelector(":scope > .fa-circle-info[data-content]");

    if (selfAuthor && annotationIcon) {
      selfAuthor.insertAdjacentElement("afterend", annotationIcon);
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", moveCorrespondingAuthorIcons);
} else {
  moveCorrespondingAuthorIcons();
}
