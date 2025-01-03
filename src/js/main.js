import './_components.js';
import { Fancybox } from "@fancyapps/ui";

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

Fancybox.bind("[data-fancybox=gallery]", {
  // Your custom options
});

const toTop = document.querySelector('.to-top')
if(toTop){
  toTop.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo(0,0)
  })
}


// Fixed header nav
const stickyMenu = document.querySelector('.sticky-menu')
const siteCont = document.querySelector('.site-container')
const offset = stickyMenu.offsetTop
window.addEventListener('scroll', e => {
  console.log(offset)
  if(window.scrollY >= offset){
    stickyMenu.classList.add('sticky')
  } else {
    stickyMenu.classList.remove('sticky')
  }
})
