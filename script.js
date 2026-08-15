const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
}));

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".dot")];
let current = 0;
let timer;

function showSlide(index) {
  current = index;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}
function startSlider() {
  clearInterval(timer);
  timer = setInterval(() => showSlide((current + 1) % slides.length), 4300);
}
dots.forEach((dot, i) => dot.addEventListener("click", () => {
  showSlide(i);
  startSlider();
}));
startSlider();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const modal = document.querySelector(".image-modal");
const modalImg = modal.querySelector("img");
const modalTitle = modal.querySelector("p");
const closeBtn = modal.querySelector(".modal-close");

document.querySelectorAll("[data-image]").forEach(card => {
  const button = card.querySelector("button");
  button?.addEventListener("click", () => {
    modalImg.src = card.dataset.image;
    modalImg.alt = card.dataset.title;
    modalTitle.textContent = card.dataset.title;
    modal.showModal();
  });
});
closeBtn.addEventListener("click", () => modal.close());
modal.addEventListener("click", e => {
  if (e.target === modal) modal.close();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.open) modal.close();
});

document.getElementById("year").textContent = new Date().getFullYear();

const coffeeSlides=[...document.querySelectorAll('.coffee-slide')];
let coffeeIndex=0;
if(coffeeSlides.length){
 setInterval(()=>{
  coffeeSlides[coffeeIndex].classList.remove('active');
  coffeeIndex=(coffeeIndex+1)%coffeeSlides.length;
  coffeeSlides[coffeeIndex].classList.add('active');
 },3000);
}

const adeSlides=[...document.querySelectorAll('.ade-slide')];
let adeIndex=0;
if(adeSlides.length){
 setInterval(()=>{
  adeSlides[adeIndex].classList.remove('active');
  adeIndex=(adeIndex+1)%adeSlides.length;
  adeSlides[adeIndex].classList.add('active');
 },2800);
}
