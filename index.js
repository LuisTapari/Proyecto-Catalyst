// Acordeón Servicios 👇🏻

const serviciosMenu = document.querySelector('.submenu');
const dropdownMenu = document.querySelector('.submenu .dropdown');


dropdownMenu.style.display = 'none';

serviciosMenu.addEventListener('click', function(e) {
    e.stopPropagation();

    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
});

document.addEventListener('click', function(e) {
    if (!serviciosMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
    }
});


// Ícono Whatsapp 👇🏻

window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const whatsappButton = document.querySelector('.whatsapp-float');
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        whatsappButton.style.opacity = '0';
        whatsappButton.style.pointerEvents = 'none'; 
    } else {
        whatsappButton.style.opacity = '1';
        whatsappButton.style.pointerEvents = 'auto';
    }
});
