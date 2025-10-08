// ===== SMOOTH PAGE FADE-IN =====
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.2s ease";
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);
});

// ===== SCROLL REVEAL EFFECT =====
const revealElements = document.querySelectorAll(".product-card, .service-card, .section, .about-section");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== BUTTON RIPPLE EFFECT =====
document.querySelectorAll("button, .buy-btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    this.appendChild(ripple);

    let x = e.clientX - this.getBoundingClientRect().left;
    let y = e.clientY - this.getBoundingClientRect().top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
