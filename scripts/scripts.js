// START OF ACTIVE HEADER 
$(window).on("scroll touchmove", function () {
    $('header').toggleClass('active', $(document).scrollTop() > 0);
});
// END OF ACTIVE HEADER 

// Animations 
AOS.init({});
// Animations 

//big carousel
var myCarousel = document.querySelectorAll('.bigCarousel');
for(var i=0; i<myCarousel.length;i++) {
    var carousel = new bootstrap.Carousel(myCarousel[i], {
        interval: false,
        wrap: false
    })
}   
//big carousel

//mini carousel
var myCarousel2 = document.querySelectorAll('.miniCarousel');
for(var i=0; i<myCarousel.length;i++) {
    var carousel = new bootstrap.Carousel(myCarousel2[i], {
        interval: false,
        wrap: false
    })
}  
//mini carousel

// MENU 
const open = document.querySelector('.toggler');
const openNav = document.querySelector('.toggler-nav');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');
const booking = document.querySelector('.booking-form');
const body = document.body;
var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
if (tl.reversed()) {
    tl.play();
} else {
    tl.to('nav', { right: 0 }).
    to('nav', { height: '100vh' }, '-=.1').
    to('.menu', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8').
    to('.booking-form', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.95').
    to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.5").
    to('nav h1', { opacity: 1 }, '-=1');
    // console.log("xristina");
}
});

open.addEventListener('click', () => {
    openNav.classList.add("active");
});
close.addEventListener('click', () => {
    tl.reverse();
    openNav.classList.remove("active");
});
// MENU 

// SET THE DATE 
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = day + "/" + month + "/" + year ;
var tommorow = (day+1) + "/" + month + "/" + year;

document.getElementById('check-in').value = today;
document.getElementById('check-out').value = tommorow;
document.getElementById('checkIn').value = today;
document.getElementById('checkOut').value = tommorow;
// SET THE DATE 