function HoraEData() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.getElementById('timeanddate').innerHTML = currentDateTime;
}

function checkHeaderPosition() {
    var header = document.getElementById("backgroundHEADER");
    var sticky = header.offsetTop;
    
    if (window.scrollY > sticky){
        header.style.position = "fixed";
        header.style.top = "0";
    } else {
        header.style.position = "relative";
    }
}



window.onload = function() {
    HoraEData(); // Executa a função para exibir a hora e a data
    checkHeaderPosition(); // Executa a função para verificar a posição do cabeçalho
    
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav a');

    hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('is-active');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('is-active');
        });
    });
};

window.onscroll = function() {
    checkHeaderPosition(); // Atualiza a posição do cabeçalho durante o scroll
};

var slideIndex = 1;

function plusSlides(n) {
    slideIndex += n;
    showCurrentSlide();
    console.log("O index e: " + slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showCurrentSlide();
    console.log("O index e: " + slideIndex);
}

function showMenu() {
    var submen = document.getElementsByClassName("submenuMusica");
    submen[0].style.display = "inline-block";
}

function hideMenu() {
    var submen = document.getElementsByClassName("submenuMusica");
    submen[0].style.display = "none";
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        //dots[i].className = dots[i].className.replace("active", "dot");
    }

    for(i=0; i < dots.length; i++)dots[i].classList.remove("active");
    console.log("showSlides - SliderIndex: " + slideIndex);
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    slideIndex++;
    setTimeout(showSlides, 7000);
}

function showCurrentSlide(){
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        //dots[i].className = dots[i].className.replace("active", "dot");
    }

    for(i=0; i < dots.length; i++)dots[i].classList.remove("active");
    console.log("showSlides - SliderIndex: " + slideIndex);
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

showSlides();