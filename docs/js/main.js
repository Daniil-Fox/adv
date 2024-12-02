/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dropdown.js */ "./src/js/components/dropdown.js");
/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal.js */ "./src/js/components/modal.js");



/***/ }),

/***/ "./src/js/components/dropdown.js":
/*!***************************************!*\
  !*** ./src/js/components/dropdown.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const dropdown = document.querySelector('.dropdown');
if (dropdown) {
  const list = dropdown.querySelector('.dropdown>ul');
  const listItems = list?.querySelectorAll('.dropdown>ul>li');
  function clearSecondLvl() {
    listItems.forEach(el => {
      const listinside = el.querySelectorAll('.dropdown>ul>li>ul>li>ul');
      listinside.forEach(item => {
        item.closest('li').classList.remove('active');
        item.style.maxHeight = null;
      });
    });
  }
  listItems.forEach(el => {
    const btn = el.querySelector('span');
    const childListSecondLVL = el.querySelector('.dropdown>ul>li>ul');
    if (el.classList.contains('active')) {
      const inside = childListSecondLVL.querySelector('li.active ul');
      inside.style.maxHeight = inside.scrollHeight + 'px';
      setTimeout(() => {
        childListSecondLVL.style.maxHeight = childListSecondLVL.scrollHeight + 'px';
      }, 300);
    }
    btn.addEventListener('click', e => {
      let isActive = el.classList.toggle('active');
      childListSecondLVL.style.maxHeight = isActive ? childListSecondLVL.scrollHeight + 'px' : null;
      const childrenItems = childListSecondLVL.querySelectorAll('.dropdown>ul>li>ul>li');
      if (childrenItems && childrenItems.length > 0) {
        childrenItems.forEach(el => {
          const link = el.querySelector('.dropdown>ul>li>ul>li>a');
          link.addEventListener('click', e => {
            e.preventDefault();
            clearSecondLvl();
            const newList = el.querySelector('ul');
            if (newList) {
              link.addEventListener('click', e => {
                location.href = link.href;
              });
              el.classList.add('active');
              newList.style.maxHeight = newList.scrollHeight + 'px';
              setTimeout(() => {
                childListSecondLVL.style.maxHeight = childListSecondLVL.scrollHeight + 'px';
              }, 300);
            } else {
              location.href = link.href;
            }
          });
        });
      }
    });
  });
}

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const modalButtons = document.querySelectorAll('.modal-btn');
const modals = document.querySelectorAll('.modal');
if (modals && modals.length > 0) {
  modalButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const target = btn.dataset.modal.toLowerCase();
      const currentModal = document.querySelector(`.modal[data-modal=${target}]`);
      currentModal.classList.add('active');
    });
  });
  modals.forEach(el => {
    const body = el.querySelector('.modal__body');
    const close = body.querySelector('.modal__close');
    el.addEventListener('click', e => {
      el.classList.remove('active');
    });
    body.addEventListener('click', e => {
      e.stopPropagation();
    });
    close.addEventListener('click', e => {
      el.classList.remove('active');
    });
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

const navMenu = document.querySelector('.nav-menu');
const headerBurger = document.querySelector('.header-mob__burger');
const searchBtn = document.querySelector('.header-mob__search');
const searchPlug = document.querySelector('.search-plug');
headerBurger.addEventListener('click', e => {
  e.preventDefault();
  navMenu.classList.toggle('active');
  headerBurger.classList.toggle('active');
  searchBtn.classList.remove('active');
  searchPlug.classList.remove('active');
});
searchBtn.addEventListener('click', e => {
  navMenu.classList.remove('active');
  headerBurger.classList.remove('active');
  searchBtn.classList.toggle('active');
  searchPlug.classList.toggle('active');
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map