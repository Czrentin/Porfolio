// Gestion modal
const openButtons = document.querySelectorAll('.open-modal')
const modals = document.querySelectorAll('.modal')
const images = document.querySelectorAll('.poster-modal img')

openButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modals[index].showModal()
  })
  button.addEventListener('mouseenter', () => {
    images[index].classList.add('hover')
  })
  button.addEventListener('mouseleave', () => {
    images[index].classList.remove('hover')
  })
})

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    modals[index].showModal()
  })
  image.addEventListener('mouseenter', () => {
    images[index].classList.add('hover')
    openButtons[index].style.display = 'block'
  })
  image.addEventListener('mouseleave', () => {
    images[index].classList.remove('hover')
    openButtons[index].style.display = 'none'
  })
})

modals.forEach((modal) => {
  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.close()
  })
})
