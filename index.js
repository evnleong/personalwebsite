const textArray = ["Evan here."];
const typingDelay = 160;

const typedTextSpan = document.querySelector(".typed-text");

let textArrayIndex = 0;
let charIndex = 0;


function type() {
    if(charIndex< textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
    }
    else {
    }
}
document.addEventListener("DOMContentLoaded", function() {
   setTimeout(type, 600);
});


const menubar = document.getElementsByClassName ('fas')[0]
const navbarlinks= document.getElementsByClassName ('nav-links')[0]

menubar.addEventListener('click', () => {
    navbarlinks.classList.toggle ('active')
})
