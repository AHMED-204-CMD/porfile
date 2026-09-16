const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

function updateMenuState(isOpen) {
    navLinks.classList.toggle('show', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));

    const menuIcon = menuToggle.querySelector('i');
    if (menuIcon) {
        menuIcon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    }
}
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.contains('show');
    updateMenuState(!isOpen);
});

navItems.forEach(item  =>  {
    item.addEventListener('click', () => {
        updateMenuState(false);
    });
});

document.addEventListener('click', (event) =>  {
if (navLinks.contains(event.target) && menuToggle.contains(event.target)) {
    updateMenuState(false);
}
});

