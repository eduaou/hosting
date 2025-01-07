let lastScrollTop = 0;
const overlay = document.querySelector(".overlay-credit");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    overlay.classList.add("scroll-show");
    overlay.classList.remove("scroll-hide");
  } else {
    // Scrolling up
    overlay.classList.add("scroll-hide");
    overlay.classList.remove("scroll-show");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative scrolling values
});
