// Dark Mode Toggle
const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll Animation (fade-in sections)
const sections = document.querySelectorAll("section");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const cards = document.querySelectorAll('.cert-card');
const total = cards.length;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 20; // card width + margin
  track.style.transform = `translateX(${-index * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % total;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateCarousel();
});
