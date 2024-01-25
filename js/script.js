function HoraEData(){
    const now = new Date();

    const currentDateTime = now.toLocaleString();

    document.getElementById('timeanddate').innerHTML = currentDateTime;
}

window.onload = HoraEData;


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);

}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showMenu(){
    var submen = document.getElementsByClassName("submenuMusica");
    submen[0].style.display = "inline-block";
}

function hideMenu(){
    var submen = document.getElementsByClassName("submenuMusica");
    submen[0].style.display = "none";
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1}
    if (n < 1) { slideIndex = slides.length }
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "dot");
        }
        slides[slideIndex -1].style.display = "block";
        dots[slideIndex -1].className = "active";
}

//autoplay

var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides,7000);
 }