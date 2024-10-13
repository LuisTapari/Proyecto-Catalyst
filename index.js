window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const whatsappButton = document.querySelector('.whatsapp-float');
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        whatsappButton.style.position = 'absolute';
        whatsappButton.style.bottom = (windowHeight - footerTop + 20) + 'px'; 
    } else {
        whatsappButton.style.position = 'fixed';
        whatsappButton.style.bottom = '20px';
    }
});