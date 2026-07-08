
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;
let autoSlide;
function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

function startSlider(){

    autoSlide = setInterval(nextSlide,3000);

}

function stopSlider(){

    clearInterval(autoSlide);

}

startSlider();

nextBtn.addEventListener("click",()=>{

    nextSlide();
    stopSlider();
    startSlider();

});

prevBtn.addEventListener("click",()=>{

    prevSlide();
    stopSlider();
    startSlider();

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide=index;

        showSlide(currentSlide);

        stopSlider();
        startSlider();

    });

});

const menuButton=document.querySelector(".menu-button");
const headerLinks=document.querySelector(".header-links");

menuButton.addEventListener("click",()=>{

    headerLinks.classList.toggle("show");

});

showSlide(currentSlide);