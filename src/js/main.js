import './_components.js';


const navMenu = document.querySelector('.nav-menu')
const headerBurger = document.querySelector('.header-mob__burger')

const searchBtn = document.querySelector('.header-mob__search')
const searchPlug = document.querySelector('.search-plug')

headerBurger.addEventListener('click', e => {
  e.preventDefault()

  navMenu.classList.toggle('active')
  headerBurger.classList.toggle('active')

  searchBtn.classList.remove('active')
  searchPlug.classList.remove('active')
})

searchBtn.addEventListener('click', e => {
  navMenu.classList.remove('active')
  headerBurger.classList.remove('active')
  searchBtn.classList.toggle('active')
  searchPlug.classList.toggle('active')
})
