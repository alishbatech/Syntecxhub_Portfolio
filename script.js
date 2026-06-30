const navLinks=document.querySelector('.nav-links');
const menuBtn=document.querySelector('.menu-btn');

menuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
});

const navitems=document.querySelectorAll('.nav-links a');
const closeBtn=document.querySelector('.close-btn')
closeBtn.addEventListener('click',()=>{
    navLinks.classList.remove('active');
           
});
navitems.forEach((items)=>{
 items.addEventListener('click',()=>{
           navLinks.classList.remove('active')
 });
});

const form = document.getElementById("contactform");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Contact form is coming soon. Please reach me via LinkedIn or email.");
});