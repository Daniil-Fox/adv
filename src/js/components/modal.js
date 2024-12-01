const modalButtons = document.querySelectorAll('.modal-btn')
const modals = document.querySelectorAll('.modal')
if(modals && modals.length > 0){
  modalButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault()
      const target = btn.dataset.modal.toLowerCase()
      const currentModal = document.querySelector(`.modal[data-modal=${target}]`)
      currentModal.classList.add('active')
    })
  })

  modals.forEach(el => {
    const body = el.querySelector('.modal__body')
    const close = body.querySelector('.modal__close')

    el.addEventListener('click', e => {
      el.classList.remove('active')
    })

    body.addEventListener('click', e => {
      e.stopPropagation()
    })

    close.addEventListener('click', e => {
      el.classList.remove('active')
    })
  })
}
