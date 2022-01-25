const menubar = document.getElementsByClassName ('fas')[0]
const navbarlinks= document.getElementsByClassName ('nav-links')[0]

menubar.addEventListener('click', () => {
    navbarlinks.classList.toggle ('active')
})