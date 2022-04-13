// ================== 
// javascript tab functionality 
// ================== 
const p_btns = document.querySelector('.p-btns');
const p_btn  = document.querySelectorAll('.p-btn');
const img_overlay = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click',(e)=>{
    const p_btn_click = e.target;
    
    // transform active button
    p_btn.forEach(curElem=>curElem.classList.remove('p-btn-active'));
    p_btn_click.classList.add('p-btn-active');

    // to find number in data attribute 
    const btn_num  = p_btn_click.dataset.btnNum;
    const img_active  = document.querySelectorAll(`.p-btn--${btn_num}`);
    
    // show button click value
    img_overlay.forEach(curElem=>curElem.classList.add('p-image-not-active'));
    img_active.forEach(curElem=>curElem.classList.remove('p-image-not-active'));
})
// initialize swipper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// scrool to top button
const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);
const scrollTop = ()=>{
  heroSection.scrollIntoView({behavior:"smooth"})
};

scroollElement.addEventListener("click",scrollTop);

// smooth scrool effect
const portfolioSec = document.querySelector(".section-portfolio");
const contactSec = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click",()=>{
  portfolioSec.scrollIntoView({behavior:"smooth"})
});

document.querySelector(".hireme-btn").addEventListener("click",()=>{
  contactSec.scrollIntoView({behavior:"smooth"})
});

// animate number counters
const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;

counterNum.forEach((curElem)=>{
    const updateNumber = ()=>{
       const targetNumber = parseInt(curElem.dataset.number);
       const initialNumber = parseInt(curElem.innerText);
       const incrementNumber = Math.trunc(targetNumber/speed);
       if(initialNumber < targetNumber){
         curElem.innerText = `${initialNumber + incrementNumber} +`;
         setTimeout(updateNumber,10);
       }
    };
    updateNumber();
});