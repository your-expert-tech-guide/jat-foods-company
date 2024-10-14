// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/*const gpf = document.querySelector('.gpf');
const rbf = document.querySelector('.rbf');
const byf = document.querySelector('.byf');
const cof = document.querySelector('.cof');
const wwf = document.querySelector('.wwf');

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const brown = document.querySelector('.brown');
const chocolate = document.querySelector('.chocolate');
const white = document.querySelector('.white');

gpf.addEventListener('click', ()=>{
  green.style.opacity = '1'
  green.style.transform = 'rotate(0deg)'

  red.style.opacity = '0'
  red.style.transform = 'rotate(-90deg)'
  brown.style.opacity = '0'
  brown.style.transform = 'rotate(-90deg)'
})
rbf.addEventListener('click', ()=>{
  brown.style.opacity = '1'
  brown.style.transform = 'rotate(0deg)'

  red.style.opacity = '0'
  red.style.transform = 'rotate(-90deg)'
  green.style.opacity = '0'
  green.style.transform = 'rotate(-90deg)'
})*/

