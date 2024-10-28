const modal = document.querySelectorAll('.pop-up-container');
const cardBtn = document.querySelectorAll('#container-ebook');
const modalClose = document.querySelectorAll('.modal__close');
const modalCard = document.querySelectorAll('.pop-up-card');

let activeModal = (modalClick) =>{
    modal[modalClick].classList.add('active-modal')
}

cardBtn.forEach((cardBtn, svg) => {
    cardBtn.addEventListener('click', () => {
        activeModal(svg)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})

modal.forEach((modal) => {
    modal.addEventListener('click', () => {
        modal.classList.remove('active-modal')
    })
})

modalCard.forEach((modalCard) => {
    modalCard.addEventListener('click', (e) => {
        e.stopPropagation()
    })
})

