const menuToggle= document.querySelector('.menu-toggle');
const navLinks= document.querySelector('.nav-links');
const navItems= document.querySelectorAll('.nav-item');

if (menuToggle && navLinks) {
    const menuIcon=menuToggle.querySelector('i');
    function updateMenuState(isOpen){
        navLinks.classList.toggle('show', isOpen);
        menuToggle.setAttribute('aria-expanded',String(isOpen));
if  (menuIcon) {
    menuIcon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
}
menuToggle.addEventListener('click', (event) => {
}
    updateMenuState(!navLinks.contains('show'));
});
navItems.forEach((item) => {
    item.addEventListener('click' , ()  =>  {
        navItems.forEach((link)  => link.classList.remove('active'));
        updateMenuState(false);
    } );
});
document.addEventListener('click' ,(event)  =>{
    if (!navLinks.contains(event.target) && ! menuToggle.contains(event.target)) {
    }
});
}