let swiper = new Swiper(".mySwiper", {

    breakpoints: {
        // when window width is >= 320px
        100: {
          slidesPerView: 1
        },
        // when window width is >= 480px
        575: {
          slidesPerView: 2
        },
        // when window width is >= 640px
        900: {
          slidesPerView: 3
        }
    },

    spaceBetween: 20,
    loop: true,
    grabCursor: false,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

});

// Selecciona todas las imágenes de testimonios
const testimonialImages = document.querySelectorAll('.comment-header img');
const imageModalContainer = document.getElementById('imageModal');
const imageModalContent = document.getElementById('modalImage');
const closeImageModal = document.querySelector('.close');

// Abre la modal al hacer clic en una imagen
testimonialImages.forEach(img => {
    img.addEventListener('click', () => {
        imageModalContainer.style.display = 'flex';
        imageModalContent.src = img.src;
        
        // Añade la clase 'show' para activar la transición
        setTimeout(() => {
            imageModalContainer.classList.add('show');
        }, 10); // Un breve retraso para asegurarse de que la transición se active
    });
});

// Cierra la modal al hacer clic en el botón de cierre
closeImageModal.addEventListener('click', () => {
    imageModalContainer.classList.remove('show');
    
    // Esconde la modal después de la transición
    setTimeout(() => {
        imageModalContainer.style.display = 'none';
    }, 300); // Tiempo coincidente con la duración de la animación
});

// Cierra la modal al hacer clic fuera de la imagen ampliada
imageModalContainer.addEventListener('click', (e) => {
    if (e.target === imageModalContainer) {
        imageModalContainer.classList.remove('show');
        
        setTimeout(() => {
            imageModalContainer.style.display = 'none';
        }, 300);
    }
});
