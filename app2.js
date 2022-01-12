const textArray = ["About Me!"];
const typingDelay = 200;
const erasingDelay = 100; 
const newTextDelay = 2000;

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
   setTimeout(type, 1000);
});