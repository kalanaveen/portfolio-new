// ================== 
// javascript tab functionality 
// ================== 
const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const img_overlay = document.querySelectorAll('.img-overlay');
const heroSection = document.querySelector(".section-hero");

p_btns.addEventListener('click', (e) => {
  const p_btn_click = e.target;

  // transform active button
  p_btn.forEach(curElem => curElem.classList.remove('p-btn-active'));
  p_btn_click.classList.add('p-btn-active');

  // to find number in data attribute 
  const btn_num = p_btn_click.dataset.btnNum;
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  // show button click value
  img_overlay.forEach(curElem => curElem.classList.add('p-image-not-active'));
  img_active.forEach(curElem => curElem.classList.remove('p-image-not-active'));
})
// initialize swipper 
new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const myJsmedia = (widthSize)=>{
  if(widthSize.matches){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
}
const widthSize = window.matchMedia("(max-width:780px)");
// call listener function at run time
myJsmedia(widthSize);
// attach listener function on state changes 
widthSize.addEventListener("change",myJsmedia)
// scrool to top button

const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);
const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" })
};

scroollElement.addEventListener("click", scrollTop);

// smooth scrool effect
const portfolioSec = document.querySelector(".section-portfolio");
const contactSec = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", () => {
  portfolioSec.scrollIntoView({ behavior: "smooth" })
});

document.querySelector(".hireme-btn").addEventListener("click", () => {
  contactSec.scrollIntoView({ behavior: "smooth" })
});

// creating animated animation for work section 
const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver((entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return
      // animate number counters
const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    const initialNumber = parseInt(curElem.innerText);
    const incrementNumber = Math.trunc(targetNumber / speed);
    if (initialNumber < targetNumber) {
      curElem.innerText = `${initialNumber + incrementNumber} +`;
      setTimeout(updateNumber, 10);
    }
  };
  updateNumber();
});
  observer.unobserve(workSection);
}, { root: null, threshold: 0 });



// responsive navbar
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

// creating sticky responsive navbar component
const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];
  !ent.isIntersecting
    ? document.body.classList.add("sticky")
    : document.body.classList.remove("sticky");
}, {
  root: null,
  threshold: 0,
});
observer.observe(heroSection);
workObserver.observe(workSection);
