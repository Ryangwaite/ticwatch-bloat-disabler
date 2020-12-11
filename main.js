/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style.less":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style.less ***!
  \*****************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * The classes in here follow the BEM naming convention for the generated CSS\n * (not that it is really needed on a project of this size)\n */\n/* Colors */\n/* Dimensions */\n/* Type Scale */\n/* Media Query width boundaries */\n/* Font */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUOjIg1_i6t8kCHKm459WxZqi7j.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZBg_D-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZYgzD-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm459Wxhzg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZOg3D-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZFgrD-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZcgvD-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZbgjD-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZSgnD-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm45_Qphzg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA7g4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_cJD7g4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm45xW4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC7g4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF7g4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE7g4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_c5H7g4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_epG7g4.ttf) format('truetype');\n}\n* {\n  font-family: 'Montserrat', sans-serif;\n}\nbody {\n  background-color: white;\n}\n.header {\n  display: flex;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  justify-content: center;\n  padding: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 24px;\n  background-color: white;\n  z-index: 1;\n}\n.header__title {\n  font-size: 72px;\n  border-bottom: 4px solid #090909;\n  text-align: center;\n  display: inline;\n  margin: unset;\n  padding-left: 32px;\n  padding-right: 32px;\n  font-weight: bold;\n}\n@media screen and (max-width: 1200px) {\n  .header__title {\n    font-size: 36px;\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n@media screen and (max-width: 540px) {\n  .header__title {\n    font-size: 20px;\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n}\n.panel-container {\n  position: relative;\n}\n.panel-container__left-panel {\n  display: inline-block;\n  max-width: 512px;\n  position: absolute;\n  margin-right: 48px;\n  padding-bottom: 64px;\n  top: 128px;\n  right: 50%;\n}\n.panel-container__right-panel {\n  margin-left: 48px;\n  position: fixed;\n  top: 128px;\n  left: 50%;\n}\n@media screen and (max-width: 1200px), screen and (max-height: 840px) {\n  .panel-container {\n    position: static;\n  }\n  .panel-container__left-panel {\n    display: block;\n    position: static;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 64px;\n  }\n  .panel-container__right-panel {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: static;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.left-panel__intro-text {\n  margin-bottom: 24px;\n}\n.left-panel__warning-container {\n  display: flex;\n  align-items: center;\n  border: 4px solid #B4AA1B;\n  border-radius: 24px;\n  background-color: #FAF8DC;\n  margin-bottom: 24px;\n}\n.left-panel__button-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.left-panel__footer a {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  text-decoration: none;\n  color: unset;\n  width: 192px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.left-panel__footer a:hover .footer__text {\n  text-decoration: underline;\n}\n.intro-text__p {\n  font-size: 20px;\n  line-height: 32px;\n  text-align: justify;\n  hyphens: auto;\n}\n.intro-text__p:first-child {\n  margin-block-start: 0;\n}\n.intro-text__p:last-child {\n  margin-block-end: 0;\n}\n.intro-text__p:nth-last-of-type(2) {\n  margin-block-end: 0.5em;\n}\n.intro-text__list {\n  font-size: 20px;\n  line-height: 32px;\n  list-style-position: outside;\n  margin-block-start: 0;\n}\n.intro-text__list li {\n  margin-bottom: 12px;\n}\n.intro-text__list li span {\n  display: block;\n  margin-left: 12px;\n}\n.warning-container__icon {\n  width: 32px;\n  height: auto;\n  margin: 0px 32px;\n  margin-right: 0px;\n}\n.warning-container__text {\n  font-size: 18px;\n  line-height: 24px;\n  color: #090909;\n  padding: 0px 32px;\n  text-align: justify;\n}\n.button-container__btn {\n  padding: 12px;\n  width: 192px;\n  border-radius: 24px;\n  border: none;\n  margin: 12px;\n  color: #F6F6F6;\n  font-weight: bold;\n  font-size: 20px;\n}\n.button-container__btn:focus {\n  outline: 0;\n}\n.button-container__btn--enabled {\n  background-color: #3CB7AB;\n  border: 2px solid #2F9187;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n.button-container__btn--enabled:hover {\n  background-color: #2F9187;\n}\n.button-container__btn--enabled:active {\n  filter: none;\n}\n.button-container__btn--disabled {\n  background-color: #C8C8C8;\n  border: 2px solid #808080;\n}\n.footer__github-logo {\n  width: 32px;\n}\n.footer__text {\n  font-size: 16px;\n}\n.right-panel__watch-stats-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 4px solid #808080;\n  border-radius: 12px;\n  height: 128px;\n  width: 512px;\n  margin-bottom: 32px;\n  position: relative;\n}\n@media screen and (max-width: 540px) {\n  .right-panel__watch-stats-container {\n    width: 384px;\n  }\n}\n@media screen and (max-width: 425px) {\n  .right-panel__watch-stats-container {\n    width: 256px;\n  }\n}\n.right-panel__table {\n  border: 4px solid #808080;\n  border-radius: 12px;\n  border-collapse: separate;\n  border-spacing: 0px;\n  margin-bottom: 32px;\n  width: 520px;\n}\n@media screen and (max-width: 540px) {\n  .right-panel__table {\n    width: 392px;\n  }\n}\n@media screen and (max-width: 425px) {\n  .right-panel__table {\n    width: 256px;\n  }\n}\n/* Adds a &--hidden class and fade transitions between showing\n * and hiding\n */\n.watch-stats-container__text {\n  position: absolute;\n  opacity: 1;\n  transition: opacity 1s ease;\n  font-weight: bold;\n  font-size: 20px;\n  padding: 12px;\n}\n.watch-stats-container__text--hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n.watch-stats-container__text--info {\n  color: #090909;\n}\n.watch-stats-container__text--error {\n  color: #B4441B;\n}\n.status-item-font-size-mixin {\n  font-size: 20px;\n}\n@media screen and (max-width: 540px) {\n  .status-item-font-size-mixin {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 425px) {\n  .status-item-font-size-mixin {\n    font-size: 14px;\n  }\n}\n.watch-stats-container__grid {\n  position: absolute;\n  opacity: 1;\n  transition: opacity 1s ease;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto auto;\n  align-items: center;\n  justify-items: left;\n}\n.watch-stats-container__grid--hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n.grid__item {\n  margin-left: 32px;\n}\n.item__label {\n  font-size: 20px;\n  font-weight: bold;\n}\n@media screen and (max-width: 540px) {\n  .item__label {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 425px) {\n  .item__label {\n    font-size: 14px;\n  }\n}\n.item__value {\n  font-size: 20px;\n}\n@media screen and (max-width: 540px) {\n  .item__value {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 425px) {\n  .item__value {\n    font-size: 14px;\n  }\n}\n.table__header {\n  background-color: #808080;\n  color: #F6F6F6;\n  padding: 12px;\n  font-size: 20px;\n}\n.table__row {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  border-top: 4px solid #808080;\n  height: 32px;\n  position: relative;\n}\n.row__package-label {\n  font-size: 20px;\n  margin-left: 32px;\n  margin-right: 32px;\n  transition: width 1s ease-out;\n  text-align: center;\n  width: 100%;\n}\n.row__package-label--move-left {\n  width: 0;\n}\n@media screen and (max-width: 540px) {\n  .row__package-label {\n    font-size: 18px;\n    margin-left: 16px;\n    margin-right: 16px;\n  }\n}\n@media screen and (max-width: 425px) {\n  .row__package-label {\n    font-size: 14px;\n    margin-left: 4px;\n    margin-right: 4px;\n  }\n}\n.row__status-icon {\n  position: absolute;\n  right: 0px;\n  width: 32px;\n  height: auto;\n  margin-right: 32px;\n  transition: opacity 1s ease-out;\n  opacity: 1;\n}\n.row__status-icon--hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n@media screen and (max-width: 540px) {\n  .row__status-icon {\n    margin-right: 16px;\n  }\n}\n@media screen and (max-width: 425px) {\n  .row__status-icon {\n    width: 16px;\n    margin-right: 4px;\n  }\n}\n.modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(4px);\n  justify-content: center;\n  align-items: center;\n}\n.modal--visible {\n  display: flex;\n}\n.modal__text {\n  font-size: 30px;\n  line-height: 32px;\n  text-align: center;\n  background-color: #F6F6F6;\n  max-width: 20%;\n  max-height: 30%;\n  border: 4px solid #808080;\n  border-radius: 12px;\n  padding: 48px;\n}\n@media screen and (max-width: 1200px) {\n  .modal__text {\n    font-size: 30px;\n    padding: 32px;\n    max-width: 60%;\n    max-height: unset;\n  }\n}\n@media screen and (max-width: 540px) {\n  .modal__text {\n    font-size: 24px;\n    padding: 24px;\n    max-width: 80%;\n    max-height: unset;\n  }\n}\n@media screen and (max-width: 425px) {\n  .modal__text {\n    font-size: 20px;\n    padding: 16px;\n    max-width: 80%;\n    max-height: unset;\n  }\n}\n@media screen and (max-width: 320px) {\n  .modal__text {\n    font-size: 18px;\n    padding: 12px;\n    max-width: 90%;\n    max-height: unset;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.less","https:/fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"],"names":[],"mappings":"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","sourcesContent":["/*\n * The classes in here follow the BEM naming convention for the generated CSS\n * (not that it is really needed on a project of this size)\n */\n\n\n/* Colors */\n// Note: probably need another 2 or 4 shades per color to make this look better\n\n@primary-500: #226A62;\n@primary-400: #2F9187;\n@primary-300: #3CB7AB;\n@primary-200: #7ED5CD;\n@primary-100: #D4F1EE;\n\n@neutral-500: #090909;\n@neutral-400: #404040;\n@neutral-300: #808080;\n@neutral-200: #C8C8C8;\n@neutral-100: #F6F6F6;\n\n@accent-yellow-500: #504B0C;\n@accent-yellow-400: #B4AA1B;\n@accent-yellow-300: #E6DD5B;\n@accent-yellow-200: #F1ECA1;\n@accent-yellow-100: #FAF8DC;\n\n@accent-red-500: #501E0C;\n@accent-red-400: #B4441B;\n@accent-red-300: #E6805B;\n@accent-red-200: #F1B6A1;\n@accent-red-100: #FAE4DC;\n\n@accent-green-500: #27500C;\n@accent-green-400: #4EA018;\n@accent-green-300: #93E65B;\n@accent-green-200: #C1F1A1;\n@accent-green-100: #E8FADC;\n\n\n/* Dimensions */\n// idk about the naming convention here.\n// Note: this is borrowed from Refactoring UI by Adam Wathan and Steve Schoger\n\n@dimens-4: 4px;\n@dimens-8: 8px;\n@dimens-12: 12px;\n@dimens-16: 16px;\n@dimens-24: 24px;\n@dimens-32: 32px;\n@dimens-48: 48px;\n@dimens-64: 64px;\n@dimens-96: 96px;\n@dimens-128: 128px;\n@dimens-192: 192px;\n@dimens-256: 256px;\n@dimens-384: 384px;\n@dimens-512: 512px;\n@dimens-640: 640px;\n@dimens-768: 12px;\n\n\n/* Type Scale */\n// Note: this is borrowed from Refactoring UI by Adam Wathan and Steve Schoger\n\n@font-size-12: 12px;\n@font-size-14: 14px;\n@font-size-16: 16px;\n@font-size-18: 18px;\n@font-size-20: 20px;\n@font-size-24: 24px;\n@font-size-30: 30px;\n@font-size-36: 36px;\n@font-size-48: 48px;\n@font-size-60: 60px;\n@font-size-72: 72px;\n\n\n/* Media Query width boundaries */\n// These are kinda aribitrary but it works with the layouts below\n@device-width-large: 1200px;\n@device-width-medium: 540px;\n@device-width-small: 425px;\n@device-width-xsmall: 320px;\n\n\n/* Font */\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n* {\n    font-family: 'Montserrat', sans-serif; // use the same font in all text on the page\n}\n\n\nbody {\n    background-color: white;\n}\n\n\n.header {\n    display: flex;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    justify-content: center;\n    padding: 0px;\n    margin-left: 0px;\n    margin-right: 0px;\n    margin-top: 0px;\n    margin-bottom: 24px;\n    \n    // so that the scrolled text isn't visible behind the header\n    background-color: white;\n    z-index: 1;                \n\n    &__title {\n        font-size: @font-size-72;\n        border-bottom: @dimens-4 solid @neutral-500;\n        text-align: center;\n        display: inline;\n        margin: unset;\n        padding-left: @dimens-32;\n        padding-right: @dimens-32;\n        font-weight: bold;\n\n        // Below these sizes show a smaller font\n        @media screen and (max-width: @device-width-large) {\n            font-size: @font-size-36;\n            padding-left: @dimens-16;\n            padding-right: @dimens-16;\n        }\n\n        // And then smaller again - this is to prevent the title spilling\n        // onto multiple lines\n        @media screen and (max-width: @device-width-medium) {\n            font-size: @font-size-20;\n            padding-left: @dimens-12;\n            padding-right: @dimens-12;\n        }\n    }\n}\n\n\n.panel-container {\n\n    position: relative; // this is so the left-panel has something to position relative to\n\n    @offset-from-browser-top: @dimens-128;\n    @panel-centre-margin: @dimens-48;\n\n    &__left-panel {\n        display: inline-block;\n        max-width: @dimens-512;\n        position: absolute;\n        margin-right: @panel-centre-margin;\n        padding-bottom: @dimens-64; // so that the left-panel scrolls the content up enough\n        top: @offset-from-browser-top;\n        right: 50%; // move off the right side of the browser by this amount\n    }\n    \n    &__right-panel {\n        margin-left: @panel-centre-margin;\n        position: fixed;\n        top: @offset-from-browser-top;\n        left: 50%; // move off the left side of the browser by this amount\n\n    }\n\n    // Below these sizes make it a 1 column layout\n    @media screen and (max-width: @device-width-large), screen and (max-height: 840px) {\n\n        & {\n            // No longer need to position the left panel relative to this\n            position: static;\n        }\n\n        &__left-panel {\n            display: block;\n            position: static;\n            // Centre content in window\n            margin-left: auto;\n            margin-right: auto;\n            margin-top: @dimens-64;\n        }\n        &__right-panel {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            position: static;\n            // Centre content in window\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n}\n\n\n.left-panel {\n\n    &__intro-text {\n        margin-bottom: @dimens-24;\n    }\n\n    &__warning-container {\n        display: flex;\n        align-items: center;\n        border: @dimens-4 solid @accent-yellow-400;\n        border-radius: @dimens-24;\n        background-color: @accent-yellow-100;\n        margin-bottom: @dimens-24;\n    }\n\n    &__button-container {\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        margin-bottom: @dimens-24;\n    }\n\n    &__footer a { // yeah, i should probably make a new class for this\n        display: flex;\n        align-items: center;\n        justify-content: space-evenly;\n        text-decoration: none;  // remove the default styling\n        color: unset;           // of the <a /> element text\n        width: @dimens-192;\n        margin-left: auto;      // centre the <a /> in the\n        margin-right: auto;     // middle of the column\n        \n        // When any of the <a /> is hovered over bold the text\n        // in the child span\n        &:hover .footer__text { \n            text-decoration: underline;\n        }\n    }\n}\n\n\n.intro-text__p {\n    font-size: @font-size-20;\n    line-height: @dimens-32;\n    text-align: justify;\n    hyphens: auto; // makes the justified text look better\n\n    &:first-child {\n        // No margin on the first paragraph so that the top of each\n        // column is aligned\n        margin-block-start: 0; \n    }\n\n    &:last-child {\n        // Similar here, make it easy to space the following warning\n        // section without factoring in this\n        margin-block-end: 0;\n    }\n\n    &:nth-last-of-type(2) {\n        // shrink the gap between the second to last paragraph\n        // and trailing list \n        margin-block-end: 0.5em;    \n    }                               \n}\n\n\n.intro-text__list {\n    font-size: @font-size-20;\n    line-height: @dimens-32;\n    list-style-position: outside;\n    margin-block-start: 0; // makes sure the list doesn't contribute to the gap between it and the paragraph\n\n    & li {\n        margin-bottom: @dimens-12;\n\n        // Had to wrap the text in a span so that i could increase the gap\n        // between the number and the text\n        & span {\n            display: block;\n            margin-left: @dimens-12;\n        }\n    }\n}\n\n\n.warning-container {\n\n    @horizontal-margin: @dimens-32;\n\n    &__icon {\n        width: @dimens-32;\n        height: auto;\n        margin: 0px @horizontal-margin;\n        margin-right: 0px;\n    }\n\n    &__text {\n        font-size: @font-size-18;\n        line-height: @dimens-24;\n        color: @neutral-500;\n        padding: 0px @horizontal-margin;\n        text-align: justify;\n    }\n}\n\n\n.button-container {\n\n    &__btn {\n        padding: @dimens-12;\n        width: @dimens-192;\n        border-radius: @dimens-24;\n        border: none;\n        margin: @dimens-12;\n        color: @neutral-100;\n        font-weight: bold;\n        font-size: @font-size-20;\n\n        &:focus {\n            outline: 0; // Hide the rectangular border that appears when clicking\n        }\n\n        &--enabled {\n            background-color: @primary-300;\n            border: 2px solid @primary-400;\n            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n\n            &:hover {\n                background-color: @primary-400;\n            }\n\n            &:active {\n                filter: none; // remove drop shadow while mouse is clicked\n            }\n        }\n    \n        &--disabled {\n            background-color: @neutral-200;\n            border: 2px solid @neutral-300;\n        }\n    }    \n}\n\n\n.footer {\n    &__github-logo {\n        width: @dimens-32;\n    }\n\n    &__text {\n        font-size: @font-size-16;\n    }\n}\n\n\n.right-panel {\n\n    &__watch-stats-container {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: @dimens-4 solid @neutral-300;\n        border-radius: @dimens-12;\n        height: @dimens-128;\n        width: @dimens-512;\n        margin-bottom: @dimens-32;\n        // Couldn't get fade in transition to work unless children were\n        // absolutely positioned and for that to happen their parent must\n        // be non-statically positioned\n        position: relative;\n\n        // Need to shrink the container below this size as it begins to get\n        // cut-off\n        @media screen and (max-width: @device-width-medium) {\n            width: @dimens-384;\n        }\n        @media screen and (max-width: @device-width-small) {\n            width: @dimens-256;\n        }\n    }\n\n    &__table {\n\n        // The widths below should match the width of the status box so added a\n        // few px's to make that happen. This is a quick fix. I think its cos\n        // of how i drew the border on the table.\n        @border-width-correction: 8px;\n\n        border: @dimens-4 solid @neutral-300;\n        border-radius: @dimens-12;\n        border-collapse: separate;\n        border-spacing: 0px;\n        margin-bottom: @dimens-32; // Theres nothing below here but its future proofed\n        width: @dimens-512 + 8; \n\n        // Need to shrink the container below at smaller sizes as it begins to\n        // get cut-off\n        @media screen and (max-width: @device-width-medium) {\n            width: @dimens-384 + 8;\n        }\n        @media screen and (max-width: @device-width-small) {\n            width: @dimens-256;\n        }\n    }\n}\n\n\n/* Adds a &--hidden class and fade transitions between showing\n * and hiding\n */\n.watch-stats-item-visibility-mixin() {\n    // This is so the spacing of the invisible item doesn't influence\n    // the position of the visible one\n    position: absolute;\n    \n    opacity: 1;\n    transition: opacity 1s ease;\n\n    &--hidden {\n        visibility: hidden;\n        opacity: 0;\n    }\n}\n\n\n.watch-stats-container__text {\n    .watch-stats-item-visibility-mixin();\n    font-weight: bold;\n    font-size: @font-size-20;\n    padding: @dimens-12;\n\n    // When the \"no device connected is displayed\"\n    &--info {\n        color: @neutral-500;\n    }\n\n    // When an error message is displayed\n    &--error {\n        color: @accent-red-400;\n    }\n}\n\n.status-item-font-size-mixin {\n    font-size: @font-size-20;\n\n    // Use a smaller font at smaller screen sizes\n    @media screen and (max-width: @device-width-medium) {\n        font-size: @font-size-18;\n    }\n    @media screen and (max-width: @device-width-small) {\n        font-size: @font-size-14;\n    }\n}\n\n.watch-stats-container__grid {\n    .watch-stats-item-visibility-mixin();\n    width: 100%;\n    height: 100%;\n    display: grid;\n    // 2x2 grid\n    grid-template-columns: auto auto;\n    grid-template-rows: auto auto;\n    align-items: center;\n    justify-items: left;\n}\n\n\n.grid__item {\n    margin-left: @dimens-32;\n}\n\n\n.item__label {\n    .status-item-font-size-mixin();\n    font-weight: bold;\n}\n\n\n.item__value {\n    .status-item-font-size-mixin();\n    font-size: @font-size-20;\n}\n\n\n.table {\n\n    @cell-padding: @dimens-12;\n\n    &__header {\n        background-color: @neutral-300;\n        color: @neutral-100;\n        padding: @cell-padding;\n        font-size: @font-size-20;\n    }\n\n    &__row {\n        display: flex;\n        align-items: center;\n        padding: @cell-padding;\n        border-top: @dimens-4 solid @neutral-300;\n        height: @dimens-32;\n        position: relative;\n    }\n}\n\n\n.row {\n\n    @margin-outside: @dimens-32;\n    @transtion-duration: 1s;\n\n    &__package-label {\n        font-size: @font-size-20;\n        margin-left: @margin-outside;\n        margin-right: @margin-outside;\n        transition: width @transtion-duration ease-out;\n        // Centre the text in the middle of the table in the starting position\n        // when the status icon is hidden\n        text-align: center;\n        width: 100%;\n\n        &--move-left {\n            // The text appears outside the span and is left aligned along the\n            // table boundary. I Couldn't achieve this affect any other way.\n            width: 0;\n        }\n\n        // Need a smaller font at smaller screen sizes so that the table fits\n        @media screen and (max-width: @device-width-medium) {\n            font-size: @font-size-18;\n            margin-left: @margin-outside / 2;\n            margin-right: @margin-outside / 2;\n        }\n        @media screen and (max-width: @device-width-small) {\n            font-size: @font-size-14;\n            margin-left: @dimens-4;\n            margin-right: @dimens-4;\n        }\n    }\n    &__status-icon {\n        position: absolute;\n        right: 0px;\n        width: @dimens-32;\n        height: auto;\n        margin-right: @margin-outside;\n        transition: opacity @transtion-duration ease-out;\n        opacity: 1;        \n\n        &--hidden {\n            // display: none won't work here. Needs to use 'visibility' so\n            // the fade-in transition occurs\n            visibility: hidden;\n            opacity: 0;\n        }\n\n        // Use a smaller icon on smaller width devices so that the table isn't\n        // pushed slightly off screen\n        @media screen and (max-width: @device-width-medium) {\n            margin-right: @margin-outside / 2;\n        }\n        @media screen and (max-width: @device-width-small) {\n            width: @dimens-16;\n            margin-right: @dimens-4;\n        }\n    }\n}\n\n\n.modal {\n    display: none;      // Don't show by default\n    position: fixed;    // position relative to the browser window\n    left: 0;\n    top: 0;\n    z-index: 1;         // position on top of the other content\n    width: 100%;\n    height: 100%;\n    backdrop-filter: blur(@dimens-4);\n    justify-content: center;\n    align-items: center;\n    &--visible {\n        display: flex;\n    }\n\n    &__text {\n        font-size: @font-size-30;\n        line-height: @dimens-32;\n        text-align: center;\n        background-color: @neutral-100;\n        max-width: 20%;\n        max-height: 30%;\n        border: @dimens-4 solid @neutral-300;\n        border-radius: @dimens-12;\n        padding: @dimens-48;\n\n        // Shrink the text at smaller device widths\n        @media screen and (max-width: @device-width-large) {\n            font-size: @font-size-30;\n            padding: @dimens-32;\n            max-width: 60%;\n            max-height: unset;\n        }\n        @media screen and (max-width: @device-width-medium) {\n            font-size: @font-size-24;\n            padding: @dimens-24;\n            max-width: 80%;\n            max-height: unset;\n        }\n        @media screen and (max-width: @device-width-small) {\n            font-size: @font-size-20;\n            padding: @dimens-16;\n            max-width: 80%;\n            max-height: unset;\n        }\n        @media screen and (max-width: @device-width-xsmall) {\n            font-size: @font-size-18;\n            padding: @dimens-12;\n            max-width: 90%;\n            max-height: unset;\n        }\n    }\n}","@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUOjIg1_i6t8kCHKm459WxZqi7j.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZBg_D-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZYgzD-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm459Wxhzg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZOg3D-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZFgrD-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZcgvD-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZbgjD-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: italic;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZSgnD-w.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 100;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm45_Qphzg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 200;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA7g4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_cJD7g4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm45xW4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC7g4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF7g4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE7g4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_c5H7g4.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_epG7g4.ttf) format('truetype');\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./style.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style.less");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webadb/webadb.js":
/*!***************************************!*\
  !*** ./node_modules/webadb/webadb.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, module */
/*! CommonJS bailout: this is used directly at 11:2-6 */
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// SPDX-License-Identifier: MIT

(function(root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function() {
	'use strict';

	let Adb = {};

	Adb.Opt = {};
	Adb.Opt.debug = false;
	Adb.Opt.dump = false;

	Adb.Opt.key_size = 2048;
	Adb.Opt.reuse_key = -1;

	// Set this to false for new devices (post Dec 2017) if
	// autodetection doesn't handle it automatically.
	Adb.Opt.use_checksum = true;

	let db = init_db();
	let keys = db.then(load_keys);

	Adb.open = function(transport) {
		if (transport == "WebUSB")
			return Adb.WebUSB.Transport.open();

		throw new Error("Unsupported transport: " + transport);
	};

	Adb.WebUSB = {};

	Adb.WebUSB.Transport = function(device) {
		this.device = device;

		if (Adb.Opt.debug)
			console.log(this);
	};

	Adb.WebUSB.Transport.open = function() {
		let filters = [
			{ classCode: 255, subclassCode: 66, protocolCode: 1 },
			{ classCode: 255, subclassCode: 66, protocolCode: 3 }
		];

		return navigator.usb.requestDevice({ filters: filters })
			.then(device => device.open()
				.then(() => new Adb.WebUSB.Transport(device)));
	};

	Adb.WebUSB.Transport.prototype.close = function() {
		this.device.close();
	};

	Adb.WebUSB.Transport.prototype.reset = function() {
		this.device.reset();
	};

	Adb.WebUSB.Transport.prototype.send = function(ep, data) {
		if (Adb.Opt.dump)
			hexdump(new DataView(data), "" + ep + "==> ");

		return this.device.transferOut(ep, data);
	};

	Adb.WebUSB.Transport.prototype.receive = function(ep, len) {
		return this.device.transferIn(ep, len)
			.then(response => {
				if (Adb.Opt.dump)
					hexdump(response.data, "<==" + ep + " ");

				return response.data;
			});
	};

	Adb.WebUSB.Transport.prototype.find = function(filter) {
		for (let i in this.device.configurations) {
			let conf = this.device.configurations[i];
			for (let j in conf.interfaces) {
				let intf = conf.interfaces[j];
				for (let k in intf.alternates) {
					let alt = intf.alternates[k];
					if (filter.classCode == alt.interfaceClass &&
					    filter.subclassCode == alt.interfaceSubclass &&
					    filter.protocolCode == alt.interfaceProtocol) {
						return { conf: conf, intf: intf, alt: alt };
					}
				}
			}
		}

		return null;
	}

	Adb.WebUSB.Transport.prototype.isAdb = function() {
		let match = this.find({ classCode: 255, subclassCode: 66, protocolCode: 1 });
		return match != null;
	};

	Adb.WebUSB.Transport.prototype.isFastboot = function() {
		let match = this.find({ classCode: 255, subclassCode: 66, protocolCode: 3 });
		return match != null;
	};

	Adb.WebUSB.Transport.prototype.getDevice = function(filter) {
		let match = this.find(filter);
		return this.device.selectConfiguration(match.conf.configurationValue)
			.then(() => this.device.claimInterface(match.intf.interfaceNumber))
			.then(() => this.device.selectAlternateInterface(match.intf.interfaceNumber, match.alt.alternateSetting))
			.then(() => match);
	};

	Adb.WebUSB.Transport.prototype.connectAdb = function(banner, auth_user_notify = null) {
		let VERSION = 0x01000000;
		let VERSION_NO_CHECKSUM = 0x01000001;
		let MAX_PAYLOAD = 256 * 1024;

		let key_idx = 0;
		let AUTH_TOKEN = 1;

		let version_used = Adb.Opt.use_checksum ? VERSION : VERSION_NO_CHECKSUM;
		let m = new Adb.Message("CNXN", version_used, MAX_PAYLOAD, "" + banner + "\0");
		return this.getDevice({ classCode: 255, subclassCode: 66, protocolCode: 1 })
			.then(match => new Adb.WebUSB.Device(this, match))
			.then(adb => m.send_receive(adb)
				.then((function do_auth_response(response) {
					if (response.cmd != "AUTH" || response.arg0 != AUTH_TOKEN)
						return response;

					return keys.then(keys =>
						do_auth(adb, keys, key_idx++, response.data.buffer, do_auth_response, auth_user_notify));
				}))
				.then(response => {
					if (response.cmd != "CNXN")
						throw new Error("Failed to connect with '" + banner + "'");
					console.log('version', response.arg0);
					if (response.arg0 != VERSION && response.arg0 != VERSION_NO_CHECKSUM)
						throw new Error("Version mismatch: " + response.arg0 + " (expected: " + VERSION + " or " + VERSION_NO_CHECKSUM + ")");
					if (Adb.Opt.debug)
						console.log("Connected with '" + banner + "', max_payload: " + response.arg1);
					adb.max_payload = response.arg1;
					if (response.arg0 == VERSION_NO_CHECKSUM)
						Adb.Opt.use_checksum = false;
					adb.banner = new TextDecoder("utf-8").decode(response.data);
					let pieces = adb.banner.split(':');
					adb.mode = pieces[0];
					return adb;
				})
			);
	};

	Adb.WebUSB.Transport.prototype.connectFastboot = function() {
		return this.getDevice({ classCode: 255, subclassCode: 66, protocolCode: 3 })
			.then(match => new Fastboot.WebUSB.Device(this, match))
			.then(fastboot => fastboot.send("getvar:max-download-size")
				.then(() => fastboot.receive()
					.then(response => {
						let cmd = decode_cmd(response.getUint32(0, true));
						if (cmd == "FAIL")
							throw new Error("Unable to open Fastboot");

						fastboot.get_cmd = r => decode_cmd(r.getUint32(0, true));
						fastboot.get_payload = r => r.buffer.slice(4);
						return fastboot;
					})
				)
			);
	};

	Adb.WebUSB.Device = function(transport, match) {
		this.transport = transport;
		this.max_payload = 4096;

		this.ep_in = get_ep_num(match.alt.endpoints, "in");
		this.ep_out = get_ep_num(match.alt.endpoints, "out");

		this.transport.reset();
	}

	Adb.WebUSB.Device.prototype.open = function(service) {
		return Adb.Stream.open(this, service);
	};

	Adb.WebUSB.Device.prototype.shell = function(command) {
		return Adb.Stream.open(this, "shell:" + command);
	};

	Adb.WebUSB.Device.prototype.tcpip = function(port) {
		return Adb.Stream.open(this, "tcpip:" + port);
	};

	Adb.WebUSB.Device.prototype.sync = function() {
		return Adb.Stream.open(this, "sync:");
	};

	Adb.WebUSB.Device.prototype.reboot = function(command="") {
		return Adb.Stream.open(this, "reboot:" + command);
	};

	Adb.WebUSB.Device.prototype.send = function(data) {
		if (typeof data === "string") {
			let encoder = new TextEncoder();
			let string_data = data;
			data = encoder.encode(string_data).buffer;
		}

		if (data != null && data.length > this.max_payload)
			throw new Error("data is too big: " + data.length + " bytes (max: " + this.max_payload + " bytes)");

		return this.transport.send(this.ep_out, data);
	};

	Adb.WebUSB.Device.prototype.receive = function(len) {
		return this.transport.receive(this.ep_in, len);
	};

	let Fastboot = {};
	Fastboot.WebUSB = {};

	Fastboot.WebUSB.Device = function(transport, match) {
		this.transport = transport;
		this.max_datasize = 64;

		this.ep_in = get_ep_num(match.alt.endpoints, "in");
		this.ep_out = get_ep_num(match.alt.endpoints, "out");
	};

	Fastboot.WebUSB.Device.prototype.send = function(data) {
		if (typeof data === "string") {
			let encoder = new TextEncoder();
			let string_data = data;
			data = encoder.encode(string_data).buffer;
		}

		if (data != null && data.length > this.max_datasize)
			throw new Error("data is too big: " + data.length + " bytes (max: " + this.max_datasize + " bytes)");

		return this.transport.send(this.ep_out, data);
	};

	Fastboot.WebUSB.Device.prototype.receive = function() {
		return this.transport.receive(this.ep_in, 64);
	};

	Adb.Message = function(cmd, arg0, arg1, data = null) {
		if (cmd.length != 4)
			throw new Error("Invalid command: '" + cmd + "'");

		this.cmd = cmd;
		this.arg0 = arg0;
		this.arg1 = arg1;
		this.length = (data === null) ? 0 : (typeof data === "string") ? data.length : data.byteLength;
		this.data = data;
	};

	Adb.Message.checksum = function(data_view) {
		let sum = 0;

		for (let i = 0; i < data_view.byteLength; i++)
			sum += data_view.getUint8(i);

		return sum & 0xffffffff;
	};

	Adb.Message.send = function(device, message) {
		let header = new ArrayBuffer(24);
		let cmd = encode_cmd(message.cmd);
		let magic = cmd ^ 0xffffffff;
		let data = null;
		let len = 0;
		let checksum = 0;

		if (Adb.Opt.debug)
			console.log(message);

		if (message.data != null) {
			if (typeof message.data === "string") {
				let encoder = new TextEncoder();
				data = encoder.encode(message.data).buffer;
			} else if (ArrayBuffer.isView(message.data)) {
				data = message.data.buffer;
			} else {
				data = message.data;
			}

			len = data.byteLength;
			if (Adb.Opt.use_checksum)
				checksum = Adb.Message.checksum(new DataView(data));

			if (len > device.max_payload)
				throw new Error("data is too big: " + len + " bytes (max: " + device.max_payload + " bytes)");
		}

		let view = new DataView(header);
		view.setUint32(0, cmd, true);
		view.setUint32(4, message.arg0, true);
		view.setUint32(8, message.arg1, true);
		view.setUint32(12, len, true);
		view.setUint32(16, checksum, true);
		view.setUint32(20, magic, true);

		let seq = device.send(header);
		if (len > 0)
			seq.then(() => device.send(data));
		return seq;
	};

	Adb.Message.receive = function(device) {
		return device.receive(24) //Adb.Opt.use_checksum ? 24 : 20)
			.then(response => {
				let cmd = response.getUint32(0, true);
				let arg0 = response.getUint32(4, true);
				let arg1 = response.getUint32(8, true);
				let len = response.getUint32(12, true);
				let check = response.getUint32(16, true);
				// Android seems to have stopped providing checksums
				if (Adb.use_checksum && response.byteLength > 20) {
					let magic = response.getUint32(20, true);

					if ((cmd ^ magic) != -1)
						throw new Error("magic mismatch");
				}

				cmd = decode_cmd(cmd);

				if (len == 0) {
					let message = new Adb.Message(cmd, arg0, arg1);
					if (Adb.Opt.debug)
						console.log(message);
					return message;
				}

				return device.receive(len)
					.then(data => {
						if (Adb.Opt.use_checksum && Adb.Message.checksum(data) != check)
							throw new Error("checksum mismatch");

						let message = new Adb.Message(cmd, arg0, arg1, data);
						if (Adb.Opt.debug)
							console.log(message);
						return message;
					});
			});
	};

	Adb.Message.prototype.send = function(device) {
		return Adb.Message.send(device, this);
	};

	Adb.Message.prototype.send_receive = function(device) {
		return this.send(device)
			.then(() => Adb.Message.receive(device));
	};

	Adb.SyncFrame = function(cmd, length = 0, data = null) {
		if (cmd.length != 4)
			throw new Error("Invalid command: '" + cmd + "'");

		this.cmd = cmd;
		this.length = length;
		this.data = data;
	};

	Adb.SyncFrame.send = function(stream, frame) {
		let data = new ArrayBuffer(8);
		let cmd = encode_cmd(frame.cmd);

		if (Adb.Opt.debug)
			console.log(frame);

		let view = new DataView(data);
		view.setUint32(0, cmd, true);
		view.setUint32(4, frame.length, true);

		return stream.send("WRTE", data);
	};

	Adb.SyncFrame.receive = function(stream) {
		return stream.receive()
			.then(response => {
				if (response.cmd == "WRTE") {
					let cmd = decode_cmd(response.data.getUint32(0, true));

					if (cmd == "OKAY" || cmd == "DATA" || cmd == "DONE" || cmd == "FAIL") {
						let len = response.data.getUint32(4, true);
						let data = new DataView(response.data.buffer.slice(8));

						if (len == 0 || data.byteLength >= len) {
							let frame = new Adb.SyncFrame(cmd, len, data);
							if (Adb.Opt.debug)
								console.log(frame);
							return frame;
						}

						return stream.send("OKAY")
							.then(() => stream.receive())
							.then(response => {
								if (response.data == null) {
									let frame = new Adb.SyncFrame(cmd);
									if (Adb.Opt.debug)
										console.log(frame);
									return frame;
								}

								let cmd2 = decode_cmd(response.data.getUint32(0, true));

								if (cmd2 == "OKAY" || cmd2 == "DATA" || cmd2 == "DONE" || cmd2 == "FAIL") {
									let len = response.data.getUint32(4, true);
									let data = new DataView(response.data.buffer.slice(8));

									if (len == 0 || data.byteLength >= len) {
										let frame = new Adb.SyncFrame(cmd2, len, data);
										if (Adb.Opt.debug)
											console.log(frame);
										return frame;
									}
								}

								if (response.data.byteLength < len)
									throw new Error("expected at least " + len + ", got " + response.data.byteLength);

								let frame = new Adb.SyncFrame(cmd, len, response.data);
								if (Adb.Opt.debug)
									console.log(frame);
								return frame;
							});
					}

					if (Adb.Opt.debug)
						console.log(response);
					if (Adb.Opt.dump)
						hexdump(response.data, "WRTE: ");

					throw new Error("invalid WRTE frame");
				}

				if (response.cmd == "OKAY") {
					let frame = new Adb.SyncFrame("OKAY");
					if (Adb.Opt.debug)
						console.log(frame);
					return frame;
				}

				if (Adb.Opt.debug)
					console.log(response);

				throw new Error("invalid SYNC frame");
			});
	};

	Adb.SyncFrame.prototype.send = function(stream) {
		return Adb.SyncFrame.send(stream, this);
	};

	Adb.SyncFrame.prototype.send_receive = function(stream) {
		return Adb.SyncFrame.send(stream, this)
			.then(() => Adb.SyncFrame.receive(stream));
	};

	Adb.Stream = function(device, service, local_id, remote_id) {
		this.device = device;
		this.service = service;
		this.local_id = local_id;
		this.remote_id = remote_id;
		this.cancel = null;
	};

	let next_id = 1;

	Adb.Stream.open = function(device, service) {
		let local_id = next_id++;
		let remote_id = 0;

		let m = new Adb.Message("OPEN", local_id, remote_id, "" + service + "\0");
		return m.send_receive(device)
			.then(function do_response(response) {
				if (response.arg1 != local_id)
					return Adb.Message.receive(device).then(do_response);

				if (response.cmd != "OKAY")
					throw new Error("Open failed");

				remote_id = response.arg0;

				if (Adb.Opt.debug) {
					console.log("Opened stream '" + service + "'");
					console.log(" local_id: 0x" + toHex32(local_id));
					console.log(" remote_id: 0x" + toHex32(remote_id));
				}

				return new Adb.Stream(device, service, local_id, remote_id);
			});
	};

	Adb.Stream.prototype.close = function() {
		if (this.local_id != 0) {
			this.local_id = 0;
			return this.send("CLSE");
		}

		if (Adb.Opt.debug) {
			console.log("Closed stream '" + this.service + "'");
			console.log(" local_id: 0x" + toHex32(this.local_id));
			console.log(" remote_id: 0x" + toHex32(this.remote_id));
		}

		this.service = "";
		this.remote_id = 0;
	};

	Adb.Stream.prototype.send = function(cmd, data=null) {
		let m = new Adb.Message(cmd, this.local_id, this.remote_id, data);
		return m.send(this.device);
	};

	Adb.Stream.prototype.receive = function() {
		return Adb.Message.receive(this.device)
			.then(response => {
				// remote's prospective of local_id/remote_id is reversed
				if (response.arg0 != 0 && response.arg0 != this.remote_id)
					throw new Error("Incorrect arg0: 0x" + toHex32(response.arg0) + " (expected 0x" + toHex32(this.remote_id) + ")");
				if (this.local_id != 0 && response.arg1 != this.local_id)
					throw new Error("Incorrect arg1: 0x" + toHex32(response.arg1) + " (expected 0x" + toHex32(this.local_id) + ")");
				return response;
			});
	};

	Adb.Stream.prototype.send_receive = function(cmd, data=null) {
		return this.send(cmd, data)
			.then(() => this.receive());
	};

	Adb.Stream.prototype.abort = function() {
		if (Adb.Opt.debug)
			console.log("aborting...");

		let self = this;
		return new Promise(function(resolve, reject) {
			self.cancel = function() {
				if (Adb.Opt.debug)
					console.log("aborted");
				self.cancel = null;
				resolve();
			};
		});
	};

	Adb.Stream.prototype.stat = function(filename) {
		let frame = new Adb.SyncFrame("STAT", filename.length);
		return frame.send_receive(this)
			.then(check_ok("STAT failed on " + filename))
			.then(response => {
				let encoder = new TextEncoder();
				return this.send_receive("WRTE", encoder.encode(filename))
			})
			.then(check_ok("STAT failed on " + filename))
			.then(response => {
				return this.receive().then(response =>
					this.send("OKAY").then(() =>
					response.data));
			})
			.then(response => {
				let id = decode_cmd(response.getUint32(0, true));
				let mode = response.getUint32(4, true);
				let size = response.getUint32(8, true);
				let time = response.getUint32(12, true);

				if (Adb.Opt.debug) {
					console.log("STAT: " + filename);
					console.log("id: " + id);
					console.log("mode: " + mode);
					console.log("size: " + size);
					console.log("time: " + time);
				}

				if (id != "STAT")
					throw new Error("STAT failed on " + filename);

				return { mode: mode, size: size, time: time };
			});
	};

	Adb.Stream.prototype.pull = function(filename) {
		let frame = new Adb.SyncFrame("RECV", filename.length);
		return frame.send_receive(this)
			.then(check_ok("PULL RECV failed on " + filename))
			.then(response => {
				let encoder = new TextEncoder();
				return this.send_receive("WRTE", encoder.encode(filename))
			})
			.then(check_ok("PULL WRTE failed on " + filename))
			.then(() => Adb.SyncFrame.receive(this))
			.then(check_cmd("DATA", "PULL DATA failed on " + filename))
			.catch(err => {
				return this.send("OKAY")
					.then(() => { throw err; });
			})
			.then(response => {
				return this.send("OKAY")
					.then(() => response);
			})
			.then(response => {
				let len = response.length;
				if (response.data.byteLength == len + 8) {
					let cmd = response.data.getUint32(len, true);
					let zero = response.data.getUint32(len + 4, true);
					if (decode_cmd(cmd) != "DONE" || zero != 0)
						throw new Error("PULL DONE failed on " + filename);

					return new DataView(response.data.buffer, 0, len);
				}

				if (response.data.byteLength > 64 * 1024) {
					let cmd = response.data.getUint32(response.data.byteLength - 8, true);
					let zero = response.data.getUint32(response.data.byteLength - 4, true);
					if (decode_cmd(cmd) != "DONE" || zero != 0)
						throw new Error("PULL DONE failed on " + filename);

					return new DataView(response.data.buffer, 0, response.data.byteLength - 8);
				}

				if (response.data.byteLength != len)
				  throw new Error("PULL DATA failed on " + filename + ": " + response.data.byteLength + "!=" + len);

				return this.receive()
					.then(response => {
						let cmd = response.data.getUint32(0, true);
						let zero = response.data.getUint32(4, true);
						if (decode_cmd(cmd) != "DONE" || zero != 0)
							throw new Error("PULL DONE failed on " + filename);
					})
					.then(() => this.send("OKAY"))
					.then(() => response.data);
			});
	};

	Adb.Stream.prototype.push_start = function(filename, mode) {
		let mode_str = mode.toString(10);
		let encoder = new TextEncoder();

		let frame = new Adb.SyncFrame("SEND", filename.length + 1 + mode_str.length);
		return frame.send_receive(this)
			.then(check_ok("PUSH failed on " + filename))
			.then(response => {
				return this.send("WRTE", encoder.encode(filename))
			})
			.then(() => Adb.SyncFrame.receive(this))
			.then(check_ok("PUSH failed on " + filename))
			.then(response => {
				return this.send("WRTE", encoder.encode("," + mode_str))
			})
			.then(() => Adb.SyncFrame.receive(this))
			.then(check_ok("PUSH failed on " + filename));
	};

	Adb.Stream.prototype.push_data = function(data) {
		if (typeof data === "string") {
			let encoder = new TextEncoder();
			let string_data = data;
			data = encoder.encode(string_data).buffer;
		} else if (ArrayBuffer.isView(data)) {
			data = data.buffer;
		}

		let frame = new Adb.SyncFrame("DATA", data.byteLength);
		return frame.send_receive(this)
			.then(check_ok("PUSH failed"))
			.then(response => {
				return this.send("WRTE", data);
			})
			.then(() => Adb.SyncFrame.receive(this))
			.then(check_ok("PUSH failed"));
	};

	Adb.Stream.prototype.push_done = function() {
		let frame = new Adb.SyncFrame("DONE", Math.round(Date.now() / 1000));
		return frame.send_receive(this)
			.then(check_ok("PUSH failed"))
			.then(response => {
				return Adb.SyncFrame.receive(this);
			})
			.then(check_ok("PUSH failed"))
			.then(response => {
				return this.send("OKAY");
			});
	};

	Adb.Stream.prototype.push = function(file, filename, mode, on_progress = null) {
		// we need reduced logging during the data transfer otherwise the console may explode
		let old_debug = Adb.Opt.debug;
		let old_dump = Adb.Opt.dump;
		Adb.Opt.debug = false;
		Adb.Opt.dump = false;

		// read the whole file
		return read_blob(file).then(data =>
			this.push_start(filename, mode).then(() => {
				let seq = Promise.resolve();
				let rem = file.size;
				let max = Math.min(0x10000, this.device.max_payload);
				while (rem > 0) {
					// these two are needed here for the closure
					let len = Math.min(rem, max);
					let count = file.size - rem;
					seq = seq.then(() => {
						if (this.cancel) {
							Adb.Opt.debug = old_debug;
							Adb.Opt.dump = old_dump;
							this.cancel();
							throw new Error("cancelled");
						}
						if (on_progress != null)
							on_progress(count, file.size);
						return this.push_data(data.slice(count, count + len));
					});
					rem -= len;
				}
				return seq.then(() => {
					Adb.Opt.debug = old_debug;
					Adb.Opt.dump = old_dump;
					return this.push_done();
				});
			}));
	};

	Adb.Stream.prototype.quit = function() {
		let frame = new Adb.SyncFrame("QUIT");
		return frame.send_receive(this)
			.then(check_ok("QUIT failed"))
			.then(response => {
				return this.receive();
			})
			.then(check_cmd("CLSE", "QUIT failed"))
			.then(response => {
				return this.close();
			});
	};

	function check_cmd(cmd, err_msg)
	{
		return function(response) {
			if (response.cmd == "FAIL") {
				let decoder = new TextDecoder();
				throw new Error(decoder.decode(response.data));
			}
			if (response.cmd != cmd)
				throw new Error(err_msg);
			return response;
		};
	}

	function check_ok(err_msg)
	{
		return check_cmd("OKAY", err_msg);
	}

	function paddit(text, width, padding)
	{
		let padlen = width - text.length;
		let padded = "";

		for (let i = 0; i < padlen; i++)
			padded += padding;

		return padded + text;
	}

	function toHex8(num)
	{
		return paddit(num.toString(16), 2, "0");
	}

	function toHex16(num)
	{
		return paddit(num.toString(16), 4, "0");
	}

	function toHex32(num)
	{
		return paddit(num.toString(16), 8, "0");
	}

	function toB64(buffer)
	{
		return btoa(new Uint8Array(buffer).reduce((s, b) => s + String.fromCharCode(b), ""));
	}

	function hexdump(view, prefix="")
	{
		let decoder = new TextDecoder();

		for (let i = 0; i < view.byteLength; i += 16) {
			let max = (view.byteLength - i) > 16 ? 16 : (view.byteLength - i);
			let row = prefix + toHex16(i) + " ";
			let j;

			for (j = 0; j < max; j++)
				row += " " + toHex8(view.getUint8(i + j));
			for (; j < 16; j++)
				row += "   ";

			row += " | " + decoder.decode(new DataView(view.buffer, i, max));
			console.log(row);
		}
	}

	function get_ep_num(endpoints, dir, type = "bulk")
	{
		let e, ep;
		for (e in endpoints)
			if (ep = endpoints[e], ep.direction == dir && ep.type == type)
				return ep.endpointNumber;
		if (Adb.Opt.debug)
			console.log(endpoints);
		throw new Error("Cannot find " + dir + " endpoint");
	}

	function encode_cmd(cmd)
	{
		let encoder = new TextEncoder();
		let buffer = encoder.encode(cmd).buffer;
		let view = new DataView(buffer);
		return view.getUint32(0, true);
	}

	function decode_cmd(cmd)
	{
		let decoder = new TextDecoder();
		let buffer = new ArrayBuffer(4);
		let view = new DataView(buffer);
		view.setUint32(0, cmd, true);
		return decoder.decode(buffer);
	}

	function generate_key()
	{
		let extractable = Adb.Opt.dump;

		return crypto.subtle.generateKey({
					name: "RSASSA-PKCS1-v1_5",
					modulusLength: Adb.Opt.key_size,
					publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
					hash: { name: "SHA-1" }
				}, extractable, [ "sign", "verify" ])
			.then(key => {
				if (!Adb.Opt.dump)
					return key;

				return privkey_dump(key)
					.then(() => pubkey_dump(key))
					.then(() => key);
			});
	}

	function do_auth(adb, keys, key_idx, token, do_auth_response, auth_user_notify)
	{
		let AUTH_SIGNATURE = 2;
		let AUTH_RSAPUBLICKEY = 3;

		if (key_idx < keys.length) {
			let slot = keys.length - key_idx - 1;
			let key = keys[slot];
			let seq = Promise.resolve();

			if (Adb.Opt.debug)
				console.log("signing with key " + slot + "...");
			if (Adb.Opt.dump) {
				seq = seq.then(() => privkey_dump(key))
					.then(() => pubkey_dump(key))
					.then(() => hexdump(new DataView(token)))
					.then(() => console.log("-----BEGIN TOKEN-----\n" + toB64(token) + "\n-----END TOKEN-----"));
			}

			return seq.then(() => crypto.subtle.sign({ name: "RSASSA-PKCS1-v1_5" }, key.privateKey, token))
				.then(signed => {
					if (Adb.Opt.dump)
						console.log("-----BEGIN SIGNATURE-----\n" + toB64(signed) + "\n-----END SIGNATURE-----");

					let m = new Adb.Message("AUTH", AUTH_SIGNATURE, 0, signed);
					return m.send_receive(adb).then(do_auth_response);
				});
		}

		let seq = null;
		let dirty = false;

		if (Adb.Opt.reuse_key !== false) {
			key_idx = Adb.Opt.reuse_key === true ? -1 : Adb.Opt.reuse_key;

			if (key_idx < 0)
				key_idx += keys.length;

			if (key_idx >= 0 && key_idx < keys.length) {
				if (Adb.Opt.debug)
					console.log("reusing key " + key_idx + "...");
				seq = Promise.resolve(keys[key_idx]);
			}
		}

		if (seq === null) {
			if (Adb.Opt.debug)
				console.log("generating key " + key_idx + " (" + Adb.Opt.key_size + " bits)...");

			seq = generate_key();
			dirty = true;
		}

		return seq.then(key => {
			return crypto.subtle.exportKey("spki", key.publicKey)
				.then(pubkey => {
					let m = new Adb.Message("AUTH", AUTH_RSAPUBLICKEY, 0, toB64(pubkey) + "\0");
					return m.send(adb);
				})
				.then(() => {
					if (Adb.Opt.debug)
						console.log("waiting for user confirmation...");
					if (auth_user_notify != null)
						auth_user_notify(key.publicKey);
					return Adb.Message.receive(adb);
				})
				.then(response => {
					// return response;
					if (response.cmd != "CNXN")
						return response;
					if (!dirty)
						return response;

					keys.push(key);
					return db.then(db => store_key(db, key))
						.then(() => response);
				});
		});
	}

	function privkey_dump(key)
	{
		if (!key.privateKey.extractable) {
			console.log("cannot dump the private key, it's not extractable");
			return;
		}

		return crypto.subtle.exportKey("pkcs8", key.privateKey)
			.then(privkey => console.log("-----BEGIN PRIVATE KEY-----\n" + toB64(privkey) + "\n-----END PRIVATE KEY-----"));
	}

	function pubkey_dump(key)
	{
		if (!key.publicKey.extractable) {
			console.log("cannot dump the public key, it's not extractable");
			return;
		}

		return crypto.subtle.exportKey("spki", key.publicKey)
			.then(pubkey => console.log("-----BEGIN PUBLIC KEY-----\n" + toB64(pubkey) + "\n-----END PUBLIC KEY-----"));
	}

	function read_blob(blob)
	{
		return new Promise(function(resolve, reject) {
			let reader = new FileReader();
			reader.onload = e => resolve(e.target.result);
			reader.onerror = e => reject(e.target.error);
			reader.readAsArrayBuffer(blob);
		});
	}

	function promisify(request, onsuccess = "onsuccess", onerror = "onerror")
	{
		return new Promise(function (resolve, reject) {
			request[onsuccess] = event => resolve(event.target.result);
			request[onerror] = event => reject(event.target.errorCode);
		});
	}

	function init_db()
	{
		let req = window.indexedDB.open("WebADB", 1);

		req.onupgradeneeded = function (event) {
			let db = event.target.result;

			if (Adb.Opt.debug)
				console.log("DB: migrating from version " + event.oldVersion + " to " + event.newVersion + "...");

			if (db.objectStoreNames.contains('keys')) {
				if (Adb.Opt.debug)
					console.log("DB: deleting old keys...");

				db.deleteObjectStore('keys');
			}

			db.createObjectStore("keys", { autoIncrement: true });
		};

		return promisify(req);
	}

	function load_keys(db)
	{
		let transaction = db.transaction("keys");
		let store = transaction.objectStore("keys");
		let cursor = store.openCursor();
		let keys = [];

		cursor.onsuccess = function (event) {
			let result = event.target.result;
			if (result != null) {
				keys.push(result.value);
				result.continue();
			}
		};

		return promisify(transaction, "oncomplete").then(function (result) {
			if (Adb.Opt.debug)
				console.log("DB: loaded " + keys.length + " keys");
			return keys;
		});
	}

	function store_key(db, key)
	{
		let transaction = db.transaction("keys", "readwrite");
		let store = transaction.objectStore('keys');
		let request = store.put(key);

		return promisify(request).then(function (result) {
			if (Adb.Opt.debug)
				console.log("DB: stored key " + (result - 1));
			return result;
		});
	}

	function clear_keys(db)
	{
		let transaction = db.transaction("keys", "readwrite");
		let store = transaction.objectStore("keys");
		let request = store.clear();

		return promisify(request).then(function (result) {
			if (Adb.Opt.debug)
				console.log("DB: removed all the keys");
			return result;
		});
	}

	return Adb;
}));


/***/ }),

/***/ "./src/ConnectionManager.js":
/*!**********************************!*\
  !*** ./src/ConnectionManager.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ConnectionManager
/* harmony export */ });
/* harmony import */ var webadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webadb */ "./node_modules/webadb/webadb.js");
/* harmony import */ var webadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webadb__WEBPACK_IMPORTED_MODULE_0__);
;

/**
 * All possible states for the ConnectionManager
 */
const ConnectionManagerState = Object.freeze({
    DISCONNECTED:       0,
    USB_CONNECTED:      1,
    ADB_CONNECTED:      2,
    EXECUTING_CMD:      3,
});

class ConnectionManager {

    constructor() {
        this._webUsbConnection = null;
        this._adbConnection = null;
        this._state = ConnectionManagerState.DISCONNECTED;
        this._textDecoder = new TextDecoder(); // used for decoding all received command outputs

        // Bind methods to this class so we can call them correctly from eventhandlers
        this.initializeUsbConnection = this.initializeUsbConnection.bind(this);
        this.connectAdb = this.connectAdb.bind(this);
        this.closeConnection = this.closeConnection.bind(this);
        this.runShellCmd = this.runShellCmd.bind(this);
        this.getDeviceStats = this.getDeviceStats.bind(this);
        this.disablePackage = this.disablePackage.bind(this);
        this.enablePackage = this.enablePackage.bind(this);
        this.listDisabledPackages = this.listDisabledPackages.bind(this);
    };

    get state() {
        return this._state;
    }

    /**
     * Prompt user with chrome dialog to select the USB device.
     * The list is filtered to only return those with:
     *      classCode = 255, subclassCode = 66, protocolCode = 1 (ADB) or 3 (fastboot)
     * Then connects to it at the USB level.
     */
    async initializeUsbConnection() {

        if (this._state !== ConnectionManagerState.DISCONNECTED) {
            console.warn("A USB connection has already been established");
            return;
        }
        
        try {
            // Prompt user to select adb device in chrome dialogue
            this._webUsbConnection = await webadb__WEBPACK_IMPORTED_MODULE_0___default().open("WebUSB"); // "WebUSB" is the only allowed transport here
            this._state = ConnectionManagerState.USB_CONNECTED;
            console.info("Successfully created USB Connection");
        } catch (error) {
            console.warn(`No ADB device selected. Error: ${error}`);
            return;
        }
    };

    /**
     * Prompts the user on the watch to allow this browser to create an ADB connection.
     */
    async connectAdb(watchPromptCallback = (productName) => {
        console.warn(`Accept the ADB connection on your ${productName} watch`);
    }) {

        // Exit with an appropriate warning if not in correct state
        switch (this._state) {
            case ConnectionManagerState.ADB_CONNECTED:
                console.warn("An ADB connection has already been established");
                return;
            case ConnectionManagerState.DISCONNECTED:
                console.warn("A USB connection must be established first");
                return;
            default:
                break;
        }
        
        if (!this._webUsbConnection.isAdb()) {
            console.error("Cannot initialize an ADB connection. The connected device is not ADB capable");
        }

        try {
            // Connect to ADB with banner = "host::". IDK what this is but all the examples use this
            this._adbConnection = await this._webUsbConnection.connectAdb("host::", () => {
                watchPromptCallback(this._webUsbConnection.device.productName);
            });
            this._state = ConnectionManagerState.ADB_CONNECTED;
            console.info(`Successfully established ADB connection to ${this._webUsbConnection.device.productName}`);
        } catch (error) {
            this._state = ConnectionManagerState.USB_CONNECTED;
            console.error(`Failed to create an ADB connection: Error: ${error}`);    
        }
    };

    /**
     * Close the ADB and USB connection
     */
    async closeConnection() {

        if (this._state === ConnectionManagerState.DISCONNECTED) {
            console.warn("Tried to disconnect a device that wasn't connected");
            return;
        }

        if (this._webUsbConnection) {
            this._webUsbConnection.close();
            this._state = ConnectionManagerState.DISCONNECTED;
            console.info("Successfully terminated the USB Connection");
        }
    };

    /**
     * Runs the 'cmd' on the watch and returns the output.
     * 
     * Only one concurrent shell cmd can execute at a time. Trying to run another while one
     * is currently under way will raise an exception.
     * 
     * @param {string} cmd shell Command to run on the watch over ADB connection
     * @throws {string} when the ConnectionManagers state is not ADB_CONNECTED
     */
    async runShellCmd(cmd) {
        if (this._state === ConnectionManagerState.EXECUTING_CMD) {
            throw "A shell command is currently executing. Cannot start another until the current one finishes";
        } else if (this._state !== ConnectionManagerState.ADB_CONNECTED) {
            throw "Cannot run shell commands without an active ADB connection";
        }

        // Set the state to gaurd against concurrent Shell cmd execution
        this._state = ConnectionManagerState.EXECUTING_CMD;

        // TODO: Add some error handling around this
        let shell = await this._adbConnection.shell(cmd);
        let responseBundle = await shell.receive();
        shell.close(); // Without this successive shellCmd's can throw an exception.

        let output = responseBundle.data !== null ?
                this._textDecoder.decode(responseBundle.data) : "";
                
        console.debug(`cmd: ${cmd}\noutput: ${output}`);

        // Allow new shell commands to be sent
        this._state = ConnectionManagerState.ADB_CONNECTED;

        return output;
    }

    /**
     * Queries the connected device for:
     *  - model
     *  - serial number
     *  - Android version
     *  - battery percentage
     * 
     * @returns an object where the keys are those above and values are that queried from device
     */
    async getDeviceStats() {

        /**
         * Note: from testing i realised that each of these asyncs operations
         * must complete synchronously for it to work. I can't start all commands
         * then wait on the results of them all at once. 
         */

        console.debug("Entered getDeviceStats()");

        /**
         * This cmd returns:
         *
         * $ getprop ro.product.model                                                                                                                                                                  
         * Ticwatch E
         */
        let model = await this.runShellCmd("getprop ro.product.model")
                .then(result => result.trim());

        /**
         * This cmd returns:
         * 
         * $ getprop ro.serialno                                                                                                                                                                       
         * M6600TB1234F
         */
        let serialNo = await this.runShellCmd("getprop ro.serialno")
                .then(result => result.trim());

        /**
         * This cmd returns:
         * 
         * $ getprop ro.build.version.release                                                                                                                                                          
         * 8.0.0
         */
        let androidVersion = await this.runShellCmd("getprop ro.build.version.release")
                .then(result => result.trim());

        /**
         * This cmd returns:
         * 
         * $ dumpsys battery | grep level                                                                                                                                                            
         *   level: 100
         * 
         * The value is then extracted.
         */
        let batteryPercent = await this.runShellCmd("dumpsys battery | grep level")
                .then(value => {
                    const items = value.split(" ");
                    return items[items.length - 1].trim();
                });

        return {
            model: model,
            serialNo: serialNo,
            androidVersion: androidVersion,
            batteryPercent: batteryPercent
        };
    }

    /**
     * Disables the package on the watch by running a cmd of the form:
     * 
     * $ pm disable-user --user 0 <packageName>
     * 
     * @param {string} packageName the package to disable on the watch
     */
    async disablePackage(packageName) {

        console.debug("Entered 'disablePackage()");
        
        const cmd = `pm disable-user --user 0 ${packageName}`;

        console.log("packageName is: ", packageName);

        // NOTE: For testing the UI's response when disabling a package
        //       fails, you can uncomment the following
        // if (packageName === "com.mobvoi.wear.health.aw") {
        //     throw "i deliberatly fail this just to confirm it works in my testing";
        // }
 
        await this.runShellCmd(cmd);
    }

    /**
     * Enables the package on the watch by running a cmd of the form:
     * 
     * $ pm enable <packageName>
     * 
     * @param {string} packageName the package to enable on the watch
     */
    async enablePackage(packageName) {
        console.debug("Entered 'enablePackage()");

        const cmd = `pm enable ${packageName}`;

        await this.runShellCmd(cmd);
    }

    /**
     * Lists all disabled packages on the watch by running:
     * 
     * $ pm list packages -d
     */
    async listDisabledPackages() {
        console.debug("Entered 'listDisabledPackages()");

        const cmd = "pm list packages -d";

        let result = await this.runShellCmd(cmd);

        return result;
    }
};

/***/ }),

/***/ "./src/images/cross.svg":
/*!******************************!*\
  !*** ./src/images/cross.svg ***!
  \******************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5e99a2d5b90c2fdcf408.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ "./src/style.less");
/* harmony import */ var _ConnectionManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectionManager */ "./src/ConnectionManager.js");
/* harmony import */ var _images_cross_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cross.svg */ "./src/images/cross.svg");
; // Js will dynamically add the CSS transpilation in the <head> of the webpage



const ConnectionButtonMode = Object.freeze({
    CONNECT:         0,
    DISCONNECT:      1,
});

// Manages the connection state and allows for communication with the watch
const connectionManager = new _ConnectionManager__WEBPACK_IMPORTED_MODULE_1__.default;

/**
 * Returns an array of objects with properties:
 * 
 * {
 *      packageName,
 *      tableDataElement
 * }
 * 
 */
function getTablePackageElements() {
    const tableDataElements = [...document.querySelectorAll("#package-table td")]; // Spread the StaticNodeList to convert to Array so map can be used below
    return tableDataElements.map(x => ({packageName: x.textContent.trim(), tableDataElement: x}));
}

/**
 * Connects to the watch first over USB which causes the browser to
 * prompt the user for a USB device. Once accepted, displays a modal
 * prompting the user to accept the ADB connection on the watch. Next,
 * fetches the watches stats and displays them in the stats section.
 * Changes the connection button to "disconnect" mode
 */
async function connect() {
    await connectionManager.initializeUsbConnection();

    // Show the modal telling the user to accept ADB connection on watch
    setModalVisibility(true);

    // Await users confirmation to connect over ADB then connect
    await connectionManager.connectAdb();

    // TODO: handle the case where the user does not accept. Also, sometimes the
    // watch just doesn't even show it or it dissapears quickly

    // Hide the modal
    setModalVisibility(false);

    let deviceStats = await connectionManager.getDeviceStats()
            .then(stats => {
                console.log("Got device stats from watch: ", stats);
                return stats;
            }).catch(err => {
                // TODO: display this in the stats container
                console.error("Failed to get device stats from watch. Error: ", err);
            });

    // Populate the device stats
    document.getElementById("model_status").textContent = deviceStats.model;
    document.getElementById("serialno_status").textContent = deviceStats.serialNo;
    document.getElementById("android_status").textContent = deviceStats.androidVersion;
    document.getElementById("battery_status").textContent = `${deviceStats.batteryPercent} %`;

    // Hide the text stats container message and show the retrieved stats
    document.querySelector("#watch-stats-container > .watch-stats-container__text").classList.add("watch-stats-container__text--hidden");
    document.querySelector("#watch-stats-container > .watch-stats-container__grid").classList.remove("watch-stats-container__grid--hidden");

    changeConnectionButtonTo(ConnectionButtonMode.DISCONNECT);

    setRunButtonState(true); // enable it
}

/**
 * Disables the packages on the watch one-by-one then reports the 
 * status in the package table.
 */
async function run() {

    // Disable the run button immediately - don't want it being pressed again while this operation
    // is underway
    setRunButtonState(false);

    // Read the labels out of the table and DOM elements
    const tablePackageElements = getTablePackageElements();

    // Disable each package individually and display the result in the DOM
    for (const packageElement of tablePackageElements) {
        const packageName = packageElement.packageName;

        // Disable the package
        let success = true;
        try {
            await connectionManager.disablePackage(packageName);
        } catch (err) {
            success = false;
        }

        let statusImg = packageElement.tableDataElement.querySelector("img");
        let packageLabel = packageElement.tableDataElement.querySelector("span");

        // Set the icon accordingly (defaults to a tick/success so only change on fail)
        if (!success) {
            statusImg.setAttribute("src", _images_cross_svg__WEBPACK_IMPORTED_MODULE_2__);
        }

        // TODO: probably should put a tooltip with fail message on icon if failed

        // Unhide the status img in the dom - it appears on the right of the row
        statusImg.classList.remove("row__status-icon--hidden");

        // Shift the label from the center to the left
        packageLabel.classList.add("row__package-label--move-left");
    }
}

/**
 * Closes the ADB connection to the watch. Clears the stats.
 * Changes the connection button to "connect" mode.
 */
async function disconnect() {
    await connectionManager.closeConnection();

    // Clear the stats and show the no device connected message
    document.querySelector("#watch-stats-container > .watch-stats-container__text").classList.remove("watch-stats-container__text--hidden");
    document.querySelector("#watch-stats-container > .watch-stats-container__grid").classList.add("watch-stats-container__grid--hidden");

    // Remove the status icons from the table and slide the text back to the center
    const tablePackageElements = getTablePackageElements();
    for (let packageElement of tablePackageElements) {
        let statusImg = packageElement.tableDataElement.querySelector("img");
        let packageLabel = packageElement.tableDataElement.querySelector("span");
        statusImg.classList.add("row__status-icon--hidden");
        packageLabel.classList.remove("row__package-label--move-left");
    }

    changeConnectionButtonTo(ConnectionButtonMode.CONNECT);

    setRunButtonState(false); // disable it
}

/**
 * Changes the connection button to the state indicated by
 * newButtonState.
 * 
 * Binds the click listener for the indicated state.
 * 
 * @param {number} newButtonState state to set the connection button to 
 */
function changeConnectionButtonTo(newButtonState) {
    const connectionBtn = document.getElementById("connection-btn");

    // Clear any current event listeners
    connectionBtn.removeEventListener("click", connect);
    connectionBtn.removeEventListener("click", disconnect);

    switch (newButtonState) {
        case ConnectionButtonMode.CONNECT:
            connectionBtn.textContent = "Connect"; // Set button label
            connectionBtn.addEventListener("click", connect);
            break;
        case ConnectionButtonMode.DISCONNECT:
            connectionBtn.textContent = "Disconnect"; // Set button label
            connectionBtn.addEventListener("click", disconnect);
            break;
        default:
            throw `Invalid button state '${newButtonState}' for the connection button`;
    }
}

/**
 * Disables or enables the button
 * 
 * @param {boolean} shouldEnable true enables the button, false disables it
 */
function setRunButtonState(shouldEnable) {
    const runBtn = document.getElementById("run-btn");

    // Clear any event listeners
    runBtn.removeEventListener("click", run);

    // Clear any enable/disable styles
    runBtn.classList.remove("button-container__btn--enabled");
    runBtn.classList.remove("button-container__btn--disabled");

    if (shouldEnable) {
        runBtn.classList.add("button-container__btn--enabled");
        runBtn.addEventListener("click", run);
    } else {
        runBtn.classList.add("button-container__btn--disabled");
    }
}

/**
 * Shows/hides the modal
 * 
 * @param {boolean} shouldShow true to show the modal, false to hide it
 */
function setModalVisibility(shouldShow) {
    const modal = document.getElementById("modal");
    
    // Clear any existing modal visibility classes
    modal.classList.remove("modal--visible");

    if (shouldShow) {
        modal.classList.add("modal--visible");
    } // else it is hidden by default
}

// Bind click listeners
changeConnectionButtonTo(ConnectionButtonMode.CONNECT);
setRunButtonState(false); // Start off as disabled

// Make sure the modal is hidden by default
setModalVisibility(false);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItYXBwLy4vc3JjL3N0eWxlLmxlc3MiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYi1hcHAvLi9zcmMvc3R5bGUubGVzcz9lYTY4Iiwid2VicGFjazovL3dlYi1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL25vZGVfbW9kdWxlcy93ZWJhZGIvd2ViYWRiLmpzIiwid2VicGFjazovL3dlYi1hcHAvLi9zcmMvQ29ubmVjdGlvbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYi1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYi1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYi1hcHAvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLENBQXNIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw2U0FBNlMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDZHQUE2RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDJHQUEyRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDJHQUEyRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLHdHQUF3RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLEtBQUssMENBQTBDLEdBQUcsUUFBUSw0QkFBNEIsR0FBRyxXQUFXLGtCQUFrQixvQkFBb0IsWUFBWSxhQUFhLFdBQVcsNEJBQTRCLGlCQUFpQixxQkFBcUIsc0JBQXNCLG9CQUFvQix3QkFBd0IsNEJBQTRCLGVBQWUsR0FBRyxrQkFBa0Isb0JBQW9CLHFDQUFxQyx1QkFBdUIsb0JBQW9CLGtCQUFrQix1QkFBdUIsd0JBQXdCLHNCQUFzQixHQUFHLHlDQUF5QyxvQkFBb0Isc0JBQXNCLHlCQUF5QiwwQkFBMEIsS0FBSyxHQUFHLHdDQUF3QyxvQkFBb0Isc0JBQXNCLHlCQUF5QiwwQkFBMEIsS0FBSyxHQUFHLG9CQUFvQix1QkFBdUIsR0FBRyxnQ0FBZ0MsMEJBQTBCLHFCQUFxQix1QkFBdUIsdUJBQXVCLHlCQUF5QixlQUFlLGVBQWUsR0FBRyxpQ0FBaUMsc0JBQXNCLG9CQUFvQixlQUFlLGNBQWMsR0FBRyx5RUFBeUUsc0JBQXNCLHVCQUF1QixLQUFLLGtDQUFrQyxxQkFBcUIsdUJBQXVCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLEtBQUssbUNBQW1DLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHVCQUF1Qix3QkFBd0IseUJBQXlCLEtBQUssR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsa0NBQWtDLGtCQUFrQix3QkFBd0IsOEJBQThCLHdCQUF3Qiw4QkFBOEIsd0JBQXdCLEdBQUcsaUNBQWlDLGtCQUFrQixrQ0FBa0Msd0JBQXdCLHdCQUF3QixHQUFHLHlCQUF5QixrQkFBa0Isd0JBQXdCLGtDQUFrQywwQkFBMEIsaUJBQWlCLGlCQUFpQixzQkFBc0IsdUJBQXVCLEdBQUcsNkNBQTZDLCtCQUErQixHQUFHLGtCQUFrQixvQkFBb0Isc0JBQXNCLHdCQUF3QixrQkFBa0IsR0FBRyw4QkFBOEIsMEJBQTBCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLHNDQUFzQyw0QkFBNEIsR0FBRyxxQkFBcUIsb0JBQW9CLHNCQUFzQixpQ0FBaUMsMEJBQTBCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2QixtQkFBbUIsc0JBQXNCLEdBQUcsNEJBQTRCLGdCQUFnQixpQkFBaUIscUJBQXFCLHNCQUFzQixHQUFHLDRCQUE0QixvQkFBb0Isc0JBQXNCLG1CQUFtQixzQkFBc0Isd0JBQXdCLEdBQUcsMEJBQTBCLGtCQUFrQixpQkFBaUIsd0JBQXdCLGlCQUFpQixpQkFBaUIsbUJBQW1CLHNCQUFzQixvQkFBb0IsR0FBRyxnQ0FBZ0MsZUFBZSxHQUFHLG1DQUFtQyw4QkFBOEIsOEJBQThCLHlEQUF5RCxHQUFHLHlDQUF5Qyw4QkFBOEIsR0FBRywwQ0FBMEMsaUJBQWlCLEdBQUcsb0NBQW9DLDhCQUE4Qiw4QkFBOEIsR0FBRyx3QkFBd0IsZ0JBQWdCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLHVDQUF1QyxrQkFBa0IsNEJBQTRCLHdCQUF3Qiw4QkFBOEIsd0JBQXdCLGtCQUFrQixpQkFBaUIsd0JBQXdCLHVCQUF1QixHQUFHLHdDQUF3Qyx5Q0FBeUMsbUJBQW1CLEtBQUssR0FBRyx3Q0FBd0MseUNBQXlDLG1CQUFtQixLQUFLLEdBQUcsdUJBQXVCLDhCQUE4Qix3QkFBd0IsOEJBQThCLHdCQUF3Qix3QkFBd0IsaUJBQWlCLEdBQUcsd0NBQXdDLHlCQUF5QixtQkFBbUIsS0FBSyxHQUFHLHdDQUF3Qyx5QkFBeUIsbUJBQW1CLEtBQUssR0FBRyxvSEFBb0gsdUJBQXVCLGVBQWUsZ0NBQWdDLHNCQUFzQixvQkFBb0Isa0JBQWtCLEdBQUcsd0NBQXdDLHVCQUF1QixlQUFlLEdBQUcsc0NBQXNDLG1CQUFtQixHQUFHLHVDQUF1QyxtQkFBbUIsR0FBRyxnQ0FBZ0Msb0JBQW9CLEdBQUcsd0NBQXdDLGtDQUFrQyxzQkFBc0IsS0FBSyxHQUFHLHdDQUF3QyxrQ0FBa0Msc0JBQXNCLEtBQUssR0FBRyxnQ0FBZ0MsdUJBQXVCLGVBQWUsZ0NBQWdDLGdCQUFnQixpQkFBaUIsa0JBQWtCLHFDQUFxQyxrQ0FBa0Msd0JBQXdCLHdCQUF3QixHQUFHLHdDQUF3Qyx1QkFBdUIsZUFBZSxHQUFHLGVBQWUsc0JBQXNCLEdBQUcsZ0JBQWdCLG9CQUFvQixzQkFBc0IsR0FBRyx3Q0FBd0Msa0JBQWtCLHNCQUFzQixLQUFLLEdBQUcsd0NBQXdDLGtCQUFrQixzQkFBc0IsS0FBSyxHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyx3Q0FBd0Msa0JBQWtCLHNCQUFzQixLQUFLLEdBQUcsd0NBQXdDLGtCQUFrQixzQkFBc0IsS0FBSyxHQUFHLGtCQUFrQiw4QkFBOEIsbUJBQW1CLGtCQUFrQixvQkFBb0IsR0FBRyxlQUFlLGtCQUFrQix3QkFBd0Isa0JBQWtCLGtDQUFrQyxpQkFBaUIsdUJBQXVCLEdBQUcsdUJBQXVCLG9CQUFvQixzQkFBc0IsdUJBQXVCLGtDQUFrQyx1QkFBdUIsZ0JBQWdCLEdBQUcsa0NBQWtDLGFBQWEsR0FBRyx3Q0FBd0MseUJBQXlCLHNCQUFzQix3QkFBd0IseUJBQXlCLEtBQUssR0FBRyx3Q0FBd0MseUJBQXlCLHNCQUFzQix1QkFBdUIsd0JBQXdCLEtBQUssR0FBRyxxQkFBcUIsdUJBQXVCLGVBQWUsZ0JBQWdCLGlCQUFpQix1QkFBdUIsb0NBQW9DLGVBQWUsR0FBRyw2QkFBNkIsdUJBQXVCLGVBQWUsR0FBRyx3Q0FBd0MsdUJBQXVCLHlCQUF5QixLQUFLLEdBQUcsd0NBQXdDLHVCQUF1QixrQkFBa0Isd0JBQXdCLEtBQUssR0FBRyxVQUFVLGtCQUFrQixvQkFBb0IsWUFBWSxXQUFXLGVBQWUsZ0JBQWdCLGlCQUFpQiwrQkFBK0IsNEJBQTRCLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0IsR0FBRyxnQkFBZ0Isb0JBQW9CLHNCQUFzQix1QkFBdUIsOEJBQThCLG1CQUFtQixvQkFBb0IsOEJBQThCLHdCQUF3QixrQkFBa0IsR0FBRyx5Q0FBeUMsa0JBQWtCLHNCQUFzQixvQkFBb0IscUJBQXFCLHdCQUF3QixLQUFLLEdBQUcsd0NBQXdDLGtCQUFrQixzQkFBc0Isb0JBQW9CLHFCQUFxQix3QkFBd0IsS0FBSyxHQUFHLHdDQUF3QyxrQkFBa0Isc0JBQXNCLG9CQUFvQixxQkFBcUIsd0JBQXdCLEtBQUssR0FBRyx3Q0FBd0Msa0JBQWtCLHNCQUFzQixvQkFBb0IscUJBQXFCLHdCQUF3QixLQUFLLEdBQUcsU0FBUyx3SEFBd0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxtREFBbUQsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0seVNBQXlTLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLGdDQUFnQyw4QkFBOEIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsNkJBQTZCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwrQkFBK0IsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLG1LQUFtSyxpQkFBaUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQiw4SEFBOEgsc0JBQXNCLHNCQUFzQixzQkFBc0Isc0JBQXNCLHNCQUFzQixzQkFBc0Isc0JBQXNCLHNCQUFzQixzQkFBc0Isc0JBQXNCLHlJQUF5SSw4QkFBOEIsNkJBQTZCLDhCQUE4QixtR0FBbUcsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxxQkFBcUIsS0FBSyw0Q0FBNEMsZ0RBQWdELFlBQVksOEJBQThCLEdBQUcsZUFBZSxvQkFBb0Isc0JBQXNCLGNBQWMsZUFBZSxhQUFhLDhCQUE4QixtQkFBbUIsdUJBQXVCLHdCQUF3QixzQkFBc0IsMEJBQTBCLHNHQUFzRyxpQkFBaUIsa0NBQWtDLG1DQUFtQyxzREFBc0QsNkJBQTZCLDBCQUEwQix3QkFBd0IsbUNBQW1DLG9DQUFvQyw0QkFBNEIsa0hBQWtILHVDQUF1Qyx1Q0FBdUMsd0NBQXdDLFdBQVcsNEtBQTRLLHVDQUF1Qyx1Q0FBdUMsd0NBQXdDLFdBQVcsT0FBTyxHQUFHLHdCQUF3QiwyQkFBMkIsaUhBQWlILHVDQUF1Qyx1QkFBdUIsZ0NBQWdDLGlDQUFpQyw2QkFBNkIsNkNBQTZDLHFDQUFxQyxnR0FBZ0cscUJBQXFCLGdFQUFnRSw0QkFBNEIsNENBQTRDLDBCQUEwQix3Q0FBd0Msb0JBQW9CLGlFQUFpRSxnSkFBZ0osZUFBZSwwR0FBMEcsV0FBVywyQkFBMkIsNkJBQTZCLCtCQUErQix5RUFBeUUsaUNBQWlDLHFDQUFxQyxXQUFXLDBCQUEwQiw0QkFBNEIscUNBQXFDLGtDQUFrQywrQkFBK0IseUVBQXlFLGlDQUFpQyxXQUFXLE9BQU8sR0FBRyxtQkFBbUIsdUJBQXVCLG9DQUFvQyxPQUFPLDhCQUE4Qix3QkFBd0IsOEJBQThCLHFEQUFxRCxvQ0FBb0MsK0NBQStDLG9DQUFvQyxPQUFPLDZCQUE2Qix3QkFBd0Isd0NBQXdDLDhCQUE4QixvQ0FBb0MsT0FBTyxxQkFBcUIsNkVBQTZFLDhCQUE4Qix3Q0FBd0MsZ0NBQWdDLHNEQUFzRCxvRUFBb0UsNEJBQTRCLDZEQUE2RCxxS0FBcUssMENBQTBDLFdBQVcsT0FBTyxHQUFHLHNCQUFzQiwrQkFBK0IsOEJBQThCLDBCQUEwQixvQkFBb0IsK0RBQStELG1JQUFtSSxRQUFRLHNCQUFzQixrSkFBa0osT0FBTywrQkFBK0IsaUlBQWlJLFdBQVcsa0NBQWtDLHlCQUF5QiwrQkFBK0IsOEJBQThCLG1DQUFtQyw0QkFBNEIsZ0dBQWdHLG9DQUFvQyw0SUFBNEksNkJBQTZCLHNDQUFzQyxXQUFXLE9BQU8sR0FBRywwQkFBMEIsdUNBQXVDLGlCQUFpQiw0QkFBNEIsdUJBQXVCLHlDQUF5Qyw0QkFBNEIsT0FBTyxpQkFBaUIsbUNBQW1DLGtDQUFrQyw4QkFBOEIsMENBQTBDLDhCQUE4QixPQUFPLEdBQUcseUJBQXlCLGdCQUFnQiw4QkFBOEIsNkJBQTZCLG9DQUFvQyx1QkFBdUIsNkJBQTZCLDhCQUE4Qiw0QkFBNEIsbUNBQW1DLHFCQUFxQix5QkFBeUIscUVBQXFFLHdCQUF3Qiw2Q0FBNkMsNkNBQTZDLG1FQUFtRSx5QkFBeUIsaURBQWlELGVBQWUsMEJBQTBCLCtCQUErQiw0REFBNEQsV0FBVyw2QkFBNkIsNkNBQTZDLDZDQUE2QyxXQUFXLE9BQU8sT0FBTyxlQUFlLHNCQUFzQiw0QkFBNEIsT0FBTyxpQkFBaUIsbUNBQW1DLE9BQU8sR0FBRyxvQkFBb0Isa0NBQWtDLHdCQUF3QixrQ0FBa0MsOEJBQThCLCtDQUErQyxvQ0FBb0MsOEJBQThCLDZCQUE2QixvQ0FBb0MsME5BQTBOLGtLQUFrSyxpQ0FBaUMsV0FBVyw4REFBOEQsaUNBQWlDLFdBQVcsT0FBTyxrQkFBa0IsNlBBQTZQLGlEQUFpRCxvQ0FBb0Msb0NBQW9DLDhCQUE4QixvQ0FBb0MscUZBQXFGLDBLQUEwSyxxQ0FBcUMsV0FBVyw4REFBOEQsaUNBQWlDLFdBQVcsT0FBTyxHQUFHLGdJQUFnSSx3SUFBd0ksdUJBQXVCLGtDQUFrQyxtQkFBbUIsNkJBQTZCLHFCQUFxQixPQUFPLEdBQUcsb0NBQW9DLDJDQUEyQyx3QkFBd0IsK0JBQStCLDBCQUEwQix1RUFBdUUsOEJBQThCLE9BQU8sNkRBQTZELGlDQUFpQyxPQUFPLEdBQUcsa0NBQWtDLCtCQUErQixnSEFBZ0gsbUNBQW1DLE9BQU8sMERBQTBELG1DQUFtQyxPQUFPLEdBQUcsa0NBQWtDLDJDQUEyQyxrQkFBa0IsbUJBQW1CLG9CQUFvQix3REFBd0Qsb0NBQW9DLDBCQUEwQiwwQkFBMEIsR0FBRyxtQkFBbUIsOEJBQThCLEdBQUcsb0JBQW9CLHFDQUFxQyx3QkFBd0IsR0FBRyxvQkFBb0IscUNBQXFDLCtCQUErQixHQUFHLGNBQWMsa0NBQWtDLG1CQUFtQix5Q0FBeUMsOEJBQThCLGlDQUFpQyxtQ0FBbUMsT0FBTyxnQkFBZ0Isd0JBQXdCLDhCQUE4QixpQ0FBaUMsbURBQW1ELDZCQUE2Qiw2QkFBNkIsT0FBTyxHQUFHLFlBQVksb0NBQW9DLDhCQUE4QiwwQkFBMEIsbUNBQW1DLHVDQUF1Qyx3Q0FBd0MseURBQXlELHdKQUF3SixzQkFBc0IsMEJBQTBCLHFMQUFxTCxXQUFXLGdKQUFnSix1Q0FBdUMsK0NBQStDLGdEQUFnRCxXQUFXLDhEQUE4RCx1Q0FBdUMscUNBQXFDLHNDQUFzQyxXQUFXLE9BQU8sc0JBQXNCLDZCQUE2QixxQkFBcUIsNEJBQTRCLHVCQUF1Qix3Q0FBd0MsMkRBQTJELHFCQUFxQiwrQkFBK0IsMkpBQTJKLHlCQUF5QixXQUFXLHdMQUF3TCxnREFBZ0QsV0FBVyw4REFBOEQsZ0NBQWdDLHNDQUFzQyxXQUFXLE9BQU8sR0FBRyxjQUFjLG9CQUFvQixvREFBb0QsNERBQTRELGFBQWEsaUJBQWlCLGtFQUFrRSxtQkFBbUIsdUNBQXVDLDhCQUE4QiwwQkFBMEIsa0JBQWtCLHdCQUF3QixPQUFPLGlCQUFpQixtQ0FBbUMsa0NBQWtDLDZCQUE2Qix5Q0FBeUMseUJBQXlCLDBCQUEwQiwrQ0FBK0Msb0NBQW9DLDhCQUE4QixxSEFBcUgsdUNBQXVDLGtDQUFrQyw2QkFBNkIsZ0NBQWdDLFdBQVcsK0RBQStELHVDQUF1QyxrQ0FBa0MsNkJBQTZCLGdDQUFnQyxXQUFXLDhEQUE4RCx1Q0FBdUMsa0NBQWtDLDZCQUE2QixnQ0FBZ0MsV0FBVywrREFBK0QsdUNBQXVDLGtDQUFrQyw2QkFBNkIsZ0NBQWdDLFdBQVcsT0FBTyxHQUFHLGVBQWUsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDZHQUE2RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDJHQUEyRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLCtHQUErRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDJHQUEyRyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLHdHQUF3RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLGNBQWMsOEJBQThCLHVCQUF1QixxQkFBcUIsdUJBQXVCLDRHQUE0RyxHQUFHLHFCQUFxQjtBQUN6NXFDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLGdGQUFnRixlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdmUsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBLENBQXlGO0FBQ3pGLFlBQWdJOztBQUVoSTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyx5SEFBTzs7OztBQUl4QixpRUFBZSxnSUFBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7O0FDWnRCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7OztBQzVRQTs7QUFFQTtBQUNBLEtBQUssSUFBMEM7QUFDL0MsRUFBRSxpQ0FBTyxFQUFFLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsa0dBQUM7QUFDckIsRUFBRSxNQUFNLEVBSU47QUFDRixDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksb0RBQW9EO0FBQ3hELElBQUk7QUFDSjs7QUFFQSxzQ0FBc0MsbUJBQW1CO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixvREFBb0Q7QUFDN0U7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixvREFBb0Q7QUFDN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQW9EO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixvREFBb0Q7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMEJBQTBCO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFdBQVcsRUFBRTtBQUMvQixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFlBQVk7QUFDN0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0EsU0FBUyxRQUFRO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDLDRCQUE0QjtBQUN6RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDQUFpQyxzQkFBc0I7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVoQ0QsQ0FBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICogVGhlIGNsYXNzZXMgaW4gaGVyZSBmb2xsb3cgdGhlIEJFTSBuYW1pbmcgY29udmVudGlvbiBmb3IgdGhlIGdlbmVyYXRlZCBDU1NcXG4gKiAobm90IHRoYXQgaXQgaXMgcmVhbGx5IG5lZWRlZCBvbiBhIHByb2plY3Qgb2YgdGhpcyBzaXplKVxcbiAqL1xcbi8qIENvbG9ycyAqL1xcbi8qIERpbWVuc2lvbnMgKi9cXG4vKiBUeXBlIFNjYWxlICovXFxuLyogTWVkaWEgUXVlcnkgd2lkdGggYm91bmRhcmllcyAqL1xcbi8qIEZvbnQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVU9qSWcxX2k2dDhrQ0hLbTQ1OVd4WnFpN2oudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTUvSlRVUGpJZzFfaTZ0OGtDSEttNDU5V3haQmdfRC13LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVVBqSWcxX2k2dDhrQ0hLbTQ1OVd4WllnekQtdy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxNS9KVFVRaklnMV9pNnQ4a0NIS200NTlXeGh6Zy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxNS9KVFVQaklnMV9pNnQ4a0NIS200NTlXeFpPZzNELXcudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTUvSlRVUGpJZzFfaTZ0OGtDSEttNDU5V3haRmdyRC13LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVVBqSWcxX2k2dDhrQ0hLbTQ1OVd4WmNndkQtdy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxNS9KVFVQaklnMV9pNnQ4a0NIS200NTlXeFpiZ2pELXcudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTUvSlRVUGpJZzFfaTZ0OGtDSEttNDU5V3haU2duRC13LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVVFqSWcxX2k2dDhrQ0hLbTQ1X1FwaHpnLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2FaQTdnNC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxNS9KVFVSaklnMV9pNnQ4a0NIS200NV9jSkQ3ZzQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTUvSlRVU2pJZzFfaTZ0OGtDSEttNDV4VzQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTUvSlRVUmpJZzFfaTZ0OGtDSEttNDVfWnBDN2c0LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2JaRjdnNC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxNS9KVFVSaklnMV9pNnQ4a0NIS200NV9kSkU3ZzQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTUvSlRVUmpJZzFfaTZ0OGtDSEttNDVfYzVIN2c0LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2VwRzdnNC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuKiB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNzJweDtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDkwOTA5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbWFyZ2luOiB1bnNldDtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuaGVhZGVyX190aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xcbiAgLmhlYWRlcl9fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcXG4gIH1cXG59XFxuLnBhbmVsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wYW5lbC1jb250YWluZXJfX2xlZnQtcGFuZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWF4LXdpZHRoOiA1MTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1yaWdodDogNDhweDtcXG4gIHBhZGRpbmctYm90dG9tOiA2NHB4O1xcbiAgdG9wOiAxMjhweDtcXG4gIHJpZ2h0OiA1MCU7XFxufVxcbi5wYW5lbC1jb250YWluZXJfX3JpZ2h0LXBhbmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiA0OHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMjhweDtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSwgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODQwcHgpIHtcXG4gIC5wYW5lbC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgfVxcbiAgLnBhbmVsLWNvbnRhaW5lcl9fbGVmdC1wYW5lbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xcbiAgfVxcbiAgLnBhbmVsLWNvbnRhaW5lcl9fcmlnaHQtcGFuZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG4ubGVmdC1wYW5lbF9faW50cm8tdGV4dCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4ubGVmdC1wYW5lbF9fd2FybmluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjQjRBQTFCO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUY4REM7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4ubGVmdC1wYW5lbF9fYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuLmxlZnQtcGFuZWxfX2Zvb3RlciBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdW5zZXQ7XFxuICB3aWR0aDogMTkycHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLmxlZnQtcGFuZWxfX2Zvb3RlciBhOmhvdmVyIC5mb290ZXJfX3RleHQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5pbnRyby10ZXh0X19wIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGh5cGhlbnM6IGF1dG87XFxufVxcbi5pbnRyby10ZXh0X19wOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG59XFxuLmludHJvLXRleHRfX3A6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbn1cXG4uaW50cm8tdGV4dF9fcDpudGgtbGFzdC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuNWVtO1xcbn1cXG4uaW50cm8tdGV4dF9fbGlzdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxufVxcbi5pbnRyby10ZXh0X19saXN0IGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcbi5pbnRyby10ZXh0X19saXN0IGxpIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG59XFxuLndhcm5pbmctY29udGFpbmVyX19pY29uIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAwcHggMzJweDtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4ud2FybmluZy1jb250YWluZXJfX3RleHQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogIzA5MDkwOTtcXG4gIHBhZGRpbmc6IDBweCAzMnB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuLmJ1dHRvbi1jb250YWluZXJfX2J0biB7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgd2lkdGg6IDE5MnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMTJweDtcXG4gIGNvbG9yOiAjRjZGNkY2O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5idXR0b24tY29udGFpbmVyX19idG46Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmJ1dHRvbi1jb250YWluZXJfX2J0bi0tZW5hYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0NCN0FCO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzJGOTE4NztcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XFxufVxcbi5idXR0b24tY29udGFpbmVyX19idG4tLWVuYWJsZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGOTE4NztcXG59XFxuLmJ1dHRvbi1jb250YWluZXJfX2J0bi0tZW5hYmxlZDphY3RpdmUge1xcbiAgZmlsdGVyOiBub25lO1xcbn1cXG4uYnV0dG9uLWNvbnRhaW5lcl9fYnRuLS1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDOEM4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzgwODA4MDtcXG59XFxuLmZvb3Rlcl9fZ2l0aHViLWxvZ28ge1xcbiAgd2lkdGg6IDMycHg7XFxufVxcbi5mb290ZXJfX3RleHQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ucmlnaHQtcGFuZWxfX3dhdGNoLXN0YXRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiA0cHggc29saWQgIzgwODA4MDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBoZWlnaHQ6IDEyOHB4O1xcbiAgd2lkdGg6IDUxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcXG4gIC5yaWdodC1wYW5lbF9fd2F0Y2gtc3RhdHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDM4NHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgLnJpZ2h0LXBhbmVsX193YXRjaC1zdGF0cy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjU2cHg7XFxuICB9XFxufVxcbi5yaWdodC1wYW5lbF9fdGFibGUge1xcbiAgYm9yZGVyOiA0cHggc29saWQgIzgwODA4MDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICB3aWR0aDogNTIwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XFxuICAucmlnaHQtcGFuZWxfX3RhYmxlIHtcXG4gICAgd2lkdGg6IDM5MnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgLnJpZ2h0LXBhbmVsX190YWJsZSB7XFxuICAgIHdpZHRoOiAyNTZweDtcXG4gIH1cXG59XFxuLyogQWRkcyBhICYtLWhpZGRlbiBjbGFzcyBhbmQgZmFkZSB0cmFuc2l0aW9ucyBiZXR3ZWVuIHNob3dpbmdcXG4gKiBhbmQgaGlkaW5nXFxuICovXFxuLndhdGNoLXN0YXRzLWNvbnRhaW5lcl9fdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG4ud2F0Y2gtc3RhdHMtY29udGFpbmVyX190ZXh0LS1oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLndhdGNoLXN0YXRzLWNvbnRhaW5lcl9fdGV4dC0taW5mbyB7XFxuICBjb2xvcjogIzA5MDkwOTtcXG59XFxuLndhdGNoLXN0YXRzLWNvbnRhaW5lcl9fdGV4dC0tZXJyb3Ige1xcbiAgY29sb3I6ICNCNDQ0MUI7XFxufVxcbi5zdGF0dXMtaXRlbS1mb250LXNpemUtbWl4aW4ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xcbiAgLnN0YXR1cy1pdGVtLWZvbnQtc2l6ZS1taXhpbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIC5zdGF0dXMtaXRlbS1mb250LXNpemUtbWl4aW4ge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcbi53YXRjaC1zdGF0cy1jb250YWluZXJfX2dyaWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogbGVmdDtcXG59XFxuLndhdGNoLXN0YXRzLWNvbnRhaW5lcl9fZ3JpZC0taGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5ncmlkX19pdGVtIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xcbn1cXG4uaXRlbV9fbGFiZWwge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XFxuICAuaXRlbV9fbGFiZWwge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAuaXRlbV9fbGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcbi5pdGVtX192YWx1ZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XFxuICAuaXRlbV9fdmFsdWUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAuaXRlbV9fdmFsdWUge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcbi50YWJsZV9faGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XFxuICBjb2xvcjogI0Y2RjZGNjtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi50YWJsZV9fcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjODA4MDgwO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucm93X19wYWNrYWdlLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1vdXQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnJvd19fcGFja2FnZS1sYWJlbC0tbW92ZS1sZWZ0IHtcXG4gIHdpZHRoOiAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xcbiAgLnJvd19fcGFja2FnZS1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIC5yb3dfX3BhY2thZ2UtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgfVxcbn1cXG4ucm93X19zdGF0dXMtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDMycHg7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnJvd19fc3RhdHVzLWljb24tLWhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xcbiAgLnJvd19fc3RhdHVzLWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAucm93X19zdGF0dXMtaWNvbiB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gIH1cXG59XFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbC0tdmlzaWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubW9kYWxfX3RleHQge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xcbiAgbWF4LXdpZHRoOiAyMCU7XFxuICBtYXgtaGVpZ2h0OiAzMCU7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDQ4cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLm1vZGFsX190ZXh0IHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgbWF4LWhlaWdodDogdW5zZXQ7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XFxuICAubW9kYWxfX3RleHQge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBtYXgtaGVpZ2h0OiB1bnNldDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIC5tb2RhbF9fdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgLm1vZGFsX190ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgbWF4LWhlaWdodDogdW5zZXQ7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5sZXNzXCIsXCJodHRwczovZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRTtBQUNGLFdBQVc7QUFDWCxlQUFlO0FBQ2YsZUFBZTtBQUNmLGlDQUFpQztBQUNqQyxTQUFTO0FDUlQ7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdHQUFBO0FEVUY7QUNSQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEdBQUE7QURVRjtBQ1JBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwR0FBQTtBRFVGO0FDUkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNHQUFBO0FEVUY7QUNSQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEdBQUE7QURVRjtBQ1JBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwR0FBQTtBRFVGO0FDUkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBHQUFBO0FEVUY7QUNSQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEdBQUE7QURVRjtBQ1JBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwR0FBQTtBRFVGO0FDUkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNHQUFBO0FEVUY7QUNSQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUdBQUE7QURVRjtBQ1JBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1R0FBQTtBRFVGO0FDUkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1HQUFBO0FEVUY7QUNSQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUdBQUE7QURVRjtBQ1JBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1R0FBQTtBRFVGO0FDUkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVHQUFBO0FEVUY7QUNSQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUdBQUE7QURVRjtBQ1JBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1R0FBQTtBRFVGO0FBOUNBO0VBQ0kscUNBQUE7QUFnREo7QUE1Q0E7RUFDSSx1QkFBQTtBQThDSjtBQTFDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFB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QUFBO0lBQ0Esa0JBQUE7RUF6RFY7QUFDRjtBQTBEUTtFQUFBO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUF2RFY7QUFDRjtBQXlESTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUF2RFI7QUF5RFE7RUFHSSxrQkFBQTtFQUNBLFVBQUE7QUF6RFo7QUE4RFE7RUFBQTtJQUNJLGtCQUFBO0VBM0RWO0FBQ0Y7QUE0RFE7RUFBQTtJQUNJLFdBQUE7SUFDQSxpQkFBQTtFQXpEVjtBQUNGO0FBOERBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTVESjtBQTZESTtFQUNJLGFBQUE7QUEzRFI7QUE4REk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQTVEUjtBQStEUTtFQUFBO0lBQ0ksZUFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUE1RFY7QUFDRjtBQTZEUTtFQUFBO0lBQ0ksZUFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUExRFY7QUFDRjtBQTJEUTtFQUFBO0lBQ0ksZUFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUF4RFY7QUFDRjtBQXlEUTtFQUFBO0lBQ0ksZUFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUF0RFY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAqIFRoZSBjbGFzc2VzIGluIGhlcmUgZm9sbG93IHRoZSBCRU0gbmFtaW5nIGNvbnZlbnRpb24gZm9yIHRoZSBnZW5lcmF0ZWQgQ1NTXFxuICogKG5vdCB0aGF0IGl0IGlzIHJlYWxseSBuZWVkZWQgb24gYSBwcm9qZWN0IG9mIHRoaXMgc2l6ZSlcXG4gKi9cXG5cXG5cXG4vKiBDb2xvcnMgKi9cXG4vLyBOb3RlOiBwcm9iYWJseSBuZWVkIGFub3RoZXIgMiBvciA0IHNoYWRlcyBwZXIgY29sb3IgdG8gbWFrZSB0aGlzIGxvb2sgYmV0dGVyXFxuXFxuQHByaW1hcnktNTAwOiAjMjI2QTYyO1xcbkBwcmltYXJ5LTQwMDogIzJGOTE4NztcXG5AcHJpbWFyeS0zMDA6ICMzQ0I3QUI7XFxuQHByaW1hcnktMjAwOiAjN0VENUNEO1xcbkBwcmltYXJ5LTEwMDogI0Q0RjFFRTtcXG5cXG5AbmV1dHJhbC01MDA6ICMwOTA5MDk7XFxuQG5ldXRyYWwtNDAwOiAjNDA0MDQwO1xcbkBuZXV0cmFsLTMwMDogIzgwODA4MDtcXG5AbmV1dHJhbC0yMDA6ICNDOEM4Qzg7XFxuQG5ldXRyYWwtMTAwOiAjRjZGNkY2O1xcblxcbkBhY2NlbnQteWVsbG93LTUwMDogIzUwNEIwQztcXG5AYWNjZW50LXllbGxvdy00MDA6ICNCNEFBMUI7XFxuQGFjY2VudC15ZWxsb3ctMzAwOiAjRTZERDVCO1xcbkBhY2NlbnQteWVsbG93LTIwMDogI0YxRUNBMTtcXG5AYWNjZW50LXllbGxvdy0xMDA6ICNGQUY4REM7XFxuXFxuQGFjY2VudC1yZWQtNTAwOiAjNTAxRTBDO1xcbkBhY2NlbnQtcmVkLTQwMDogI0I0NDQxQjtcXG5AYWNjZW50LXJlZC0zMDA6ICNFNjgwNUI7XFxuQGFjY2VudC1yZWQtMjAwOiAjRjFCNkExO1xcbkBhY2NlbnQtcmVkLTEwMDogI0ZBRTREQztcXG5cXG5AYWNjZW50LWdyZWVuLTUwMDogIzI3NTAwQztcXG5AYWNjZW50LWdyZWVuLTQwMDogIzRFQTAxODtcXG5AYWNjZW50LWdyZWVuLTMwMDogIzkzRTY1QjtcXG5AYWNjZW50LWdyZWVuLTIwMDogI0MxRjFBMTtcXG5AYWNjZW50LWdyZWVuLTEwMDogI0U4RkFEQztcXG5cXG5cXG4vKiBEaW1lbnNpb25zICovXFxuLy8gaWRrIGFib3V0IHRoZSBuYW1pbmcgY29udmVudGlvbiBoZXJlLlxcbi8vIE5vdGU6IHRoaXMgaXMgYm9ycm93ZWQgZnJvbSBSZWZhY3RvcmluZyBVSSBieSBBZGFtIFdhdGhhbiBhbmQgU3RldmUgU2Nob2dlclxcblxcbkBkaW1lbnMtNDogNHB4O1xcbkBkaW1lbnMtODogOHB4O1xcbkBkaW1lbnMtMTI6IDEycHg7XFxuQGRpbWVucy0xNjogMTZweDtcXG5AZGltZW5zLTI0OiAyNHB4O1xcbkBkaW1lbnMtMzI6IDMycHg7XFxuQGRpbWVucy00ODogNDhweDtcXG5AZGltZW5zLTY0OiA2NHB4O1xcbkBkaW1lbnMtOTY6IDk2cHg7XFxuQGRpbWVucy0xMjg6IDEyOHB4O1xcbkBkaW1lbnMtMTkyOiAxOTJweDtcXG5AZGltZW5zLTI1NjogMjU2cHg7XFxuQGRpbWVucy0zODQ6IDM4NHB4O1xcbkBkaW1lbnMtNTEyOiA1MTJweDtcXG5AZGltZW5zLTY0MDogNjQwcHg7XFxuQGRpbWVucy03Njg6IDEycHg7XFxuXFxuXFxuLyogVHlwZSBTY2FsZSAqL1xcbi8vIE5vdGU6IHRoaXMgaXMgYm9ycm93ZWQgZnJvbSBSZWZhY3RvcmluZyBVSSBieSBBZGFtIFdhdGhhbiBhbmQgU3RldmUgU2Nob2dlclxcblxcbkBmb250LXNpemUtMTI6IDEycHg7XFxuQGZvbnQtc2l6ZS0xNDogMTRweDtcXG5AZm9udC1zaXplLTE2OiAxNnB4O1xcbkBmb250LXNpemUtMTg6IDE4cHg7XFxuQGZvbnQtc2l6ZS0yMDogMjBweDtcXG5AZm9udC1zaXplLTI0OiAyNHB4O1xcbkBmb250LXNpemUtMzA6IDMwcHg7XFxuQGZvbnQtc2l6ZS0zNjogMzZweDtcXG5AZm9udC1zaXplLTQ4OiA0OHB4O1xcbkBmb250LXNpemUtNjA6IDYwcHg7XFxuQGZvbnQtc2l6ZS03MjogNzJweDtcXG5cXG5cXG4vKiBNZWRpYSBRdWVyeSB3aWR0aCBib3VuZGFyaWVzICovXFxuLy8gVGhlc2UgYXJlIGtpbmRhIGFyaWJpdHJhcnkgYnV0IGl0IHdvcmtzIHdpdGggdGhlIGxheW91dHMgYmVsb3dcXG5AZGV2aWNlLXdpZHRoLWxhcmdlOiAxMjAwcHg7XFxuQGRldmljZS13aWR0aC1tZWRpdW06IDU0MHB4O1xcbkBkZXZpY2Utd2lkdGgtc21hbGw6IDQyNXB4O1xcbkBkZXZpY2Utd2lkdGgteHNtYWxsOiAzMjBweDtcXG5cXG5cXG4vKiBGb250ICovXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IC8vIHVzZSB0aGUgc2FtZSBmb250IGluIGFsbCB0ZXh0IG9uIHRoZSBwYWdlXFxufVxcblxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gICAgXFxuICAgIC8vIHNvIHRoYXQgdGhlIHNjcm9sbGVkIHRleHQgaXNuJ3QgdmlzaWJsZSBiZWhpbmQgdGhlIGhlYWRlclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMTsgICAgICAgICAgICAgICAgXFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS03MjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IEBkaW1lbnMtNCBzb2xpZCBAbmV1dHJhbC01MDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgICBtYXJnaW46IHVuc2V0O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBAZGltZW5zLTMyO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogQGRpbWVucy0zMjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAgICAgLy8gQmVsb3cgdGhlc2Ugc2l6ZXMgc2hvdyBhIHNtYWxsZXIgZm9udFxcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGRldmljZS13aWR0aC1sYXJnZSkge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS0zNjtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IEBkaW1lbnMtMTY7XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogQGRpbWVucy0xNjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8vIEFuZCB0aGVuIHNtYWxsZXIgYWdhaW4gLSB0aGlzIGlzIHRvIHByZXZlbnQgdGhlIHRpdGxlIHNwaWxsaW5nXFxuICAgICAgICAvLyBvbnRvIG11bHRpcGxlIGxpbmVzXFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAZGV2aWNlLXdpZHRoLW1lZGl1bSkge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS0yMDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IEBkaW1lbnMtMTI7XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogQGRpbWVucy0xMjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG4ucGFuZWwtY29udGFpbmVyIHtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvLyB0aGlzIGlzIHNvIHRoZSBsZWZ0LXBhbmVsIGhhcyBzb21ldGhpbmcgdG8gcG9zaXRpb24gcmVsYXRpdmUgdG9cXG5cXG4gICAgQG9mZnNldC1mcm9tLWJyb3dzZXItdG9wOiBAZGltZW5zLTEyODtcXG4gICAgQHBhbmVsLWNlbnRyZS1tYXJnaW46IEBkaW1lbnMtNDg7XFxuXFxuICAgICZfX2xlZnQtcGFuZWwge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgbWF4LXdpZHRoOiBAZGltZW5zLTUxMjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogQHBhbmVsLWNlbnRyZS1tYXJnaW47XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogQGRpbWVucy02NDsgLy8gc28gdGhhdCB0aGUgbGVmdC1wYW5lbCBzY3JvbGxzIHRoZSBjb250ZW50IHVwIGVub3VnaFxcbiAgICAgICAgdG9wOiBAb2Zmc2V0LWZyb20tYnJvd3Nlci10b3A7XFxuICAgICAgICByaWdodDogNTAlOyAvLyBtb3ZlIG9mZiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgYnJvd3NlciBieSB0aGlzIGFtb3VudFxcbiAgICB9XFxuICAgIFxcbiAgICAmX19yaWdodC1wYW5lbCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogQHBhbmVsLWNlbnRyZS1tYXJnaW47XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB0b3A6IEBvZmZzZXQtZnJvbS1icm93c2VyLXRvcDtcXG4gICAgICAgIGxlZnQ6IDUwJTsgLy8gbW92ZSBvZmYgdGhlIGxlZnQgc2lkZSBvZiB0aGUgYnJvd3NlciBieSB0aGlzIGFtb3VudFxcblxcbiAgICB9XFxuXFxuICAgIC8vIEJlbG93IHRoZXNlIHNpemVzIG1ha2UgaXQgYSAxIGNvbHVtbiBsYXlvdXRcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGRldmljZS13aWR0aC1sYXJnZSksIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDg0MHB4KSB7XFxuXFxuICAgICAgICAmIHtcXG4gICAgICAgICAgICAvLyBObyBsb25nZXIgbmVlZCB0byBwb3NpdGlvbiB0aGUgbGVmdCBwYW5lbCByZWxhdGl2ZSB0byB0aGlzXFxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICZfX2xlZnQtcGFuZWwge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgICAgICAgICAgLy8gQ2VudHJlIGNvbnRlbnQgaW4gd2luZG93XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IEBkaW1lbnMtNjQ7XFxuICAgICAgICB9XFxuICAgICAgICAmX19yaWdodC1wYW5lbCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgICAgICAgICAvLyBDZW50cmUgY29udGVudCBpbiB3aW5kb3dcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuLmxlZnQtcGFuZWwge1xcblxcbiAgICAmX19pbnRyby10ZXh0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBkaW1lbnMtMjQ7XFxuICAgIH1cXG5cXG4gICAgJl9fd2FybmluZy1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXI6IEBkaW1lbnMtNCBzb2xpZCBAYWNjZW50LXllbGxvdy00MDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiBAZGltZW5zLTI0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQGFjY2VudC15ZWxsb3ctMTAwO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQGRpbWVucy0yNDtcXG4gICAgfVxcblxcbiAgICAmX19idXR0b24tY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiBAZGltZW5zLTI0O1xcbiAgICB9XFxuXFxuICAgICZfX2Zvb3RlciBhIHsgLy8geWVhaCwgaSBzaG91bGQgcHJvYmFibHkgbWFrZSBhIG5ldyBjbGFzcyBmb3IgdGhpc1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgIC8vIHJlbW92ZSB0aGUgZGVmYXVsdCBzdHlsaW5nXFxuICAgICAgICBjb2xvcjogdW5zZXQ7ICAgICAgICAgICAvLyBvZiB0aGUgPGEgLz4gZWxlbWVudCB0ZXh0XFxuICAgICAgICB3aWR0aDogQGRpbWVucy0xOTI7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bzsgICAgICAvLyBjZW50cmUgdGhlIDxhIC8+IGluIHRoZVxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAgICAgLy8gbWlkZGxlIG9mIHRoZSBjb2x1bW5cXG4gICAgICAgIFxcbiAgICAgICAgLy8gV2hlbiBhbnkgb2YgdGhlIDxhIC8+IGlzIGhvdmVyZWQgb3ZlciBib2xkIHRoZSB0ZXh0XFxuICAgICAgICAvLyBpbiB0aGUgY2hpbGQgc3BhblxcbiAgICAgICAgJjpob3ZlciAuZm9vdGVyX190ZXh0IHsgXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuLmludHJvLXRleHRfX3Age1xcbiAgICBmb250LXNpemU6IEBmb250LXNpemUtMjA7XFxuICAgIGxpbmUtaGVpZ2h0OiBAZGltZW5zLTMyO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBoeXBoZW5zOiBhdXRvOyAvLyBtYWtlcyB0aGUganVzdGlmaWVkIHRleHQgbG9vayBiZXR0ZXJcXG5cXG4gICAgJjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAvLyBObyBtYXJnaW4gb24gdGhlIGZpcnN0IHBhcmFncmFwaCBzbyB0aGF0IHRoZSB0b3Agb2YgZWFjaFxcbiAgICAgICAgLy8gY29sdW1uIGlzIGFsaWduZWRcXG4gICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDsgXFxuICAgIH1cXG5cXG4gICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIC8vIFNpbWlsYXIgaGVyZSwgbWFrZSBpdCBlYXN5IHRvIHNwYWNlIHRoZSBmb2xsb3dpbmcgd2FybmluZ1xcbiAgICAgICAgLy8gc2VjdGlvbiB3aXRob3V0IGZhY3RvcmluZyBpbiB0aGlzXFxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbiAgICB9XFxuXFxuICAgICY6bnRoLWxhc3Qtb2YtdHlwZSgyKSB7XFxuICAgICAgICAvLyBzaHJpbmsgdGhlIGdhcCBiZXR3ZWVuIHRoZSBzZWNvbmQgdG8gbGFzdCBwYXJhZ3JhcGhcXG4gICAgICAgIC8vIGFuZCB0cmFpbGluZyBsaXN0IFxcbiAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMC41ZW07ICAgIFxcbiAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbn1cXG5cXG5cXG4uaW50cm8tdGV4dF9fbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS0yMDtcXG4gICAgbGluZS1oZWlnaHQ6IEBkaW1lbnMtMzI7XFxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDsgLy8gbWFrZXMgc3VyZSB0aGUgbGlzdCBkb2Vzbid0IGNvbnRyaWJ1dGUgdG8gdGhlIGdhcCBiZXR3ZWVuIGl0IGFuZCB0aGUgcGFyYWdyYXBoXFxuXFxuICAgICYgbGkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQGRpbWVucy0xMjtcXG5cXG4gICAgICAgIC8vIEhhZCB0byB3cmFwIHRoZSB0ZXh0IGluIGEgc3BhbiBzbyB0aGF0IGkgY291bGQgaW5jcmVhc2UgdGhlIGdhcFxcbiAgICAgICAgLy8gYmV0d2VlbiB0aGUgbnVtYmVyIGFuZCB0aGUgdGV4dFxcbiAgICAgICAgJiBzcGFuIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogQGRpbWVucy0xMjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG4ud2FybmluZy1jb250YWluZXIge1xcblxcbiAgICBAaG9yaXpvbnRhbC1tYXJnaW46IEBkaW1lbnMtMzI7XFxuXFxuICAgICZfX2ljb24ge1xcbiAgICAgICAgd2lkdGg6IEBkaW1lbnMtMzI7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBtYXJnaW46IDBweCBAaG9yaXpvbnRhbC1tYXJnaW47XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgfVxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS0xODtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBAZGltZW5zLTI0O1xcbiAgICAgICAgY29sb3I6IEBuZXV0cmFsLTUwMDtcXG4gICAgICAgIHBhZGRpbmc6IDBweCBAaG9yaXpvbnRhbC1tYXJnaW47XFxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICB9XFxufVxcblxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG5cXG4gICAgJl9fYnRuIHtcXG4gICAgICAgIHBhZGRpbmc6IEBkaW1lbnMtMTI7XFxuICAgICAgICB3aWR0aDogQGRpbWVucy0xOTI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiBAZGltZW5zLTI0O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgbWFyZ2luOiBAZGltZW5zLTEyO1xcbiAgICAgICAgY29sb3I6IEBuZXV0cmFsLTEwMDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplLTIwO1xcblxcbiAgICAgICAgJjpmb2N1cyB7XFxuICAgICAgICAgICAgb3V0bGluZTogMDsgLy8gSGlkZSB0aGUgcmVjdGFuZ3VsYXIgYm9yZGVyIHRoYXQgYXBwZWFycyB3aGVuIGNsaWNraW5nXFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLS1lbmFibGVkIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHJpbWFyeS0zMDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgQHByaW1hcnktNDAwO1xcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBwcmltYXJ5LTQwMDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IG5vbmU7IC8vIHJlbW92ZSBkcm9wIHNoYWRvdyB3aGlsZSBtb3VzZSBpcyBjbGlja2VkXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICBcXG4gICAgICAgICYtLWRpc2FibGVkIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbmV1dHJhbC0yMDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgQG5ldXRyYWwtMzAwO1xcbiAgICAgICAgfVxcbiAgICB9ICAgIFxcbn1cXG5cXG5cXG4uZm9vdGVyIHtcXG4gICAgJl9fZ2l0aHViLWxvZ28ge1xcbiAgICAgICAgd2lkdGg6IEBkaW1lbnMtMzI7XFxuICAgIH1cXG5cXG4gICAgJl9fdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemUtMTY7XFxuICAgIH1cXG59XFxuXFxuXFxuLnJpZ2h0LXBhbmVsIHtcXG5cXG4gICAgJl9fd2F0Y2gtc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXI6IEBkaW1lbnMtNCBzb2xpZCBAbmV1dHJhbC0zMDA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiBAZGltZW5zLTEyO1xcbiAgICAgICAgaGVpZ2h0OiBAZGltZW5zLTEyODtcXG4gICAgICAgIHdpZHRoOiBAZGltZW5zLTUxMjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBkaW1lbnMtMzI7XFxuICAgICAgICAvLyBDb3VsZG4ndCBnZXQgZmFkZSBpbiB0cmFuc2l0aW9uIHRvIHdvcmsgdW5sZXNzIGNoaWxkcmVuIHdlcmVcXG4gICAgICAgIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZCBhbmQgZm9yIHRoYXQgdG8gaGFwcGVuIHRoZWlyIHBhcmVudCBtdXN0XFxuICAgICAgICAvLyBiZSBub24tc3RhdGljYWxseSBwb3NpdGlvbmVkXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAvLyBOZWVkIHRvIHNocmluayB0aGUgY29udGFpbmVyIGJlbG93IHRoaXMgc2l6ZSBhcyBpdCBiZWdpbnMgdG8gZ2V0XFxuICAgICAgICAvLyBjdXQtb2ZmXFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAZGV2aWNlLXdpZHRoLW1lZGl1bSkge1xcbiAgICAgICAgICAgIHdpZHRoOiBAZGltZW5zLTM4NDtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBkZXZpY2Utd2lkdGgtc21hbGwpIHtcXG4gICAgICAgICAgICB3aWR0aDogQGRpbWVucy0yNTY7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fdGFibGUge1xcblxcbiAgICAgICAgLy8gVGhlIHdpZHRocyBiZWxvdyBzaG91bGQgbWF0Y2ggdGhlIHdpZHRoIG9mIHRoZSBzdGF0dXMgYm94IHNvIGFkZGVkIGFcXG4gICAgICAgIC8vIGZldyBweCdzIHRvIG1ha2UgdGhhdCBoYXBwZW4uIFRoaXMgaXMgYSBxdWljayBmaXguIEkgdGhpbmsgaXRzIGNvc1xcbiAgICAgICAgLy8gb2YgaG93IGkgZHJldyB0aGUgYm9yZGVyIG9uIHRoZSB0YWJsZS5cXG4gICAgICAgIEBib3JkZXItd2lkdGgtY29ycmVjdGlvbjogOHB4O1xcblxcbiAgICAgICAgYm9yZGVyOiBAZGltZW5zLTQgc29saWQgQG5ldXRyYWwtMzAwO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQGRpbWVucy0xMjtcXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICAgICAgICBib3JkZXItc3BhY2luZzogMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQGRpbWVucy0zMjsgLy8gVGhlcmVzIG5vdGhpbmcgYmVsb3cgaGVyZSBidXQgaXRzIGZ1dHVyZSBwcm9vZmVkXFxuICAgICAgICB3aWR0aDogQGRpbWVucy01MTIgKyA4OyBcXG5cXG4gICAgICAgIC8vIE5lZWQgdG8gc2hyaW5rIHRoZSBjb250YWluZXIgYmVsb3cgYXQgc21hbGxlciBzaXplcyBhcyBpdCBiZWdpbnMgdG9cXG4gICAgICAgIC8vIGdldCBjdXQtb2ZmXFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAZGV2aWNlLXdpZHRoLW1lZGl1bSkge1xcbiAgICAgICAgICAgIHdpZHRoOiBAZGltZW5zLTM4NCArIDg7XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAZGV2aWNlLXdpZHRoLXNtYWxsKSB7XFxuICAgICAgICAgICAgd2lkdGg6IEBkaW1lbnMtMjU2O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcbi8qIEFkZHMgYSAmLS1oaWRkZW4gY2xhc3MgYW5kIGZhZGUgdHJhbnNpdGlvbnMgYmV0d2VlbiBzaG93aW5nXFxuICogYW5kIGhpZGluZ1xcbiAqL1xcbi53YXRjaC1zdGF0cy1pdGVtLXZpc2liaWxpdHktbWl4aW4oKSB7XFxuICAgIC8vIFRoaXMgaXMgc28gdGhlIHNwYWNpbmcgb2YgdGhlIGludmlzaWJsZSBpdGVtIGRvZXNuJ3QgaW5mbHVlbmNlXFxuICAgIC8vIHRoZSBwb3NpdGlvbiBvZiB0aGUgdmlzaWJsZSBvbmVcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcblxcbiAgICAmLS1oaWRkZW4ge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbn1cXG5cXG5cXG4ud2F0Y2gtc3RhdHMtY29udGFpbmVyX190ZXh0IHtcXG4gICAgLndhdGNoLXN0YXRzLWl0ZW0tdmlzaWJpbGl0eS1taXhpbigpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBAZm9udC1zaXplLTIwO1xcbiAgICBwYWRkaW5nOiBAZGltZW5zLTEyO1xcblxcbiAgICAvLyBXaGVuIHRoZSBcXFwibm8gZGV2aWNlIGNvbm5lY3RlZCBpcyBkaXNwbGF5ZWRcXFwiXFxuICAgICYtLWluZm8ge1xcbiAgICAgICAgY29sb3I6IEBuZXV0cmFsLTUwMDtcXG4gICAgfVxcblxcbiAgICAvLyBXaGVuIGFuIGVycm9yIG1lc3NhZ2UgaXMgZGlzcGxheWVkXFxuICAgICYtLWVycm9yIHtcXG4gICAgICAgIGNvbG9yOiBAYWNjZW50LXJlZC00MDA7XFxuICAgIH1cXG59XFxuXFxuLnN0YXR1cy1pdGVtLWZvbnQtc2l6ZS1taXhpbiB7XFxuICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS0yMDtcXG5cXG4gICAgLy8gVXNlIGEgc21hbGxlciBmb250IGF0IHNtYWxsZXIgc2NyZWVuIHNpemVzXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBkZXZpY2Utd2lkdGgtbWVkaXVtKSB7XFxuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemUtMTg7XFxuICAgIH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGRldmljZS13aWR0aC1zbWFsbCkge1xcbiAgICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplLTE0O1xcbiAgICB9XFxufVxcblxcbi53YXRjaC1zdGF0cy1jb250YWluZXJfX2dyaWQge1xcbiAgICAud2F0Y2gtc3RhdHMtaXRlbS12aXNpYmlsaXR5LW1peGluKCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8vIDJ4MiBncmlkXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogbGVmdDtcXG59XFxuXFxuXFxuLmdyaWRfX2l0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogQGRpbWVucy0zMjtcXG59XFxuXFxuXFxuLml0ZW1fX2xhYmVsIHtcXG4gICAgLnN0YXR1cy1pdGVtLWZvbnQtc2l6ZS1taXhpbigpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXFxuLml0ZW1fX3ZhbHVlIHtcXG4gICAgLnN0YXR1cy1pdGVtLWZvbnQtc2l6ZS1taXhpbigpO1xcbiAgICBmb250LXNpemU6IEBmb250LXNpemUtMjA7XFxufVxcblxcblxcbi50YWJsZSB7XFxuXFxuICAgIEBjZWxsLXBhZGRpbmc6IEBkaW1lbnMtMTI7XFxuXFxuICAgICZfX2hlYWRlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbmV1dHJhbC0zMDA7XFxuICAgICAgICBjb2xvcjogQG5ldXRyYWwtMTAwO1xcbiAgICAgICAgcGFkZGluZzogQGNlbGwtcGFkZGluZztcXG4gICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS0yMDtcXG4gICAgfVxcblxcbiAgICAmX19yb3cge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiBAY2VsbC1wYWRkaW5nO1xcbiAgICAgICAgYm9yZGVyLXRvcDogQGRpbWVucy00IHNvbGlkIEBuZXV0cmFsLTMwMDtcXG4gICAgICAgIGhlaWdodDogQGRpbWVucy0zMjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcbn1cXG5cXG5cXG4ucm93IHtcXG5cXG4gICAgQG1hcmdpbi1vdXRzaWRlOiBAZGltZW5zLTMyO1xcbiAgICBAdHJhbnN0aW9uLWR1cmF0aW9uOiAxcztcXG5cXG4gICAgJl9fcGFja2FnZS1sYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemUtMjA7XFxuICAgICAgICBtYXJnaW4tbGVmdDogQG1hcmdpbi1vdXRzaWRlO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAbWFyZ2luLW91dHNpZGU7XFxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCBAdHJhbnN0aW9uLWR1cmF0aW9uIGVhc2Utb3V0O1xcbiAgICAgICAgLy8gQ2VudHJlIHRoZSB0ZXh0IGluIHRoZSBtaWRkbGUgb2YgdGhlIHRhYmxlIGluIHRoZSBzdGFydGluZyBwb3NpdGlvblxcbiAgICAgICAgLy8gd2hlbiB0aGUgc3RhdHVzIGljb24gaXMgaGlkZGVuXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgICYtLW1vdmUtbGVmdCB7XFxuICAgICAgICAgICAgLy8gVGhlIHRleHQgYXBwZWFycyBvdXRzaWRlIHRoZSBzcGFuIGFuZCBpcyBsZWZ0IGFsaWduZWQgYWxvbmcgdGhlXFxuICAgICAgICAgICAgLy8gdGFibGUgYm91bmRhcnkuIEkgQ291bGRuJ3QgYWNoaWV2ZSB0aGlzIGFmZmVjdCBhbnkgb3RoZXIgd2F5LlxcbiAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLy8gTmVlZCBhIHNtYWxsZXIgZm9udCBhdCBzbWFsbGVyIHNjcmVlbiBzaXplcyBzbyB0aGF0IHRoZSB0YWJsZSBmaXRzXFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAZGV2aWNlLXdpZHRoLW1lZGl1bSkge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS0xODtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogQG1hcmdpbi1vdXRzaWRlIC8gMjtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IEBtYXJnaW4tb3V0c2lkZSAvIDI7XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAZGV2aWNlLXdpZHRoLXNtYWxsKSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplLTE0O1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBAZGltZW5zLTQ7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBAZGltZW5zLTQ7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJl9fc3RhdHVzLWljb24ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDBweDtcXG4gICAgICAgIHdpZHRoOiBAZGltZW5zLTMyO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAbWFyZ2luLW91dHNpZGU7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IEB0cmFuc3Rpb24tZHVyYXRpb24gZWFzZS1vdXQ7XFxuICAgICAgICBvcGFjaXR5OiAxOyAgICAgICAgXFxuXFxuICAgICAgICAmLS1oaWRkZW4ge1xcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IG5vbmUgd29uJ3Qgd29yayBoZXJlLiBOZWVkcyB0byB1c2UgJ3Zpc2liaWxpdHknIHNvXFxuICAgICAgICAgICAgLy8gdGhlIGZhZGUtaW4gdHJhbnNpdGlvbiBvY2N1cnNcXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8vIFVzZSBhIHNtYWxsZXIgaWNvbiBvbiBzbWFsbGVyIHdpZHRoIGRldmljZXMgc28gdGhhdCB0aGUgdGFibGUgaXNuJ3RcXG4gICAgICAgIC8vIHB1c2hlZCBzbGlnaHRseSBvZmYgc2NyZWVuXFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAZGV2aWNlLXdpZHRoLW1lZGl1bSkge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogQG1hcmdpbi1vdXRzaWRlIC8gMjtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBkZXZpY2Utd2lkdGgtc21hbGwpIHtcXG4gICAgICAgICAgICB3aWR0aDogQGRpbWVucy0xNjtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IEBkaW1lbnMtNDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAgICAgIC8vIERvbid0IHNob3cgYnkgZGVmYXVsdFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7ICAgIC8vIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBicm93c2VyIHdpbmRvd1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDE7ICAgICAgICAgLy8gcG9zaXRpb24gb24gdG9wIG9mIHRoZSBvdGhlciBjb250ZW50XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cihAZGltZW5zLTQpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgJi0tdmlzaWJsZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgICZfX3RleHQge1xcbiAgICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplLTMwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IEBkaW1lbnMtMzI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbmV1dHJhbC0xMDA7XFxuICAgICAgICBtYXgtd2lkdGg6IDIwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwJTtcXG4gICAgICAgIGJvcmRlcjogQGRpbWVucy00IHNvbGlkIEBuZXV0cmFsLTMwMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBkaW1lbnMtMTI7XFxuICAgICAgICBwYWRkaW5nOiBAZGltZW5zLTQ4O1xcblxcbiAgICAgICAgLy8gU2hyaW5rIHRoZSB0ZXh0IGF0IHNtYWxsZXIgZGV2aWNlIHdpZHRoc1xcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGRldmljZS13aWR0aC1sYXJnZSkge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS0zMDtcXG4gICAgICAgICAgICBwYWRkaW5nOiBAZGltZW5zLTMyO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAlO1xcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGRldmljZS13aWR0aC1tZWRpdW0pIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IEBmb250LXNpemUtMjQ7XFxuICAgICAgICAgICAgcGFkZGluZzogQGRpbWVucy0yNDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiB1bnNldDtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBkZXZpY2Utd2lkdGgtc21hbGwpIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IEBmb250LXNpemUtMjA7XFxuICAgICAgICAgICAgcGFkZGluZzogQGRpbWVucy0xNjtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiB1bnNldDtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBkZXZpY2Utd2lkdGgteHNtYWxsKSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplLTE4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IEBkaW1lbnMtMTI7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgICAgICAgICAgbWF4LWhlaWdodDogdW5zZXQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVU9qSWcxX2k2dDhrQ0hLbTQ1OVd4WnFpN2oudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTUvSlRVUGpJZzFfaTZ0OGtDSEttNDU5V3haQmdfRC13LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVVBqSWcxX2k2dDhrQ0hLbTQ1OVd4WllnekQtdy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxNS9KVFVRaklnMV9pNnQ4a0NIS200NTlXeGh6Zy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxNS9KVFVQaklnMV9pNnQ4a0NIS200NTlXeFpPZzNELXcudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTUvSlRVUGpJZzFfaTZ0OGtDSEttNDU5V3haRmdyRC13LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVVBqSWcxX2k2dDhrQ0hLbTQ1OVd4WmNndkQtdy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxNS9KVFVQaklnMV9pNnQ4a0NIS200NTlXeFpiZ2pELXcudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTUvSlRVUGpJZzFfaTZ0OGtDSEttNDU5V3haU2duRC13LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVVFqSWcxX2k2dDhrQ0hLbTQ1X1FwaHpnLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2FaQTdnNC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxNS9KVFVSaklnMV9pNnQ4a0NIS200NV9jSkQ3ZzQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTUvSlRVU2pJZzFfaTZ0OGtDSEttNDV4VzQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTUvSlRVUmpJZzFfaTZ0OGtDSEttNDVfWnBDN2c0LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2JaRjdnNC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tb250c2VycmF0L3YxNS9KVFVSaklnMV9pNnQ4a0NIS200NV9kSkU3ZzQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92MTUvSlRVUmpJZzFfaTZ0OGtDSEttNDVfYzVIN2c0LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjE1L0pUVVJqSWcxX2k2dDhrQ0hLbTQ1X2VwRzdnNC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5sZXNzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG5cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9IGVsc2Uge1xuXHRcdHJvb3QuQWRiID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0bGV0IEFkYiA9IHt9O1xuXG5cdEFkYi5PcHQgPSB7fTtcblx0QWRiLk9wdC5kZWJ1ZyA9IGZhbHNlO1xuXHRBZGIuT3B0LmR1bXAgPSBmYWxzZTtcblxuXHRBZGIuT3B0LmtleV9zaXplID0gMjA0ODtcblx0QWRiLk9wdC5yZXVzZV9rZXkgPSAtMTtcblxuXHQvLyBTZXQgdGhpcyB0byBmYWxzZSBmb3IgbmV3IGRldmljZXMgKHBvc3QgRGVjIDIwMTcpIGlmXG5cdC8vIGF1dG9kZXRlY3Rpb24gZG9lc24ndCBoYW5kbGUgaXQgYXV0b21hdGljYWxseS5cblx0QWRiLk9wdC51c2VfY2hlY2tzdW0gPSB0cnVlO1xuXG5cdGxldCBkYiA9IGluaXRfZGIoKTtcblx0bGV0IGtleXMgPSBkYi50aGVuKGxvYWRfa2V5cyk7XG5cblx0QWRiLm9wZW4gPSBmdW5jdGlvbih0cmFuc3BvcnQpIHtcblx0XHRpZiAodHJhbnNwb3J0ID09IFwiV2ViVVNCXCIpXG5cdFx0XHRyZXR1cm4gQWRiLldlYlVTQi5UcmFuc3BvcnQub3BlbigpO1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgdHJhbnNwb3J0OiBcIiArIHRyYW5zcG9ydCk7XG5cdH07XG5cblx0QWRiLldlYlVTQiA9IHt9O1xuXG5cdEFkYi5XZWJVU0IuVHJhbnNwb3J0ID0gZnVuY3Rpb24oZGV2aWNlKSB7XG5cdFx0dGhpcy5kZXZpY2UgPSBkZXZpY2U7XG5cblx0XHRpZiAoQWRiLk9wdC5kZWJ1Zylcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMpO1xuXHR9O1xuXG5cdEFkYi5XZWJVU0IuVHJhbnNwb3J0Lm9wZW4gPSBmdW5jdGlvbigpIHtcblx0XHRsZXQgZmlsdGVycyA9IFtcblx0XHRcdHsgY2xhc3NDb2RlOiAyNTUsIHN1YmNsYXNzQ29kZTogNjYsIHByb3RvY29sQ29kZTogMSB9LFxuXHRcdFx0eyBjbGFzc0NvZGU6IDI1NSwgc3ViY2xhc3NDb2RlOiA2NiwgcHJvdG9jb2xDb2RlOiAzIH1cblx0XHRdO1xuXG5cdFx0cmV0dXJuIG5hdmlnYXRvci51c2IucmVxdWVzdERldmljZSh7IGZpbHRlcnM6IGZpbHRlcnMgfSlcblx0XHRcdC50aGVuKGRldmljZSA9PiBkZXZpY2Uub3BlbigpXG5cdFx0XHRcdC50aGVuKCgpID0+IG5ldyBBZGIuV2ViVVNCLlRyYW5zcG9ydChkZXZpY2UpKSk7XG5cdH07XG5cblx0QWRiLldlYlVTQi5UcmFuc3BvcnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5kZXZpY2UuY2xvc2UoKTtcblx0fTtcblxuXHRBZGIuV2ViVVNCLlRyYW5zcG9ydC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmRldmljZS5yZXNldCgpO1xuXHR9O1xuXG5cdEFkYi5XZWJVU0IuVHJhbnNwb3J0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZXAsIGRhdGEpIHtcblx0XHRpZiAoQWRiLk9wdC5kdW1wKVxuXHRcdFx0aGV4ZHVtcChuZXcgRGF0YVZpZXcoZGF0YSksIFwiXCIgKyBlcCArIFwiPT0+IFwiKTtcblxuXHRcdHJldHVybiB0aGlzLmRldmljZS50cmFuc2Zlck91dChlcCwgZGF0YSk7XG5cdH07XG5cblx0QWRiLldlYlVTQi5UcmFuc3BvcnQucHJvdG90eXBlLnJlY2VpdmUgPSBmdW5jdGlvbihlcCwgbGVuKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGV2aWNlLnRyYW5zZmVySW4oZXAsIGxlbilcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKEFkYi5PcHQuZHVtcClcblx0XHRcdFx0XHRoZXhkdW1wKHJlc3BvbnNlLmRhdGEsIFwiPD09XCIgKyBlcCArIFwiIFwiKTtcblxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdEFkYi5XZWJVU0IuVHJhbnNwb3J0LnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24oZmlsdGVyKSB7XG5cdFx0Zm9yIChsZXQgaSBpbiB0aGlzLmRldmljZS5jb25maWd1cmF0aW9ucykge1xuXHRcdFx0bGV0IGNvbmYgPSB0aGlzLmRldmljZS5jb25maWd1cmF0aW9uc1tpXTtcblx0XHRcdGZvciAobGV0IGogaW4gY29uZi5pbnRlcmZhY2VzKSB7XG5cdFx0XHRcdGxldCBpbnRmID0gY29uZi5pbnRlcmZhY2VzW2pdO1xuXHRcdFx0XHRmb3IgKGxldCBrIGluIGludGYuYWx0ZXJuYXRlcykge1xuXHRcdFx0XHRcdGxldCBhbHQgPSBpbnRmLmFsdGVybmF0ZXNba107XG5cdFx0XHRcdFx0aWYgKGZpbHRlci5jbGFzc0NvZGUgPT0gYWx0LmludGVyZmFjZUNsYXNzICYmXG5cdFx0XHRcdFx0ICAgIGZpbHRlci5zdWJjbGFzc0NvZGUgPT0gYWx0LmludGVyZmFjZVN1YmNsYXNzICYmXG5cdFx0XHRcdFx0ICAgIGZpbHRlci5wcm90b2NvbENvZGUgPT0gYWx0LmludGVyZmFjZVByb3RvY29sKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4geyBjb25mOiBjb25mLCBpbnRmOiBpbnRmLCBhbHQ6IGFsdCB9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0QWRiLldlYlVTQi5UcmFuc3BvcnQucHJvdG90eXBlLmlzQWRiID0gZnVuY3Rpb24oKSB7XG5cdFx0bGV0IG1hdGNoID0gdGhpcy5maW5kKHsgY2xhc3NDb2RlOiAyNTUsIHN1YmNsYXNzQ29kZTogNjYsIHByb3RvY29sQ29kZTogMSB9KTtcblx0XHRyZXR1cm4gbWF0Y2ggIT0gbnVsbDtcblx0fTtcblxuXHRBZGIuV2ViVVNCLlRyYW5zcG9ydC5wcm90b3R5cGUuaXNGYXN0Ym9vdCA9IGZ1bmN0aW9uKCkge1xuXHRcdGxldCBtYXRjaCA9IHRoaXMuZmluZCh7IGNsYXNzQ29kZTogMjU1LCBzdWJjbGFzc0NvZGU6IDY2LCBwcm90b2NvbENvZGU6IDMgfSk7XG5cdFx0cmV0dXJuIG1hdGNoICE9IG51bGw7XG5cdH07XG5cblx0QWRiLldlYlVTQi5UcmFuc3BvcnQucHJvdG90eXBlLmdldERldmljZSA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXHRcdGxldCBtYXRjaCA9IHRoaXMuZmluZChmaWx0ZXIpO1xuXHRcdHJldHVybiB0aGlzLmRldmljZS5zZWxlY3RDb25maWd1cmF0aW9uKG1hdGNoLmNvbmYuY29uZmlndXJhdGlvblZhbHVlKVxuXHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5kZXZpY2UuY2xhaW1JbnRlcmZhY2UobWF0Y2guaW50Zi5pbnRlcmZhY2VOdW1iZXIpKVxuXHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5kZXZpY2Uuc2VsZWN0QWx0ZXJuYXRlSW50ZXJmYWNlKG1hdGNoLmludGYuaW50ZXJmYWNlTnVtYmVyLCBtYXRjaC5hbHQuYWx0ZXJuYXRlU2V0dGluZykpXG5cdFx0XHQudGhlbigoKSA9PiBtYXRjaCk7XG5cdH07XG5cblx0QWRiLldlYlVTQi5UcmFuc3BvcnQucHJvdG90eXBlLmNvbm5lY3RBZGIgPSBmdW5jdGlvbihiYW5uZXIsIGF1dGhfdXNlcl9ub3RpZnkgPSBudWxsKSB7XG5cdFx0bGV0IFZFUlNJT04gPSAweDAxMDAwMDAwO1xuXHRcdGxldCBWRVJTSU9OX05PX0NIRUNLU1VNID0gMHgwMTAwMDAwMTtcblx0XHRsZXQgTUFYX1BBWUxPQUQgPSAyNTYgKiAxMDI0O1xuXG5cdFx0bGV0IGtleV9pZHggPSAwO1xuXHRcdGxldCBBVVRIX1RPS0VOID0gMTtcblxuXHRcdGxldCB2ZXJzaW9uX3VzZWQgPSBBZGIuT3B0LnVzZV9jaGVja3N1bSA/IFZFUlNJT04gOiBWRVJTSU9OX05PX0NIRUNLU1VNO1xuXHRcdGxldCBtID0gbmV3IEFkYi5NZXNzYWdlKFwiQ05YTlwiLCB2ZXJzaW9uX3VzZWQsIE1BWF9QQVlMT0FELCBcIlwiICsgYmFubmVyICsgXCJcXDBcIik7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGV2aWNlKHsgY2xhc3NDb2RlOiAyNTUsIHN1YmNsYXNzQ29kZTogNjYsIHByb3RvY29sQ29kZTogMSB9KVxuXHRcdFx0LnRoZW4obWF0Y2ggPT4gbmV3IEFkYi5XZWJVU0IuRGV2aWNlKHRoaXMsIG1hdGNoKSlcblx0XHRcdC50aGVuKGFkYiA9PiBtLnNlbmRfcmVjZWl2ZShhZGIpXG5cdFx0XHRcdC50aGVuKChmdW5jdGlvbiBkb19hdXRoX3Jlc3BvbnNlKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmNtZCAhPSBcIkFVVEhcIiB8fCByZXNwb25zZS5hcmcwICE9IEFVVEhfVE9LRU4pXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cblx0XHRcdFx0XHRyZXR1cm4ga2V5cy50aGVuKGtleXMgPT5cblx0XHRcdFx0XHRcdGRvX2F1dGgoYWRiLCBrZXlzLCBrZXlfaWR4KyssIHJlc3BvbnNlLmRhdGEuYnVmZmVyLCBkb19hdXRoX3Jlc3BvbnNlLCBhdXRoX3VzZXJfbm90aWZ5KSk7XG5cdFx0XHRcdH0pKVxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmNtZCAhPSBcIkNOWE5cIilcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjb25uZWN0IHdpdGggJ1wiICsgYmFubmVyICsgXCInXCIpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd2ZXJzaW9uJywgcmVzcG9uc2UuYXJnMCk7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmFyZzAgIT0gVkVSU0lPTiAmJiByZXNwb25zZS5hcmcwICE9IFZFUlNJT05fTk9fQ0hFQ0tTVU0pXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJWZXJzaW9uIG1pc21hdGNoOiBcIiArIHJlc3BvbnNlLmFyZzAgKyBcIiAoZXhwZWN0ZWQ6IFwiICsgVkVSU0lPTiArIFwiIG9yIFwiICsgVkVSU0lPTl9OT19DSEVDS1NVTSArIFwiKVwiKTtcblx0XHRcdFx0XHRpZiAoQWRiLk9wdC5kZWJ1Zylcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHdpdGggJ1wiICsgYmFubmVyICsgXCInLCBtYXhfcGF5bG9hZDogXCIgKyByZXNwb25zZS5hcmcxKTtcblx0XHRcdFx0XHRhZGIubWF4X3BheWxvYWQgPSByZXNwb25zZS5hcmcxO1xuXHRcdFx0XHRcdGlmIChyZXNwb25zZS5hcmcwID09IFZFUlNJT05fTk9fQ0hFQ0tTVU0pXG5cdFx0XHRcdFx0XHRBZGIuT3B0LnVzZV9jaGVja3N1bSA9IGZhbHNlO1xuXHRcdFx0XHRcdGFkYi5iYW5uZXIgPSBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKS5kZWNvZGUocmVzcG9uc2UuZGF0YSk7XG5cdFx0XHRcdFx0bGV0IHBpZWNlcyA9IGFkYi5iYW5uZXIuc3BsaXQoJzonKTtcblx0XHRcdFx0XHRhZGIubW9kZSA9IHBpZWNlc1swXTtcblx0XHRcdFx0XHRyZXR1cm4gYWRiO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fTtcblxuXHRBZGIuV2ViVVNCLlRyYW5zcG9ydC5wcm90b3R5cGUuY29ubmVjdEZhc3Rib290ID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGV2aWNlKHsgY2xhc3NDb2RlOiAyNTUsIHN1YmNsYXNzQ29kZTogNjYsIHByb3RvY29sQ29kZTogMyB9KVxuXHRcdFx0LnRoZW4obWF0Y2ggPT4gbmV3IEZhc3Rib290LldlYlVTQi5EZXZpY2UodGhpcywgbWF0Y2gpKVxuXHRcdFx0LnRoZW4oZmFzdGJvb3QgPT4gZmFzdGJvb3Quc2VuZChcImdldHZhcjptYXgtZG93bmxvYWQtc2l6ZVwiKVxuXHRcdFx0XHQudGhlbigoKSA9PiBmYXN0Ym9vdC5yZWNlaXZlKClcblx0XHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgY21kID0gZGVjb2RlX2NtZChyZXNwb25zZS5nZXRVaW50MzIoMCwgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0aWYgKGNtZCA9PSBcIkZBSUxcIilcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIG9wZW4gRmFzdGJvb3RcIik7XG5cblx0XHRcdFx0XHRcdGZhc3Rib290LmdldF9jbWQgPSByID0+IGRlY29kZV9jbWQoci5nZXRVaW50MzIoMCwgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0ZmFzdGJvb3QuZ2V0X3BheWxvYWQgPSByID0+IHIuYnVmZmVyLnNsaWNlKDQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhc3Rib290O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdH07XG5cblx0QWRiLldlYlVTQi5EZXZpY2UgPSBmdW5jdGlvbih0cmFuc3BvcnQsIG1hdGNoKSB7XG5cdFx0dGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cdFx0dGhpcy5tYXhfcGF5bG9hZCA9IDQwOTY7XG5cblx0XHR0aGlzLmVwX2luID0gZ2V0X2VwX251bShtYXRjaC5hbHQuZW5kcG9pbnRzLCBcImluXCIpO1xuXHRcdHRoaXMuZXBfb3V0ID0gZ2V0X2VwX251bShtYXRjaC5hbHQuZW5kcG9pbnRzLCBcIm91dFwiKTtcblxuXHRcdHRoaXMudHJhbnNwb3J0LnJlc2V0KCk7XG5cdH1cblxuXHRBZGIuV2ViVVNCLkRldmljZS5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKHNlcnZpY2UpIHtcblx0XHRyZXR1cm4gQWRiLlN0cmVhbS5vcGVuKHRoaXMsIHNlcnZpY2UpO1xuXHR9O1xuXG5cdEFkYi5XZWJVU0IuRGV2aWNlLnByb3RvdHlwZS5zaGVsbCA9IGZ1bmN0aW9uKGNvbW1hbmQpIHtcblx0XHRyZXR1cm4gQWRiLlN0cmVhbS5vcGVuKHRoaXMsIFwic2hlbGw6XCIgKyBjb21tYW5kKTtcblx0fTtcblxuXHRBZGIuV2ViVVNCLkRldmljZS5wcm90b3R5cGUudGNwaXAgPSBmdW5jdGlvbihwb3J0KSB7XG5cdFx0cmV0dXJuIEFkYi5TdHJlYW0ub3Blbih0aGlzLCBcInRjcGlwOlwiICsgcG9ydCk7XG5cdH07XG5cblx0QWRiLldlYlVTQi5EZXZpY2UucHJvdG90eXBlLnN5bmMgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gQWRiLlN0cmVhbS5vcGVuKHRoaXMsIFwic3luYzpcIik7XG5cdH07XG5cblx0QWRiLldlYlVTQi5EZXZpY2UucHJvdG90eXBlLnJlYm9vdCA9IGZ1bmN0aW9uKGNvbW1hbmQ9XCJcIikge1xuXHRcdHJldHVybiBBZGIuU3RyZWFtLm9wZW4odGhpcywgXCJyZWJvb3Q6XCIgKyBjb21tYW5kKTtcblx0fTtcblxuXHRBZGIuV2ViVVNCLkRldmljZS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGxldCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG5cdFx0XHRsZXQgc3RyaW5nX2RhdGEgPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IGVuY29kZXIuZW5jb2RlKHN0cmluZ19kYXRhKS5idWZmZXI7XG5cdFx0fVxuXG5cdFx0aWYgKGRhdGEgIT0gbnVsbCAmJiBkYXRhLmxlbmd0aCA+IHRoaXMubWF4X3BheWxvYWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJkYXRhIGlzIHRvbyBiaWc6IFwiICsgZGF0YS5sZW5ndGggKyBcIiBieXRlcyAobWF4OiBcIiArIHRoaXMubWF4X3BheWxvYWQgKyBcIiBieXRlcylcIik7XG5cblx0XHRyZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZCh0aGlzLmVwX291dCwgZGF0YSk7XG5cdH07XG5cblx0QWRiLldlYlVTQi5EZXZpY2UucHJvdG90eXBlLnJlY2VpdmUgPSBmdW5jdGlvbihsZW4pIHtcblx0XHRyZXR1cm4gdGhpcy50cmFuc3BvcnQucmVjZWl2ZSh0aGlzLmVwX2luLCBsZW4pO1xuXHR9O1xuXG5cdGxldCBGYXN0Ym9vdCA9IHt9O1xuXHRGYXN0Ym9vdC5XZWJVU0IgPSB7fTtcblxuXHRGYXN0Ym9vdC5XZWJVU0IuRGV2aWNlID0gZnVuY3Rpb24odHJhbnNwb3J0LCBtYXRjaCkge1xuXHRcdHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuXHRcdHRoaXMubWF4X2RhdGFzaXplID0gNjQ7XG5cblx0XHR0aGlzLmVwX2luID0gZ2V0X2VwX251bShtYXRjaC5hbHQuZW5kcG9pbnRzLCBcImluXCIpO1xuXHRcdHRoaXMuZXBfb3V0ID0gZ2V0X2VwX251bShtYXRjaC5hbHQuZW5kcG9pbnRzLCBcIm91dFwiKTtcblx0fTtcblxuXHRGYXN0Ym9vdC5XZWJVU0IuRGV2aWNlLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0bGV0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcblx0XHRcdGxldCBzdHJpbmdfZGF0YSA9IGRhdGE7XG5cdFx0XHRkYXRhID0gZW5jb2Rlci5lbmNvZGUoc3RyaW5nX2RhdGEpLmJ1ZmZlcjtcblx0XHR9XG5cblx0XHRpZiAoZGF0YSAhPSBudWxsICYmIGRhdGEubGVuZ3RoID4gdGhpcy5tYXhfZGF0YXNpemUpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJkYXRhIGlzIHRvbyBiaWc6IFwiICsgZGF0YS5sZW5ndGggKyBcIiBieXRlcyAobWF4OiBcIiArIHRoaXMubWF4X2RhdGFzaXplICsgXCIgYnl0ZXMpXCIpO1xuXG5cdFx0cmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQodGhpcy5lcF9vdXQsIGRhdGEpO1xuXHR9O1xuXG5cdEZhc3Rib290LldlYlVTQi5EZXZpY2UucHJvdG90eXBlLnJlY2VpdmUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy50cmFuc3BvcnQucmVjZWl2ZSh0aGlzLmVwX2luLCA2NCk7XG5cdH07XG5cblx0QWRiLk1lc3NhZ2UgPSBmdW5jdGlvbihjbWQsIGFyZzAsIGFyZzEsIGRhdGEgPSBudWxsKSB7XG5cdFx0aWYgKGNtZC5sZW5ndGggIT0gNClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29tbWFuZDogJ1wiICsgY21kICsgXCInXCIpO1xuXG5cdFx0dGhpcy5jbWQgPSBjbWQ7XG5cdFx0dGhpcy5hcmcwID0gYXJnMDtcblx0XHR0aGlzLmFyZzEgPSBhcmcxO1xuXHRcdHRoaXMubGVuZ3RoID0gKGRhdGEgPT09IG51bGwpID8gMCA6ICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikgPyBkYXRhLmxlbmd0aCA6IGRhdGEuYnl0ZUxlbmd0aDtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHR9O1xuXG5cdEFkYi5NZXNzYWdlLmNoZWNrc3VtID0gZnVuY3Rpb24oZGF0YV92aWV3KSB7XG5cdFx0bGV0IHN1bSA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFfdmlldy5ieXRlTGVuZ3RoOyBpKyspXG5cdFx0XHRzdW0gKz0gZGF0YV92aWV3LmdldFVpbnQ4KGkpO1xuXG5cdFx0cmV0dXJuIHN1bSAmIDB4ZmZmZmZmZmY7XG5cdH07XG5cblx0QWRiLk1lc3NhZ2Uuc2VuZCA9IGZ1bmN0aW9uKGRldmljZSwgbWVzc2FnZSkge1xuXHRcdGxldCBoZWFkZXIgPSBuZXcgQXJyYXlCdWZmZXIoMjQpO1xuXHRcdGxldCBjbWQgPSBlbmNvZGVfY21kKG1lc3NhZ2UuY21kKTtcblx0XHRsZXQgbWFnaWMgPSBjbWQgXiAweGZmZmZmZmZmO1xuXHRcdGxldCBkYXRhID0gbnVsbDtcblx0XHRsZXQgbGVuID0gMDtcblx0XHRsZXQgY2hlY2tzdW0gPSAwO1xuXG5cdFx0aWYgKEFkYi5PcHQuZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuXHRcdGlmIChtZXNzYWdlLmRhdGEgIT0gbnVsbCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZXNzYWdlLmRhdGEgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0bGV0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcblx0XHRcdFx0ZGF0YSA9IGVuY29kZXIuZW5jb2RlKG1lc3NhZ2UuZGF0YSkuYnVmZmVyO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcobWVzc2FnZS5kYXRhKSkge1xuXHRcdFx0XHRkYXRhID0gbWVzc2FnZS5kYXRhLmJ1ZmZlcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRhdGEgPSBtZXNzYWdlLmRhdGE7XG5cdFx0XHR9XG5cblx0XHRcdGxlbiA9IGRhdGEuYnl0ZUxlbmd0aDtcblx0XHRcdGlmIChBZGIuT3B0LnVzZV9jaGVja3N1bSlcblx0XHRcdFx0Y2hlY2tzdW0gPSBBZGIuTWVzc2FnZS5jaGVja3N1bShuZXcgRGF0YVZpZXcoZGF0YSkpO1xuXG5cdFx0XHRpZiAobGVuID4gZGV2aWNlLm1heF9wYXlsb2FkKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJkYXRhIGlzIHRvbyBiaWc6IFwiICsgbGVuICsgXCIgYnl0ZXMgKG1heDogXCIgKyBkZXZpY2UubWF4X3BheWxvYWQgKyBcIiBieXRlcylcIik7XG5cdFx0fVxuXG5cdFx0bGV0IHZpZXcgPSBuZXcgRGF0YVZpZXcoaGVhZGVyKTtcblx0XHR2aWV3LnNldFVpbnQzMigwLCBjbWQsIHRydWUpO1xuXHRcdHZpZXcuc2V0VWludDMyKDQsIG1lc3NhZ2UuYXJnMCwgdHJ1ZSk7XG5cdFx0dmlldy5zZXRVaW50MzIoOCwgbWVzc2FnZS5hcmcxLCB0cnVlKTtcblx0XHR2aWV3LnNldFVpbnQzMigxMiwgbGVuLCB0cnVlKTtcblx0XHR2aWV3LnNldFVpbnQzMigxNiwgY2hlY2tzdW0sIHRydWUpO1xuXHRcdHZpZXcuc2V0VWludDMyKDIwLCBtYWdpYywgdHJ1ZSk7XG5cblx0XHRsZXQgc2VxID0gZGV2aWNlLnNlbmQoaGVhZGVyKTtcblx0XHRpZiAobGVuID4gMClcblx0XHRcdHNlcS50aGVuKCgpID0+IGRldmljZS5zZW5kKGRhdGEpKTtcblx0XHRyZXR1cm4gc2VxO1xuXHR9O1xuXG5cdEFkYi5NZXNzYWdlLnJlY2VpdmUgPSBmdW5jdGlvbihkZXZpY2UpIHtcblx0XHRyZXR1cm4gZGV2aWNlLnJlY2VpdmUoMjQpIC8vQWRiLk9wdC51c2VfY2hlY2tzdW0gPyAyNCA6IDIwKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRsZXQgY21kID0gcmVzcG9uc2UuZ2V0VWludDMyKDAsIHRydWUpO1xuXHRcdFx0XHRsZXQgYXJnMCA9IHJlc3BvbnNlLmdldFVpbnQzMig0LCB0cnVlKTtcblx0XHRcdFx0bGV0IGFyZzEgPSByZXNwb25zZS5nZXRVaW50MzIoOCwgdHJ1ZSk7XG5cdFx0XHRcdGxldCBsZW4gPSByZXNwb25zZS5nZXRVaW50MzIoMTIsIHRydWUpO1xuXHRcdFx0XHRsZXQgY2hlY2sgPSByZXNwb25zZS5nZXRVaW50MzIoMTYsIHRydWUpO1xuXHRcdFx0XHQvLyBBbmRyb2lkIHNlZW1zIHRvIGhhdmUgc3RvcHBlZCBwcm92aWRpbmcgY2hlY2tzdW1zXG5cdFx0XHRcdGlmIChBZGIudXNlX2NoZWNrc3VtICYmIHJlc3BvbnNlLmJ5dGVMZW5ndGggPiAyMCkge1xuXHRcdFx0XHRcdGxldCBtYWdpYyA9IHJlc3BvbnNlLmdldFVpbnQzMigyMCwgdHJ1ZSk7XG5cblx0XHRcdFx0XHRpZiAoKGNtZCBeIG1hZ2ljKSAhPSAtMSlcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIm1hZ2ljIG1pc21hdGNoXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y21kID0gZGVjb2RlX2NtZChjbWQpO1xuXG5cdFx0XHRcdGlmIChsZW4gPT0gMCkge1xuXHRcdFx0XHRcdGxldCBtZXNzYWdlID0gbmV3IEFkYi5NZXNzYWdlKGNtZCwgYXJnMCwgYXJnMSk7XG5cdFx0XHRcdFx0aWYgKEFkYi5PcHQuZGVidWcpXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcblx0XHRcdFx0XHRyZXR1cm4gbWVzc2FnZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBkZXZpY2UucmVjZWl2ZShsZW4pXG5cdFx0XHRcdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoQWRiLk9wdC51c2VfY2hlY2tzdW0gJiYgQWRiLk1lc3NhZ2UuY2hlY2tzdW0oZGF0YSkgIT0gY2hlY2spXG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrc3VtIG1pc21hdGNoXCIpO1xuXG5cdFx0XHRcdFx0XHRsZXQgbWVzc2FnZSA9IG5ldyBBZGIuTWVzc2FnZShjbWQsIGFyZzAsIGFyZzEsIGRhdGEpO1xuXHRcdFx0XHRcdFx0aWYgKEFkYi5PcHQuZGVidWcpXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fTtcblxuXHRBZGIuTWVzc2FnZS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRldmljZSkge1xuXHRcdHJldHVybiBBZGIuTWVzc2FnZS5zZW5kKGRldmljZSwgdGhpcyk7XG5cdH07XG5cblx0QWRiLk1lc3NhZ2UucHJvdG90eXBlLnNlbmRfcmVjZWl2ZSA9IGZ1bmN0aW9uKGRldmljZSkge1xuXHRcdHJldHVybiB0aGlzLnNlbmQoZGV2aWNlKVxuXHRcdFx0LnRoZW4oKCkgPT4gQWRiLk1lc3NhZ2UucmVjZWl2ZShkZXZpY2UpKTtcblx0fTtcblxuXHRBZGIuU3luY0ZyYW1lID0gZnVuY3Rpb24oY21kLCBsZW5ndGggPSAwLCBkYXRhID0gbnVsbCkge1xuXHRcdGlmIChjbWQubGVuZ3RoICE9IDQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbW1hbmQ6ICdcIiArIGNtZCArIFwiJ1wiKTtcblxuXHRcdHRoaXMuY21kID0gY21kO1xuXHRcdHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdH07XG5cblx0QWRiLlN5bmNGcmFtZS5zZW5kID0gZnVuY3Rpb24oc3RyZWFtLCBmcmFtZSkge1xuXHRcdGxldCBkYXRhID0gbmV3IEFycmF5QnVmZmVyKDgpO1xuXHRcdGxldCBjbWQgPSBlbmNvZGVfY21kKGZyYW1lLmNtZCk7XG5cblx0XHRpZiAoQWRiLk9wdC5kZWJ1Zylcblx0XHRcdGNvbnNvbGUubG9nKGZyYW1lKTtcblxuXHRcdGxldCB2aWV3ID0gbmV3IERhdGFWaWV3KGRhdGEpO1xuXHRcdHZpZXcuc2V0VWludDMyKDAsIGNtZCwgdHJ1ZSk7XG5cdFx0dmlldy5zZXRVaW50MzIoNCwgZnJhbWUubGVuZ3RoLCB0cnVlKTtcblxuXHRcdHJldHVybiBzdHJlYW0uc2VuZChcIldSVEVcIiwgZGF0YSk7XG5cdH07XG5cblx0QWRiLlN5bmNGcmFtZS5yZWNlaXZlID0gZnVuY3Rpb24oc3RyZWFtKSB7XG5cdFx0cmV0dXJuIHN0cmVhbS5yZWNlaXZlKClcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLmNtZCA9PSBcIldSVEVcIikge1xuXHRcdFx0XHRcdGxldCBjbWQgPSBkZWNvZGVfY21kKHJlc3BvbnNlLmRhdGEuZ2V0VWludDMyKDAsIHRydWUpKTtcblxuXHRcdFx0XHRcdGlmIChjbWQgPT0gXCJPS0FZXCIgfHwgY21kID09IFwiREFUQVwiIHx8IGNtZCA9PSBcIkRPTkVcIiB8fCBjbWQgPT0gXCJGQUlMXCIpIHtcblx0XHRcdFx0XHRcdGxldCBsZW4gPSByZXNwb25zZS5kYXRhLmdldFVpbnQzMig0LCB0cnVlKTtcblx0XHRcdFx0XHRcdGxldCBkYXRhID0gbmV3IERhdGFWaWV3KHJlc3BvbnNlLmRhdGEuYnVmZmVyLnNsaWNlKDgpKTtcblxuXHRcdFx0XHRcdFx0aWYgKGxlbiA9PSAwIHx8IGRhdGEuYnl0ZUxlbmd0aCA+PSBsZW4pIHtcblx0XHRcdFx0XHRcdFx0bGV0IGZyYW1lID0gbmV3IEFkYi5TeW5jRnJhbWUoY21kLCBsZW4sIGRhdGEpO1xuXHRcdFx0XHRcdFx0XHRpZiAoQWRiLk9wdC5kZWJ1Zylcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhmcmFtZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmcmFtZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIHN0cmVhbS5zZW5kKFwiT0tBWVwiKVxuXHRcdFx0XHRcdFx0XHQudGhlbigoKSA9PiBzdHJlYW0ucmVjZWl2ZSgpKVxuXHRcdFx0XHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmRhdGEgPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGZyYW1lID0gbmV3IEFkYi5TeW5jRnJhbWUoY21kKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChBZGIuT3B0LmRlYnVnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhmcmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZnJhbWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGNtZDIgPSBkZWNvZGVfY21kKHJlc3BvbnNlLmRhdGEuZ2V0VWludDMyKDAsIHRydWUpKTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChjbWQyID09IFwiT0tBWVwiIHx8IGNtZDIgPT0gXCJEQVRBXCIgfHwgY21kMiA9PSBcIkRPTkVcIiB8fCBjbWQyID09IFwiRkFJTFwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgbGVuID0gcmVzcG9uc2UuZGF0YS5nZXRVaW50MzIoNCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgZGF0YSA9IG5ldyBEYXRhVmlldyhyZXNwb25zZS5kYXRhLmJ1ZmZlci5zbGljZSg4KSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmIChsZW4gPT0gMCB8fCBkYXRhLmJ5dGVMZW5ndGggPj0gbGVuKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBmcmFtZSA9IG5ldyBBZGIuU3luY0ZyYW1lKGNtZDIsIGxlbiwgZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChBZGIuT3B0LmRlYnVnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGZyYW1lKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZyYW1lO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5kYXRhLmJ5dGVMZW5ndGggPCBsZW4pXG5cdFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJleHBlY3RlZCBhdCBsZWFzdCBcIiArIGxlbiArIFwiLCBnb3QgXCIgKyByZXNwb25zZS5kYXRhLmJ5dGVMZW5ndGgpO1xuXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGZyYW1lID0gbmV3IEFkYi5TeW5jRnJhbWUoY21kLCBsZW4sIHJlc3BvbnNlLmRhdGEpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChBZGIuT3B0LmRlYnVnKVxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZnJhbWUpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmcmFtZTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKEFkYi5PcHQuZGVidWcpXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRcdFx0aWYgKEFkYi5PcHQuZHVtcClcblx0XHRcdFx0XHRcdGhleGR1bXAocmVzcG9uc2UuZGF0YSwgXCJXUlRFOiBcIik7XG5cblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIFdSVEUgZnJhbWVcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2UuY21kID09IFwiT0tBWVwiKSB7XG5cdFx0XHRcdFx0bGV0IGZyYW1lID0gbmV3IEFkYi5TeW5jRnJhbWUoXCJPS0FZXCIpO1xuXHRcdFx0XHRcdGlmIChBZGIuT3B0LmRlYnVnKVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZnJhbWUpO1xuXHRcdFx0XHRcdHJldHVybiBmcmFtZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChBZGIuT3B0LmRlYnVnKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIFNZTkMgZnJhbWVcIik7XG5cdFx0XHR9KTtcblx0fTtcblxuXHRBZGIuU3luY0ZyYW1lLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oc3RyZWFtKSB7XG5cdFx0cmV0dXJuIEFkYi5TeW5jRnJhbWUuc2VuZChzdHJlYW0sIHRoaXMpO1xuXHR9O1xuXG5cdEFkYi5TeW5jRnJhbWUucHJvdG90eXBlLnNlbmRfcmVjZWl2ZSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuXHRcdHJldHVybiBBZGIuU3luY0ZyYW1lLnNlbmQoc3RyZWFtLCB0aGlzKVxuXHRcdFx0LnRoZW4oKCkgPT4gQWRiLlN5bmNGcmFtZS5yZWNlaXZlKHN0cmVhbSkpO1xuXHR9O1xuXG5cdEFkYi5TdHJlYW0gPSBmdW5jdGlvbihkZXZpY2UsIHNlcnZpY2UsIGxvY2FsX2lkLCByZW1vdGVfaWQpIHtcblx0XHR0aGlzLmRldmljZSA9IGRldmljZTtcblx0XHR0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuXHRcdHRoaXMubG9jYWxfaWQgPSBsb2NhbF9pZDtcblx0XHR0aGlzLnJlbW90ZV9pZCA9IHJlbW90ZV9pZDtcblx0XHR0aGlzLmNhbmNlbCA9IG51bGw7XG5cdH07XG5cblx0bGV0IG5leHRfaWQgPSAxO1xuXG5cdEFkYi5TdHJlYW0ub3BlbiA9IGZ1bmN0aW9uKGRldmljZSwgc2VydmljZSkge1xuXHRcdGxldCBsb2NhbF9pZCA9IG5leHRfaWQrKztcblx0XHRsZXQgcmVtb3RlX2lkID0gMDtcblxuXHRcdGxldCBtID0gbmV3IEFkYi5NZXNzYWdlKFwiT1BFTlwiLCBsb2NhbF9pZCwgcmVtb3RlX2lkLCBcIlwiICsgc2VydmljZSArIFwiXFwwXCIpO1xuXHRcdHJldHVybiBtLnNlbmRfcmVjZWl2ZShkZXZpY2UpXG5cdFx0XHQudGhlbihmdW5jdGlvbiBkb19yZXNwb25zZShyZXNwb25zZSkge1xuXHRcdFx0XHRpZiAocmVzcG9uc2UuYXJnMSAhPSBsb2NhbF9pZClcblx0XHRcdFx0XHRyZXR1cm4gQWRiLk1lc3NhZ2UucmVjZWl2ZShkZXZpY2UpLnRoZW4oZG9fcmVzcG9uc2UpO1xuXG5cdFx0XHRcdGlmIChyZXNwb25zZS5jbWQgIT0gXCJPS0FZXCIpXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiT3BlbiBmYWlsZWRcIik7XG5cblx0XHRcdFx0cmVtb3RlX2lkID0gcmVzcG9uc2UuYXJnMDtcblxuXHRcdFx0XHRpZiAoQWRiLk9wdC5kZWJ1Zykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiT3BlbmVkIHN0cmVhbSAnXCIgKyBzZXJ2aWNlICsgXCInXCIpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiIGxvY2FsX2lkOiAweFwiICsgdG9IZXgzMihsb2NhbF9pZCkpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiIHJlbW90ZV9pZDogMHhcIiArIHRvSGV4MzIocmVtb3RlX2lkKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbmV3IEFkYi5TdHJlYW0oZGV2aWNlLCBzZXJ2aWNlLCBsb2NhbF9pZCwgcmVtb3RlX2lkKTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdEFkYi5TdHJlYW0ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMubG9jYWxfaWQgIT0gMCkge1xuXHRcdFx0dGhpcy5sb2NhbF9pZCA9IDA7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZW5kKFwiQ0xTRVwiKTtcblx0XHR9XG5cblx0XHRpZiAoQWRiLk9wdC5kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJDbG9zZWQgc3RyZWFtICdcIiArIHRoaXMuc2VydmljZSArIFwiJ1wiKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiIGxvY2FsX2lkOiAweFwiICsgdG9IZXgzMih0aGlzLmxvY2FsX2lkKSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIiByZW1vdGVfaWQ6IDB4XCIgKyB0b0hleDMyKHRoaXMucmVtb3RlX2lkKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXJ2aWNlID0gXCJcIjtcblx0XHR0aGlzLnJlbW90ZV9pZCA9IDA7XG5cdH07XG5cblx0QWRiLlN0cmVhbS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGNtZCwgZGF0YT1udWxsKSB7XG5cdFx0bGV0IG0gPSBuZXcgQWRiLk1lc3NhZ2UoY21kLCB0aGlzLmxvY2FsX2lkLCB0aGlzLnJlbW90ZV9pZCwgZGF0YSk7XG5cdFx0cmV0dXJuIG0uc2VuZCh0aGlzLmRldmljZSk7XG5cdH07XG5cblx0QWRiLlN0cmVhbS5wcm90b3R5cGUucmVjZWl2ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBZGIuTWVzc2FnZS5yZWNlaXZlKHRoaXMuZGV2aWNlKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHQvLyByZW1vdGUncyBwcm9zcGVjdGl2ZSBvZiBsb2NhbF9pZC9yZW1vdGVfaWQgaXMgcmV2ZXJzZWRcblx0XHRcdFx0aWYgKHJlc3BvbnNlLmFyZzAgIT0gMCAmJiByZXNwb25zZS5hcmcwICE9IHRoaXMucmVtb3RlX2lkKVxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBhcmcwOiAweFwiICsgdG9IZXgzMihyZXNwb25zZS5hcmcwKSArIFwiIChleHBlY3RlZCAweFwiICsgdG9IZXgzMih0aGlzLnJlbW90ZV9pZCkgKyBcIilcIik7XG5cdFx0XHRcdGlmICh0aGlzLmxvY2FsX2lkICE9IDAgJiYgcmVzcG9uc2UuYXJnMSAhPSB0aGlzLmxvY2FsX2lkKVxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBhcmcxOiAweFwiICsgdG9IZXgzMihyZXNwb25zZS5hcmcxKSArIFwiIChleHBlY3RlZCAweFwiICsgdG9IZXgzMih0aGlzLmxvY2FsX2lkKSArIFwiKVwiKTtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0QWRiLlN0cmVhbS5wcm90b3R5cGUuc2VuZF9yZWNlaXZlID0gZnVuY3Rpb24oY21kLCBkYXRhPW51bGwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZW5kKGNtZCwgZGF0YSlcblx0XHRcdC50aGVuKCgpID0+IHRoaXMucmVjZWl2ZSgpKTtcblx0fTtcblxuXHRBZGIuU3RyZWFtLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmIChBZGIuT3B0LmRlYnVnKVxuXHRcdFx0Y29uc29sZS5sb2coXCJhYm9ydGluZy4uLlwiKTtcblxuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRzZWxmLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoQWRiLk9wdC5kZWJ1Zylcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImFib3J0ZWRcIik7XG5cdFx0XHRcdHNlbGYuY2FuY2VsID0gbnVsbDtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fTtcblx0XHR9KTtcblx0fTtcblxuXHRBZGIuU3RyZWFtLnByb3RvdHlwZS5zdGF0ID0gZnVuY3Rpb24oZmlsZW5hbWUpIHtcblx0XHRsZXQgZnJhbWUgPSBuZXcgQWRiLlN5bmNGcmFtZShcIlNUQVRcIiwgZmlsZW5hbWUubGVuZ3RoKTtcblx0XHRyZXR1cm4gZnJhbWUuc2VuZF9yZWNlaXZlKHRoaXMpXG5cdFx0XHQudGhlbihjaGVja19vayhcIlNUQVQgZmFpbGVkIG9uIFwiICsgZmlsZW5hbWUpKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRsZXQgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZW5kX3JlY2VpdmUoXCJXUlRFXCIsIGVuY29kZXIuZW5jb2RlKGZpbGVuYW1lKSlcblx0XHRcdH0pXG5cdFx0XHQudGhlbihjaGVja19vayhcIlNUQVQgZmFpbGVkIG9uIFwiICsgZmlsZW5hbWUpKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZWNlaXZlKCkudGhlbihyZXNwb25zZSA9PlxuXHRcdFx0XHRcdHRoaXMuc2VuZChcIk9LQVlcIikudGhlbigoKSA9PlxuXHRcdFx0XHRcdHJlc3BvbnNlLmRhdGEpKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGxldCBpZCA9IGRlY29kZV9jbWQocmVzcG9uc2UuZ2V0VWludDMyKDAsIHRydWUpKTtcblx0XHRcdFx0bGV0IG1vZGUgPSByZXNwb25zZS5nZXRVaW50MzIoNCwgdHJ1ZSk7XG5cdFx0XHRcdGxldCBzaXplID0gcmVzcG9uc2UuZ2V0VWludDMyKDgsIHRydWUpO1xuXHRcdFx0XHRsZXQgdGltZSA9IHJlc3BvbnNlLmdldFVpbnQzMigxMiwgdHJ1ZSk7XG5cblx0XHRcdFx0aWYgKEFkYi5PcHQuZGVidWcpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlNUQVQ6IFwiICsgZmlsZW5hbWUpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiaWQ6IFwiICsgaWQpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwibW9kZTogXCIgKyBtb2RlKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInNpemU6IFwiICsgc2l6ZSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ0aW1lOiBcIiArIHRpbWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlkICE9IFwiU1RBVFwiKVxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlNUQVQgZmFpbGVkIG9uIFwiICsgZmlsZW5hbWUpO1xuXG5cdFx0XHRcdHJldHVybiB7IG1vZGU6IG1vZGUsIHNpemU6IHNpemUsIHRpbWU6IHRpbWUgfTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdEFkYi5TdHJlYW0ucHJvdG90eXBlLnB1bGwgPSBmdW5jdGlvbihmaWxlbmFtZSkge1xuXHRcdGxldCBmcmFtZSA9IG5ldyBBZGIuU3luY0ZyYW1lKFwiUkVDVlwiLCBmaWxlbmFtZS5sZW5ndGgpO1xuXHRcdHJldHVybiBmcmFtZS5zZW5kX3JlY2VpdmUodGhpcylcblx0XHRcdC50aGVuKGNoZWNrX29rKFwiUFVMTCBSRUNWIGZhaWxlZCBvbiBcIiArIGZpbGVuYW1lKSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0bGV0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VuZF9yZWNlaXZlKFwiV1JURVwiLCBlbmNvZGVyLmVuY29kZShmaWxlbmFtZSkpXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oY2hlY2tfb2soXCJQVUxMIFdSVEUgZmFpbGVkIG9uIFwiICsgZmlsZW5hbWUpKVxuXHRcdFx0LnRoZW4oKCkgPT4gQWRiLlN5bmNGcmFtZS5yZWNlaXZlKHRoaXMpKVxuXHRcdFx0LnRoZW4oY2hlY2tfY21kKFwiREFUQVwiLCBcIlBVTEwgREFUQSBmYWlsZWQgb24gXCIgKyBmaWxlbmFtZSkpXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VuZChcIk9LQVlcIilcblx0XHRcdFx0XHQudGhlbigoKSA9PiB7IHRocm93IGVycjsgfSk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZW5kKFwiT0tBWVwiKVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IHJlc3BvbnNlKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGxldCBsZW4gPSByZXNwb25zZS5sZW5ndGg7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5kYXRhLmJ5dGVMZW5ndGggPT0gbGVuICsgOCkge1xuXHRcdFx0XHRcdGxldCBjbWQgPSByZXNwb25zZS5kYXRhLmdldFVpbnQzMihsZW4sIHRydWUpO1xuXHRcdFx0XHRcdGxldCB6ZXJvID0gcmVzcG9uc2UuZGF0YS5nZXRVaW50MzIobGVuICsgNCwgdHJ1ZSk7XG5cdFx0XHRcdFx0aWYgKGRlY29kZV9jbWQoY21kKSAhPSBcIkRPTkVcIiB8fCB6ZXJvICE9IDApXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQVUxMIERPTkUgZmFpbGVkIG9uIFwiICsgZmlsZW5hbWUpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBEYXRhVmlldyhyZXNwb25zZS5kYXRhLmJ1ZmZlciwgMCwgbGVuKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXNwb25zZS5kYXRhLmJ5dGVMZW5ndGggPiA2NCAqIDEwMjQpIHtcblx0XHRcdFx0XHRsZXQgY21kID0gcmVzcG9uc2UuZGF0YS5nZXRVaW50MzIocmVzcG9uc2UuZGF0YS5ieXRlTGVuZ3RoIC0gOCwgdHJ1ZSk7XG5cdFx0XHRcdFx0bGV0IHplcm8gPSByZXNwb25zZS5kYXRhLmdldFVpbnQzMihyZXNwb25zZS5kYXRhLmJ5dGVMZW5ndGggLSA0LCB0cnVlKTtcblx0XHRcdFx0XHRpZiAoZGVjb2RlX2NtZChjbWQpICE9IFwiRE9ORVwiIHx8IHplcm8gIT0gMClcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlBVTEwgRE9ORSBmYWlsZWQgb24gXCIgKyBmaWxlbmFtZSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gbmV3IERhdGFWaWV3KHJlc3BvbnNlLmRhdGEuYnVmZmVyLCAwLCByZXNwb25zZS5kYXRhLmJ5dGVMZW5ndGggLSA4KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXNwb25zZS5kYXRhLmJ5dGVMZW5ndGggIT0gbGVuKVxuXHRcdFx0XHQgIHRocm93IG5ldyBFcnJvcihcIlBVTEwgREFUQSBmYWlsZWQgb24gXCIgKyBmaWxlbmFtZSArIFwiOiBcIiArIHJlc3BvbnNlLmRhdGEuYnl0ZUxlbmd0aCArIFwiIT1cIiArIGxlbik7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMucmVjZWl2ZSgpXG5cdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IGNtZCA9IHJlc3BvbnNlLmRhdGEuZ2V0VWludDMyKDAsIHRydWUpO1xuXHRcdFx0XHRcdFx0bGV0IHplcm8gPSByZXNwb25zZS5kYXRhLmdldFVpbnQzMig0LCB0cnVlKTtcblx0XHRcdFx0XHRcdGlmIChkZWNvZGVfY21kKGNtZCkgIT0gXCJET05FXCIgfHwgemVybyAhPSAwKVxuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQVUxMIERPTkUgZmFpbGVkIG9uIFwiICsgZmlsZW5hbWUpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5zZW5kKFwiT0tBWVwiKSlcblx0XHRcdFx0XHQudGhlbigoKSA9PiByZXNwb25zZS5kYXRhKTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdEFkYi5TdHJlYW0ucHJvdG90eXBlLnB1c2hfc3RhcnQgPSBmdW5jdGlvbihmaWxlbmFtZSwgbW9kZSkge1xuXHRcdGxldCBtb2RlX3N0ciA9IG1vZGUudG9TdHJpbmcoMTApO1xuXHRcdGxldCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG5cblx0XHRsZXQgZnJhbWUgPSBuZXcgQWRiLlN5bmNGcmFtZShcIlNFTkRcIiwgZmlsZW5hbWUubGVuZ3RoICsgMSArIG1vZGVfc3RyLmxlbmd0aCk7XG5cdFx0cmV0dXJuIGZyYW1lLnNlbmRfcmVjZWl2ZSh0aGlzKVxuXHRcdFx0LnRoZW4oY2hlY2tfb2soXCJQVVNIIGZhaWxlZCBvbiBcIiArIGZpbGVuYW1lKSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VuZChcIldSVEVcIiwgZW5jb2Rlci5lbmNvZGUoZmlsZW5hbWUpKVxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IEFkYi5TeW5jRnJhbWUucmVjZWl2ZSh0aGlzKSlcblx0XHRcdC50aGVuKGNoZWNrX29rKFwiUFVTSCBmYWlsZWQgb24gXCIgKyBmaWxlbmFtZSkpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNlbmQoXCJXUlRFXCIsIGVuY29kZXIuZW5jb2RlKFwiLFwiICsgbW9kZV9zdHIpKVxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IEFkYi5TeW5jRnJhbWUucmVjZWl2ZSh0aGlzKSlcblx0XHRcdC50aGVuKGNoZWNrX29rKFwiUFVTSCBmYWlsZWQgb24gXCIgKyBmaWxlbmFtZSkpO1xuXHR9O1xuXG5cdEFkYi5TdHJlYW0ucHJvdG90eXBlLnB1c2hfZGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGxldCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG5cdFx0XHRsZXQgc3RyaW5nX2RhdGEgPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IGVuY29kZXIuZW5jb2RlKHN0cmluZ19kYXRhKS5idWZmZXI7XG5cdFx0fSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcblx0XHRcdGRhdGEgPSBkYXRhLmJ1ZmZlcjtcblx0XHR9XG5cblx0XHRsZXQgZnJhbWUgPSBuZXcgQWRiLlN5bmNGcmFtZShcIkRBVEFcIiwgZGF0YS5ieXRlTGVuZ3RoKTtcblx0XHRyZXR1cm4gZnJhbWUuc2VuZF9yZWNlaXZlKHRoaXMpXG5cdFx0XHQudGhlbihjaGVja19vayhcIlBVU0ggZmFpbGVkXCIpKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZW5kKFwiV1JURVwiLCBkYXRhKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiBBZGIuU3luY0ZyYW1lLnJlY2VpdmUodGhpcykpXG5cdFx0XHQudGhlbihjaGVja19vayhcIlBVU0ggZmFpbGVkXCIpKTtcblx0fTtcblxuXHRBZGIuU3RyZWFtLnByb3RvdHlwZS5wdXNoX2RvbmUgPSBmdW5jdGlvbigpIHtcblx0XHRsZXQgZnJhbWUgPSBuZXcgQWRiLlN5bmNGcmFtZShcIkRPTkVcIiwgTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCkpO1xuXHRcdHJldHVybiBmcmFtZS5zZW5kX3JlY2VpdmUodGhpcylcblx0XHRcdC50aGVuKGNoZWNrX29rKFwiUFVTSCBmYWlsZWRcIikpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiBBZGIuU3luY0ZyYW1lLnJlY2VpdmUodGhpcyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oY2hlY2tfb2soXCJQVVNIIGZhaWxlZFwiKSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VuZChcIk9LQVlcIik7XG5cdFx0XHR9KTtcblx0fTtcblxuXHRBZGIuU3RyZWFtLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oZmlsZSwgZmlsZW5hbWUsIG1vZGUsIG9uX3Byb2dyZXNzID0gbnVsbCkge1xuXHRcdC8vIHdlIG5lZWQgcmVkdWNlZCBsb2dnaW5nIGR1cmluZyB0aGUgZGF0YSB0cmFuc2ZlciBvdGhlcndpc2UgdGhlIGNvbnNvbGUgbWF5IGV4cGxvZGVcblx0XHRsZXQgb2xkX2RlYnVnID0gQWRiLk9wdC5kZWJ1Zztcblx0XHRsZXQgb2xkX2R1bXAgPSBBZGIuT3B0LmR1bXA7XG5cdFx0QWRiLk9wdC5kZWJ1ZyA9IGZhbHNlO1xuXHRcdEFkYi5PcHQuZHVtcCA9IGZhbHNlO1xuXG5cdFx0Ly8gcmVhZCB0aGUgd2hvbGUgZmlsZVxuXHRcdHJldHVybiByZWFkX2Jsb2IoZmlsZSkudGhlbihkYXRhID0+XG5cdFx0XHR0aGlzLnB1c2hfc3RhcnQoZmlsZW5hbWUsIG1vZGUpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRsZXQgc2VxID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0XHRcdGxldCByZW0gPSBmaWxlLnNpemU7XG5cdFx0XHRcdGxldCBtYXggPSBNYXRoLm1pbigweDEwMDAwLCB0aGlzLmRldmljZS5tYXhfcGF5bG9hZCk7XG5cdFx0XHRcdHdoaWxlIChyZW0gPiAwKSB7XG5cdFx0XHRcdFx0Ly8gdGhlc2UgdHdvIGFyZSBuZWVkZWQgaGVyZSBmb3IgdGhlIGNsb3N1cmVcblx0XHRcdFx0XHRsZXQgbGVuID0gTWF0aC5taW4ocmVtLCBtYXgpO1xuXHRcdFx0XHRcdGxldCBjb3VudCA9IGZpbGUuc2l6ZSAtIHJlbTtcblx0XHRcdFx0XHRzZXEgPSBzZXEudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5jYW5jZWwpIHtcblx0XHRcdFx0XHRcdFx0QWRiLk9wdC5kZWJ1ZyA9IG9sZF9kZWJ1Zztcblx0XHRcdFx0XHRcdFx0QWRiLk9wdC5kdW1wID0gb2xkX2R1bXA7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNhbmNlbGxlZFwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChvbl9wcm9ncmVzcyAhPSBudWxsKVxuXHRcdFx0XHRcdFx0XHRvbl9wcm9ncmVzcyhjb3VudCwgZmlsZS5zaXplKTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnB1c2hfZGF0YShkYXRhLnNsaWNlKGNvdW50LCBjb3VudCArIGxlbikpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJlbSAtPSBsZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHNlcS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRBZGIuT3B0LmRlYnVnID0gb2xkX2RlYnVnO1xuXHRcdFx0XHRcdEFkYi5PcHQuZHVtcCA9IG9sZF9kdW1wO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnB1c2hfZG9uZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pKTtcblx0fTtcblxuXHRBZGIuU3RyZWFtLnByb3RvdHlwZS5xdWl0ID0gZnVuY3Rpb24oKSB7XG5cdFx0bGV0IGZyYW1lID0gbmV3IEFkYi5TeW5jRnJhbWUoXCJRVUlUXCIpO1xuXHRcdHJldHVybiBmcmFtZS5zZW5kX3JlY2VpdmUodGhpcylcblx0XHRcdC50aGVuKGNoZWNrX29rKFwiUVVJVCBmYWlsZWRcIikpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnJlY2VpdmUoKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihjaGVja19jbWQoXCJDTFNFXCIsIFwiUVVJVCBmYWlsZWRcIikpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNsb3NlKCk7XG5cdFx0XHR9KTtcblx0fTtcblxuXHRmdW5jdGlvbiBjaGVja19jbWQoY21kLCBlcnJfbXNnKVxuXHR7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRpZiAocmVzcG9uc2UuY21kID09IFwiRkFJTFwiKSB7XG5cdFx0XHRcdGxldCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihkZWNvZGVyLmRlY29kZShyZXNwb25zZS5kYXRhKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVzcG9uc2UuY21kICE9IGNtZClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGVycl9tc2cpO1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBjaGVja19vayhlcnJfbXNnKVxuXHR7XG5cdFx0cmV0dXJuIGNoZWNrX2NtZChcIk9LQVlcIiwgZXJyX21zZyk7XG5cdH1cblxuXHRmdW5jdGlvbiBwYWRkaXQodGV4dCwgd2lkdGgsIHBhZGRpbmcpXG5cdHtcblx0XHRsZXQgcGFkbGVuID0gd2lkdGggLSB0ZXh0Lmxlbmd0aDtcblx0XHRsZXQgcGFkZGVkID0gXCJcIjtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFkbGVuOyBpKyspXG5cdFx0XHRwYWRkZWQgKz0gcGFkZGluZztcblxuXHRcdHJldHVybiBwYWRkZWQgKyB0ZXh0O1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9IZXg4KG51bSlcblx0e1xuXHRcdHJldHVybiBwYWRkaXQobnVtLnRvU3RyaW5nKDE2KSwgMiwgXCIwXCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9IZXgxNihudW0pXG5cdHtcblx0XHRyZXR1cm4gcGFkZGl0KG51bS50b1N0cmluZygxNiksIDQsIFwiMFwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvSGV4MzIobnVtKVxuXHR7XG5cdFx0cmV0dXJuIHBhZGRpdChudW0udG9TdHJpbmcoMTYpLCA4LCBcIjBcIik7XG5cdH1cblxuXHRmdW5jdGlvbiB0b0I2NChidWZmZXIpXG5cdHtcblx0XHRyZXR1cm4gYnRvYShuZXcgVWludDhBcnJheShidWZmZXIpLnJlZHVjZSgocywgYikgPT4gcyArIFN0cmluZy5mcm9tQ2hhckNvZGUoYiksIFwiXCIpKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGhleGR1bXAodmlldywgcHJlZml4PVwiXCIpXG5cdHtcblx0XHRsZXQgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2aWV3LmJ5dGVMZW5ndGg7IGkgKz0gMTYpIHtcblx0XHRcdGxldCBtYXggPSAodmlldy5ieXRlTGVuZ3RoIC0gaSkgPiAxNiA/IDE2IDogKHZpZXcuYnl0ZUxlbmd0aCAtIGkpO1xuXHRcdFx0bGV0IHJvdyA9IHByZWZpeCArIHRvSGV4MTYoaSkgKyBcIiBcIjtcblx0XHRcdGxldCBqO1xuXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgbWF4OyBqKyspXG5cdFx0XHRcdHJvdyArPSBcIiBcIiArIHRvSGV4OCh2aWV3LmdldFVpbnQ4KGkgKyBqKSk7XG5cdFx0XHRmb3IgKDsgaiA8IDE2OyBqKyspXG5cdFx0XHRcdHJvdyArPSBcIiAgIFwiO1xuXG5cdFx0XHRyb3cgKz0gXCIgfCBcIiArIGRlY29kZXIuZGVjb2RlKG5ldyBEYXRhVmlldyh2aWV3LmJ1ZmZlciwgaSwgbWF4KSk7XG5cdFx0XHRjb25zb2xlLmxvZyhyb3cpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdldF9lcF9udW0oZW5kcG9pbnRzLCBkaXIsIHR5cGUgPSBcImJ1bGtcIilcblx0e1xuXHRcdGxldCBlLCBlcDtcblx0XHRmb3IgKGUgaW4gZW5kcG9pbnRzKVxuXHRcdFx0aWYgKGVwID0gZW5kcG9pbnRzW2VdLCBlcC5kaXJlY3Rpb24gPT0gZGlyICYmIGVwLnR5cGUgPT0gdHlwZSlcblx0XHRcdFx0cmV0dXJuIGVwLmVuZHBvaW50TnVtYmVyO1xuXHRcdGlmIChBZGIuT3B0LmRlYnVnKVxuXHRcdFx0Y29uc29sZS5sb2coZW5kcG9pbnRzKTtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBcIiArIGRpciArIFwiIGVuZHBvaW50XCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZW5jb2RlX2NtZChjbWQpXG5cdHtcblx0XHRsZXQgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuXHRcdGxldCBidWZmZXIgPSBlbmNvZGVyLmVuY29kZShjbWQpLmJ1ZmZlcjtcblx0XHRsZXQgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuXHRcdHJldHVybiB2aWV3LmdldFVpbnQzMigwLCB0cnVlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlY29kZV9jbWQoY21kKVxuXHR7XG5cdFx0bGV0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcblx0XHRsZXQgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDQpO1xuXHRcdGxldCB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG5cdFx0dmlldy5zZXRVaW50MzIoMCwgY21kLCB0cnVlKTtcblx0XHRyZXR1cm4gZGVjb2Rlci5kZWNvZGUoYnVmZmVyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdlbmVyYXRlX2tleSgpXG5cdHtcblx0XHRsZXQgZXh0cmFjdGFibGUgPSBBZGIuT3B0LmR1bXA7XG5cblx0XHRyZXR1cm4gY3J5cHRvLnN1YnRsZS5nZW5lcmF0ZUtleSh7XG5cdFx0XHRcdFx0bmFtZTogXCJSU0FTU0EtUEtDUzEtdjFfNVwiLFxuXHRcdFx0XHRcdG1vZHVsdXNMZW5ndGg6IEFkYi5PcHQua2V5X3NpemUsXG5cdFx0XHRcdFx0cHVibGljRXhwb25lbnQ6IG5ldyBVaW50OEFycmF5KFsweDAxLCAweDAwLCAweDAxXSksXG5cdFx0XHRcdFx0aGFzaDogeyBuYW1lOiBcIlNIQS0xXCIgfVxuXHRcdFx0XHR9LCBleHRyYWN0YWJsZSwgWyBcInNpZ25cIiwgXCJ2ZXJpZnlcIiBdKVxuXHRcdFx0LnRoZW4oa2V5ID0+IHtcblx0XHRcdFx0aWYgKCFBZGIuT3B0LmR1bXApXG5cdFx0XHRcdFx0cmV0dXJuIGtleTtcblxuXHRcdFx0XHRyZXR1cm4gcHJpdmtleV9kdW1wKGtleSlcblx0XHRcdFx0XHQudGhlbigoKSA9PiBwdWJrZXlfZHVtcChrZXkpKVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IGtleSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRvX2F1dGgoYWRiLCBrZXlzLCBrZXlfaWR4LCB0b2tlbiwgZG9fYXV0aF9yZXNwb25zZSwgYXV0aF91c2VyX25vdGlmeSlcblx0e1xuXHRcdGxldCBBVVRIX1NJR05BVFVSRSA9IDI7XG5cdFx0bGV0IEFVVEhfUlNBUFVCTElDS0VZID0gMztcblxuXHRcdGlmIChrZXlfaWR4IDwga2V5cy5sZW5ndGgpIHtcblx0XHRcdGxldCBzbG90ID0ga2V5cy5sZW5ndGggLSBrZXlfaWR4IC0gMTtcblx0XHRcdGxldCBrZXkgPSBrZXlzW3Nsb3RdO1xuXHRcdFx0bGV0IHNlcSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG5cdFx0XHRpZiAoQWRiLk9wdC5kZWJ1Zylcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzaWduaW5nIHdpdGgga2V5IFwiICsgc2xvdCArIFwiLi4uXCIpO1xuXHRcdFx0aWYgKEFkYi5PcHQuZHVtcCkge1xuXHRcdFx0XHRzZXEgPSBzZXEudGhlbigoKSA9PiBwcml2a2V5X2R1bXAoa2V5KSlcblx0XHRcdFx0XHQudGhlbigoKSA9PiBwdWJrZXlfZHVtcChrZXkpKVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IGhleGR1bXAobmV3IERhdGFWaWV3KHRva2VuKSkpXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCItLS0tLUJFR0lOIFRPS0VOLS0tLS1cXG5cIiArIHRvQjY0KHRva2VuKSArIFwiXFxuLS0tLS1FTkQgVE9LRU4tLS0tLVwiKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXEudGhlbigoKSA9PiBjcnlwdG8uc3VidGxlLnNpZ24oeyBuYW1lOiBcIlJTQVNTQS1QS0NTMS12MV81XCIgfSwga2V5LnByaXZhdGVLZXksIHRva2VuKSlcblx0XHRcdFx0LnRoZW4oc2lnbmVkID0+IHtcblx0XHRcdFx0XHRpZiAoQWRiLk9wdC5kdW1wKVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCItLS0tLUJFR0lOIFNJR05BVFVSRS0tLS0tXFxuXCIgKyB0b0I2NChzaWduZWQpICsgXCJcXG4tLS0tLUVORCBTSUdOQVRVUkUtLS0tLVwiKTtcblxuXHRcdFx0XHRcdGxldCBtID0gbmV3IEFkYi5NZXNzYWdlKFwiQVVUSFwiLCBBVVRIX1NJR05BVFVSRSwgMCwgc2lnbmVkKTtcblx0XHRcdFx0XHRyZXR1cm4gbS5zZW5kX3JlY2VpdmUoYWRiKS50aGVuKGRvX2F1dGhfcmVzcG9uc2UpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRsZXQgc2VxID0gbnVsbDtcblx0XHRsZXQgZGlydHkgPSBmYWxzZTtcblxuXHRcdGlmIChBZGIuT3B0LnJldXNlX2tleSAhPT0gZmFsc2UpIHtcblx0XHRcdGtleV9pZHggPSBBZGIuT3B0LnJldXNlX2tleSA9PT0gdHJ1ZSA/IC0xIDogQWRiLk9wdC5yZXVzZV9rZXk7XG5cblx0XHRcdGlmIChrZXlfaWR4IDwgMClcblx0XHRcdFx0a2V5X2lkeCArPSBrZXlzLmxlbmd0aDtcblxuXHRcdFx0aWYgKGtleV9pZHggPj0gMCAmJiBrZXlfaWR4IDwga2V5cy5sZW5ndGgpIHtcblx0XHRcdFx0aWYgKEFkYi5PcHQuZGVidWcpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJyZXVzaW5nIGtleSBcIiArIGtleV9pZHggKyBcIi4uLlwiKTtcblx0XHRcdFx0c2VxID0gUHJvbWlzZS5yZXNvbHZlKGtleXNba2V5X2lkeF0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzZXEgPT09IG51bGwpIHtcblx0XHRcdGlmIChBZGIuT3B0LmRlYnVnKVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImdlbmVyYXRpbmcga2V5IFwiICsga2V5X2lkeCArIFwiIChcIiArIEFkYi5PcHQua2V5X3NpemUgKyBcIiBiaXRzKS4uLlwiKTtcblxuXHRcdFx0c2VxID0gZ2VuZXJhdGVfa2V5KCk7XG5cdFx0XHRkaXJ0eSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNlcS50aGVuKGtleSA9PiB7XG5cdFx0XHRyZXR1cm4gY3J5cHRvLnN1YnRsZS5leHBvcnRLZXkoXCJzcGtpXCIsIGtleS5wdWJsaWNLZXkpXG5cdFx0XHRcdC50aGVuKHB1YmtleSA9PiB7XG5cdFx0XHRcdFx0bGV0IG0gPSBuZXcgQWRiLk1lc3NhZ2UoXCJBVVRIXCIsIEFVVEhfUlNBUFVCTElDS0VZLCAwLCB0b0I2NChwdWJrZXkpICsgXCJcXDBcIik7XG5cdFx0XHRcdFx0cmV0dXJuIG0uc2VuZChhZGIpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKEFkYi5PcHQuZGVidWcpXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIndhaXRpbmcgZm9yIHVzZXIgY29uZmlybWF0aW9uLi4uXCIpO1xuXHRcdFx0XHRcdGlmIChhdXRoX3VzZXJfbm90aWZ5ICE9IG51bGwpXG5cdFx0XHRcdFx0XHRhdXRoX3VzZXJfbm90aWZ5KGtleS5wdWJsaWNLZXkpO1xuXHRcdFx0XHRcdHJldHVybiBBZGIuTWVzc2FnZS5yZWNlaXZlKGFkYik7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHQvLyByZXR1cm4gcmVzcG9uc2U7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmNtZCAhPSBcIkNOWE5cIilcblx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHRcdFx0XHRpZiAoIWRpcnR5KVxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXG5cdFx0XHRcdFx0a2V5cy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0cmV0dXJuIGRiLnRoZW4oZGIgPT4gc3RvcmVfa2V5KGRiLCBrZXkpKVxuXHRcdFx0XHRcdFx0LnRoZW4oKCkgPT4gcmVzcG9uc2UpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByaXZrZXlfZHVtcChrZXkpXG5cdHtcblx0XHRpZiAoIWtleS5wcml2YXRlS2V5LmV4dHJhY3RhYmxlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImNhbm5vdCBkdW1wIHRoZSBwcml2YXRlIGtleSwgaXQncyBub3QgZXh0cmFjdGFibGVcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyeXB0by5zdWJ0bGUuZXhwb3J0S2V5KFwicGtjczhcIiwga2V5LnByaXZhdGVLZXkpXG5cdFx0XHQudGhlbihwcml2a2V5ID0+IGNvbnNvbGUubG9nKFwiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXFxuXCIgKyB0b0I2NChwcml2a2V5KSArIFwiXFxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVwiKSk7XG5cdH1cblxuXHRmdW5jdGlvbiBwdWJrZXlfZHVtcChrZXkpXG5cdHtcblx0XHRpZiAoIWtleS5wdWJsaWNLZXkuZXh0cmFjdGFibGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiY2Fubm90IGR1bXAgdGhlIHB1YmxpYyBrZXksIGl0J3Mgbm90IGV4dHJhY3RhYmxlXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHJldHVybiBjcnlwdG8uc3VidGxlLmV4cG9ydEtleShcInNwa2lcIiwga2V5LnB1YmxpY0tleSlcblx0XHRcdC50aGVuKHB1YmtleSA9PiBjb25zb2xlLmxvZyhcIi0tLS0tQkVHSU4gUFVCTElDIEtFWS0tLS0tXFxuXCIgKyB0b0I2NChwdWJrZXkpICsgXCJcXG4tLS0tLUVORCBQVUJMSUMgS0VZLS0tLS1cIikpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVhZF9ibG9iKGJsb2IpXG5cdHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdHJlYWRlci5vbmxvYWQgPSBlID0+IHJlc29sdmUoZS50YXJnZXQucmVzdWx0KTtcblx0XHRcdHJlYWRlci5vbmVycm9yID0gZSA9PiByZWplY3QoZS50YXJnZXQuZXJyb3IpO1xuXHRcdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJvbWlzaWZ5KHJlcXVlc3QsIG9uc3VjY2VzcyA9IFwib25zdWNjZXNzXCIsIG9uZXJyb3IgPSBcIm9uZXJyb3JcIilcblx0e1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRyZXF1ZXN0W29uc3VjY2Vzc10gPSBldmVudCA9PiByZXNvbHZlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuXHRcdFx0cmVxdWVzdFtvbmVycm9yXSA9IGV2ZW50ID0+IHJlamVjdChldmVudC50YXJnZXQuZXJyb3JDb2RlKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXRfZGIoKVxuXHR7XG5cdFx0bGV0IHJlcSA9IHdpbmRvdy5pbmRleGVkREIub3BlbihcIldlYkFEQlwiLCAxKTtcblxuXHRcdHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdGxldCBkYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdGlmIChBZGIuT3B0LmRlYnVnKVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkRCOiBtaWdyYXRpbmcgZnJvbSB2ZXJzaW9uIFwiICsgZXZlbnQub2xkVmVyc2lvbiArIFwiIHRvIFwiICsgZXZlbnQubmV3VmVyc2lvbiArIFwiLi4uXCIpO1xuXG5cdFx0XHRpZiAoZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygna2V5cycpKSB7XG5cdFx0XHRcdGlmIChBZGIuT3B0LmRlYnVnKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiREI6IGRlbGV0aW5nIG9sZCBrZXlzLi4uXCIpO1xuXG5cdFx0XHRcdGRiLmRlbGV0ZU9iamVjdFN0b3JlKCdrZXlzJyk7XG5cdFx0XHR9XG5cblx0XHRcdGRiLmNyZWF0ZU9iamVjdFN0b3JlKFwia2V5c1wiLCB7IGF1dG9JbmNyZW1lbnQ6IHRydWUgfSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBwcm9taXNpZnkocmVxKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxvYWRfa2V5cyhkYilcblx0e1xuXHRcdGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFwia2V5c1wiKTtcblx0XHRsZXQgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShcImtleXNcIik7XG5cdFx0bGV0IGN1cnNvciA9IHN0b3JlLm9wZW5DdXJzb3IoKTtcblx0XHRsZXQga2V5cyA9IFtdO1xuXG5cdFx0Y3Vyc29yLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cdFx0XHRpZiAocmVzdWx0ICE9IG51bGwpIHtcblx0XHRcdFx0a2V5cy5wdXNoKHJlc3VsdC52YWx1ZSk7XG5cdFx0XHRcdHJlc3VsdC5jb250aW51ZSgpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gcHJvbWlzaWZ5KHRyYW5zYWN0aW9uLCBcIm9uY29tcGxldGVcIikudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRpZiAoQWRiLk9wdC5kZWJ1Zylcblx0XHRcdFx0Y29uc29sZS5sb2coXCJEQjogbG9hZGVkIFwiICsga2V5cy5sZW5ndGggKyBcIiBrZXlzXCIpO1xuXHRcdFx0cmV0dXJuIGtleXM7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzdG9yZV9rZXkoZGIsIGtleSlcblx0e1xuXHRcdGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFwia2V5c1wiLCBcInJlYWR3cml0ZVwiKTtcblx0XHRsZXQgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgna2V5cycpO1xuXHRcdGxldCByZXF1ZXN0ID0gc3RvcmUucHV0KGtleSk7XG5cblx0XHRyZXR1cm4gcHJvbWlzaWZ5KHJlcXVlc3QpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdFx0aWYgKEFkYi5PcHQuZGVidWcpXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiREI6IHN0b3JlZCBrZXkgXCIgKyAocmVzdWx0IC0gMSkpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsZWFyX2tleXMoZGIpXG5cdHtcblx0XHRsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihcImtleXNcIiwgXCJyZWFkd3JpdGVcIik7XG5cdFx0bGV0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoXCJrZXlzXCIpO1xuXHRcdGxldCByZXF1ZXN0ID0gc3RvcmUuY2xlYXIoKTtcblxuXHRcdHJldHVybiBwcm9taXNpZnkocmVxdWVzdCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRpZiAoQWRiLk9wdC5kZWJ1Zylcblx0XHRcdFx0Y29uc29sZS5sb2coXCJEQjogcmVtb3ZlZCBhbGwgdGhlIGtleXNcIik7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIEFkYjtcbn0pKTtcbiIsImltcG9ydCBBZGIgZnJvbSAnd2ViYWRiJztcblxuLyoqXG4gKiBBbGwgcG9zc2libGUgc3RhdGVzIGZvciB0aGUgQ29ubmVjdGlvbk1hbmFnZXJcbiAqL1xuY29uc3QgQ29ubmVjdGlvbk1hbmFnZXJTdGF0ZSA9IE9iamVjdC5mcmVlemUoe1xuICAgIERJU0NPTk5FQ1RFRDogICAgICAgMCxcbiAgICBVU0JfQ09OTkVDVEVEOiAgICAgIDEsXG4gICAgQURCX0NPTk5FQ1RFRDogICAgICAyLFxuICAgIEVYRUNVVElOR19DTUQ6ICAgICAgMyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0aW9uTWFuYWdlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fd2ViVXNiQ29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuX2FkYkNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IENvbm5lY3Rpb25NYW5hZ2VyU3RhdGUuRElTQ09OTkVDVEVEO1xuICAgICAgICB0aGlzLl90ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpOyAvLyB1c2VkIGZvciBkZWNvZGluZyBhbGwgcmVjZWl2ZWQgY29tbWFuZCBvdXRwdXRzXG5cbiAgICAgICAgLy8gQmluZCBtZXRob2RzIHRvIHRoaXMgY2xhc3Mgc28gd2UgY2FuIGNhbGwgdGhlbSBjb3JyZWN0bHkgZnJvbSBldmVudGhhbmRsZXJzXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVVzYkNvbm5lY3Rpb24gPSB0aGlzLmluaXRpYWxpemVVc2JDb25uZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29ubmVjdEFkYiA9IHRoaXMuY29ubmVjdEFkYi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3NlQ29ubmVjdGlvbiA9IHRoaXMuY2xvc2VDb25uZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucnVuU2hlbGxDbWQgPSB0aGlzLnJ1blNoZWxsQ21kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0RGV2aWNlU3RhdHMgPSB0aGlzLmdldERldmljZVN0YXRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGlzYWJsZVBhY2thZ2UgPSB0aGlzLmRpc2FibGVQYWNrYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZW5hYmxlUGFja2FnZSA9IHRoaXMuZW5hYmxlUGFja2FnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxpc3REaXNhYmxlZFBhY2thZ2VzID0gdGhpcy5saXN0RGlzYWJsZWRQYWNrYWdlcy5iaW5kKHRoaXMpO1xuICAgIH07XG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9tcHQgdXNlciB3aXRoIGNocm9tZSBkaWFsb2cgdG8gc2VsZWN0IHRoZSBVU0IgZGV2aWNlLlxuICAgICAqIFRoZSBsaXN0IGlzIGZpbHRlcmVkIHRvIG9ubHkgcmV0dXJuIHRob3NlIHdpdGg6XG4gICAgICogICAgICBjbGFzc0NvZGUgPSAyNTUsIHN1YmNsYXNzQ29kZSA9IDY2LCBwcm90b2NvbENvZGUgPSAxIChBREIpIG9yIDMgKGZhc3Rib290KVxuICAgICAqIFRoZW4gY29ubmVjdHMgdG8gaXQgYXQgdGhlIFVTQiBsZXZlbC5cbiAgICAgKi9cbiAgICBhc3luYyBpbml0aWFsaXplVXNiQ29ubmVjdGlvbigpIHtcblxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgIT09IENvbm5lY3Rpb25NYW5hZ2VyU3RhdGUuRElTQ09OTkVDVEVEKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJBIFVTQiBjb25uZWN0aW9uIGhhcyBhbHJlYWR5IGJlZW4gZXN0YWJsaXNoZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBQcm9tcHQgdXNlciB0byBzZWxlY3QgYWRiIGRldmljZSBpbiBjaHJvbWUgZGlhbG9ndWVcbiAgICAgICAgICAgIHRoaXMuX3dlYlVzYkNvbm5lY3Rpb24gPSBhd2FpdCBBZGIub3BlbihcIldlYlVTQlwiKTsgLy8gXCJXZWJVU0JcIiBpcyB0aGUgb25seSBhbGxvd2VkIHRyYW5zcG9ydCBoZXJlXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IENvbm5lY3Rpb25NYW5hZ2VyU3RhdGUuVVNCX0NPTk5FQ1RFRDtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlN1Y2Nlc3NmdWxseSBjcmVhdGVkIFVTQiBDb25uZWN0aW9uXCIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBObyBBREIgZGV2aWNlIHNlbGVjdGVkLiBFcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm9tcHRzIHRoZSB1c2VyIG9uIHRoZSB3YXRjaCB0byBhbGxvdyB0aGlzIGJyb3dzZXIgdG8gY3JlYXRlIGFuIEFEQiBjb25uZWN0aW9uLlxuICAgICAqL1xuICAgIGFzeW5jIGNvbm5lY3RBZGIod2F0Y2hQcm9tcHRDYWxsYmFjayA9IChwcm9kdWN0TmFtZSkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oYEFjY2VwdCB0aGUgQURCIGNvbm5lY3Rpb24gb24geW91ciAke3Byb2R1Y3ROYW1lfSB3YXRjaGApO1xuICAgIH0pIHtcblxuICAgICAgICAvLyBFeGl0IHdpdGggYW4gYXBwcm9wcmlhdGUgd2FybmluZyBpZiBub3QgaW4gY29ycmVjdCBzdGF0ZVxuICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIENvbm5lY3Rpb25NYW5hZ2VyU3RhdGUuQURCX0NPTk5FQ1RFRDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJBbiBBREIgY29ubmVjdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGVzdGFibGlzaGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgQ29ubmVjdGlvbk1hbmFnZXJTdGF0ZS5ESVNDT05ORUNURUQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQSBVU0IgY29ubmVjdGlvbiBtdXN0IGJlIGVzdGFibGlzaGVkIGZpcnN0XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5fd2ViVXNiQ29ubmVjdGlvbi5pc0FkYigpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2Fubm90IGluaXRpYWxpemUgYW4gQURCIGNvbm5lY3Rpb24uIFRoZSBjb25uZWN0ZWQgZGV2aWNlIGlzIG5vdCBBREIgY2FwYWJsZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBDb25uZWN0IHRvIEFEQiB3aXRoIGJhbm5lciA9IFwiaG9zdDo6XCIuIElESyB3aGF0IHRoaXMgaXMgYnV0IGFsbCB0aGUgZXhhbXBsZXMgdXNlIHRoaXNcbiAgICAgICAgICAgIHRoaXMuX2FkYkNvbm5lY3Rpb24gPSBhd2FpdCB0aGlzLl93ZWJVc2JDb25uZWN0aW9uLmNvbm5lY3RBZGIoXCJob3N0OjpcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdhdGNoUHJvbXB0Q2FsbGJhY2sodGhpcy5fd2ViVXNiQ29ubmVjdGlvbi5kZXZpY2UucHJvZHVjdE5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IENvbm5lY3Rpb25NYW5hZ2VyU3RhdGUuQURCX0NPTk5FQ1RFRDtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgU3VjY2Vzc2Z1bGx5IGVzdGFibGlzaGVkIEFEQiBjb25uZWN0aW9uIHRvICR7dGhpcy5fd2ViVXNiQ29ubmVjdGlvbi5kZXZpY2UucHJvZHVjdE5hbWV9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IENvbm5lY3Rpb25NYW5hZ2VyU3RhdGUuVVNCX0NPTk5FQ1RFRDtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBjcmVhdGUgYW4gQURCIGNvbm5lY3Rpb246IEVycm9yOiAke2Vycm9yfWApOyAgICBcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgQURCIGFuZCBVU0IgY29ubmVjdGlvblxuICAgICAqL1xuICAgIGFzeW5jIGNsb3NlQ29ubmVjdGlvbigpIHtcblxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IENvbm5lY3Rpb25NYW5hZ2VyU3RhdGUuRElTQ09OTkVDVEVEKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUcmllZCB0byBkaXNjb25uZWN0IGEgZGV2aWNlIHRoYXQgd2Fzbid0IGNvbm5lY3RlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl93ZWJVc2JDb25uZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWJVc2JDb25uZWN0aW9uLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IENvbm5lY3Rpb25NYW5hZ2VyU3RhdGUuRElTQ09OTkVDVEVEO1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiU3VjY2Vzc2Z1bGx5IHRlcm1pbmF0ZWQgdGhlIFVTQiBDb25uZWN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJ1bnMgdGhlICdjbWQnIG9uIHRoZSB3YXRjaCBhbmQgcmV0dXJucyB0aGUgb3V0cHV0LlxuICAgICAqIFxuICAgICAqIE9ubHkgb25lIGNvbmN1cnJlbnQgc2hlbGwgY21kIGNhbiBleGVjdXRlIGF0IGEgdGltZS4gVHJ5aW5nIHRvIHJ1biBhbm90aGVyIHdoaWxlIG9uZVxuICAgICAqIGlzIGN1cnJlbnRseSB1bmRlciB3YXkgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNtZCBzaGVsbCBDb21tYW5kIHRvIHJ1biBvbiB0aGUgd2F0Y2ggb3ZlciBBREIgY29ubmVjdGlvblxuICAgICAqIEB0aHJvd3Mge3N0cmluZ30gd2hlbiB0aGUgQ29ubmVjdGlvbk1hbmFnZXJzIHN0YXRlIGlzIG5vdCBBREJfQ09OTkVDVEVEXG4gICAgICovXG4gICAgYXN5bmMgcnVuU2hlbGxDbWQoY21kKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gQ29ubmVjdGlvbk1hbmFnZXJTdGF0ZS5FWEVDVVRJTkdfQ01EKSB7XG4gICAgICAgICAgICB0aHJvdyBcIkEgc2hlbGwgY29tbWFuZCBpcyBjdXJyZW50bHkgZXhlY3V0aW5nLiBDYW5ub3Qgc3RhcnQgYW5vdGhlciB1bnRpbCB0aGUgY3VycmVudCBvbmUgZmluaXNoZXNcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSAhPT0gQ29ubmVjdGlvbk1hbmFnZXJTdGF0ZS5BREJfQ09OTkVDVEVEKSB7XG4gICAgICAgICAgICB0aHJvdyBcIkNhbm5vdCBydW4gc2hlbGwgY29tbWFuZHMgd2l0aG91dCBhbiBhY3RpdmUgQURCIGNvbm5lY3Rpb25cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aGUgc3RhdGUgdG8gZ2F1cmQgYWdhaW5zdCBjb25jdXJyZW50IFNoZWxsIGNtZCBleGVjdXRpb25cbiAgICAgICAgdGhpcy5fc3RhdGUgPSBDb25uZWN0aW9uTWFuYWdlclN0YXRlLkVYRUNVVElOR19DTUQ7XG5cbiAgICAgICAgLy8gVE9ETzogQWRkIHNvbWUgZXJyb3IgaGFuZGxpbmcgYXJvdW5kIHRoaXNcbiAgICAgICAgbGV0IHNoZWxsID0gYXdhaXQgdGhpcy5fYWRiQ29ubmVjdGlvbi5zaGVsbChjbWQpO1xuICAgICAgICBsZXQgcmVzcG9uc2VCdW5kbGUgPSBhd2FpdCBzaGVsbC5yZWNlaXZlKCk7XG4gICAgICAgIHNoZWxsLmNsb3NlKCk7IC8vIFdpdGhvdXQgdGhpcyBzdWNjZXNzaXZlIHNoZWxsQ21kJ3MgY2FuIHRocm93IGFuIGV4Y2VwdGlvbi5cblxuICAgICAgICBsZXQgb3V0cHV0ID0gcmVzcG9uc2VCdW5kbGUuZGF0YSAhPT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4dERlY29kZXIuZGVjb2RlKHJlc3BvbnNlQnVuZGxlLmRhdGEpIDogXCJcIjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgY21kOiAke2NtZH1cXG5vdXRwdXQ6ICR7b3V0cHV0fWApO1xuXG4gICAgICAgIC8vIEFsbG93IG5ldyBzaGVsbCBjb21tYW5kcyB0byBiZSBzZW50XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQ29ubmVjdGlvbk1hbmFnZXJTdGF0ZS5BREJfQ09OTkVDVEVEO1xuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlcmllcyB0aGUgY29ubmVjdGVkIGRldmljZSBmb3I6XG4gICAgICogIC0gbW9kZWxcbiAgICAgKiAgLSBzZXJpYWwgbnVtYmVyXG4gICAgICogIC0gQW5kcm9pZCB2ZXJzaW9uXG4gICAgICogIC0gYmF0dGVyeSBwZXJjZW50YWdlXG4gICAgICogXG4gICAgICogQHJldHVybnMgYW4gb2JqZWN0IHdoZXJlIHRoZSBrZXlzIGFyZSB0aG9zZSBhYm92ZSBhbmQgdmFsdWVzIGFyZSB0aGF0IHF1ZXJpZWQgZnJvbSBkZXZpY2VcbiAgICAgKi9cbiAgICBhc3luYyBnZXREZXZpY2VTdGF0cygpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTm90ZTogZnJvbSB0ZXN0aW5nIGkgcmVhbGlzZWQgdGhhdCBlYWNoIG9mIHRoZXNlIGFzeW5jcyBvcGVyYXRpb25zXG4gICAgICAgICAqIG11c3QgY29tcGxldGUgc3luY2hyb25vdXNseSBmb3IgaXQgdG8gd29yay4gSSBjYW4ndCBzdGFydCBhbGwgY29tbWFuZHNcbiAgICAgICAgICogdGhlbiB3YWl0IG9uIHRoZSByZXN1bHRzIG9mIHRoZW0gYWxsIGF0IG9uY2UuIFxuICAgICAgICAgKi9cblxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiRW50ZXJlZCBnZXREZXZpY2VTdGF0cygpXCIpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNtZCByZXR1cm5zOlxuICAgICAgICAgKlxuICAgICAgICAgKiAkIGdldHByb3Agcm8ucHJvZHVjdC5tb2RlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgKiBUaWN3YXRjaCBFXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgbW9kZWwgPSBhd2FpdCB0aGlzLnJ1blNoZWxsQ21kKFwiZ2V0cHJvcCByby5wcm9kdWN0Lm1vZGVsXCIpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC50cmltKCkpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGNtZCByZXR1cm5zOlxuICAgICAgICAgKiBcbiAgICAgICAgICogJCBnZXRwcm9wIHJvLnNlcmlhbG5vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICogTTY2MDBUQjEyMzRGXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgc2VyaWFsTm8gPSBhd2FpdCB0aGlzLnJ1blNoZWxsQ21kKFwiZ2V0cHJvcCByby5zZXJpYWxub1wiKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXN1bHQudHJpbSgpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjbWQgcmV0dXJuczpcbiAgICAgICAgICogXG4gICAgICAgICAqICQgZ2V0cHJvcCByby5idWlsZC52ZXJzaW9uLnJlbGVhc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAqIDguMC4wXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgYW5kcm9pZFZlcnNpb24gPSBhd2FpdCB0aGlzLnJ1blNoZWxsQ21kKFwiZ2V0cHJvcCByby5idWlsZC52ZXJzaW9uLnJlbGVhc2VcIilcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gcmVzdWx0LnRyaW0oKSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgY21kIHJldHVybnM6XG4gICAgICAgICAqIFxuICAgICAgICAgKiAkIGR1bXBzeXMgYmF0dGVyeSB8IGdyZXAgbGV2ZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICogICBsZXZlbDogMTAwXG4gICAgICAgICAqIFxuICAgICAgICAgKiBUaGUgdmFsdWUgaXMgdGhlbiBleHRyYWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgYmF0dGVyeVBlcmNlbnQgPSBhd2FpdCB0aGlzLnJ1blNoZWxsQ21kKFwiZHVtcHN5cyBiYXR0ZXJ5IHwgZ3JlcCBsZXZlbFwiKVxuICAgICAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB2YWx1ZS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIHNlcmlhbE5vOiBzZXJpYWxObyxcbiAgICAgICAgICAgIGFuZHJvaWRWZXJzaW9uOiBhbmRyb2lkVmVyc2lvbixcbiAgICAgICAgICAgIGJhdHRlcnlQZXJjZW50OiBiYXR0ZXJ5UGVyY2VudFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHRoZSBwYWNrYWdlIG9uIHRoZSB3YXRjaCBieSBydW5uaW5nIGEgY21kIG9mIHRoZSBmb3JtOlxuICAgICAqIFxuICAgICAqICQgcG0gZGlzYWJsZS11c2VyIC0tdXNlciAwIDxwYWNrYWdlTmFtZT5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFja2FnZU5hbWUgdGhlIHBhY2thZ2UgdG8gZGlzYWJsZSBvbiB0aGUgd2F0Y2hcbiAgICAgKi9cbiAgICBhc3luYyBkaXNhYmxlUGFja2FnZShwYWNrYWdlTmFtZSkge1xuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJFbnRlcmVkICdkaXNhYmxlUGFja2FnZSgpXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY21kID0gYHBtIGRpc2FibGUtdXNlciAtLXVzZXIgMCAke3BhY2thZ2VOYW1lfWA7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJwYWNrYWdlTmFtZSBpczogXCIsIHBhY2thZ2VOYW1lKTtcblxuICAgICAgICAvLyBOT1RFOiBGb3IgdGVzdGluZyB0aGUgVUkncyByZXNwb25zZSB3aGVuIGRpc2FibGluZyBhIHBhY2thZ2VcbiAgICAgICAgLy8gICAgICAgZmFpbHMsIHlvdSBjYW4gdW5jb21tZW50IHRoZSBmb2xsb3dpbmdcbiAgICAgICAgLy8gaWYgKHBhY2thZ2VOYW1lID09PSBcImNvbS5tb2J2b2kud2Vhci5oZWFsdGguYXdcIikge1xuICAgICAgICAvLyAgICAgdGhyb3cgXCJpIGRlbGliZXJhdGx5IGZhaWwgdGhpcyBqdXN0IHRvIGNvbmZpcm0gaXQgd29ya3MgaW4gbXkgdGVzdGluZ1wiO1xuICAgICAgICAvLyB9XG4gXG4gICAgICAgIGF3YWl0IHRoaXMucnVuU2hlbGxDbWQoY21kKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIHRoZSBwYWNrYWdlIG9uIHRoZSB3YXRjaCBieSBydW5uaW5nIGEgY21kIG9mIHRoZSBmb3JtOlxuICAgICAqIFxuICAgICAqICQgcG0gZW5hYmxlIDxwYWNrYWdlTmFtZT5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFja2FnZU5hbWUgdGhlIHBhY2thZ2UgdG8gZW5hYmxlIG9uIHRoZSB3YXRjaFxuICAgICAqL1xuICAgIGFzeW5jIGVuYWJsZVBhY2thZ2UocGFja2FnZU5hbWUpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIkVudGVyZWQgJ2VuYWJsZVBhY2thZ2UoKVwiKTtcblxuICAgICAgICBjb25zdCBjbWQgPSBgcG0gZW5hYmxlICR7cGFja2FnZU5hbWV9YDtcblxuICAgICAgICBhd2FpdCB0aGlzLnJ1blNoZWxsQ21kKGNtZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdHMgYWxsIGRpc2FibGVkIHBhY2thZ2VzIG9uIHRoZSB3YXRjaCBieSBydW5uaW5nOlxuICAgICAqIFxuICAgICAqICQgcG0gbGlzdCBwYWNrYWdlcyAtZFxuICAgICAqL1xuICAgIGFzeW5jIGxpc3REaXNhYmxlZFBhY2thZ2VzKCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiRW50ZXJlZCAnbGlzdERpc2FibGVkUGFja2FnZXMoKVwiKTtcblxuICAgICAgICBjb25zdCBjbWQgPSBcInBtIGxpc3QgcGFja2FnZXMgLWRcIjtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5ydW5TaGVsbENtZChjbWQpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTsiLCJpbXBvcnQgJy4vc3R5bGUubGVzcyc7IC8vIEpzIHdpbGwgZHluYW1pY2FsbHkgYWRkIHRoZSBDU1MgdHJhbnNwaWxhdGlvbiBpbiB0aGUgPGhlYWQ+IG9mIHRoZSB3ZWJwYWdlXG5pbXBvcnQgQ29ubmVjdGlvbk1hbmFnZXIgZnJvbSAnLi9Db25uZWN0aW9uTWFuYWdlcic7XG5pbXBvcnQgY3Jvc3MgZnJvbSAnLi9pbWFnZXMvY3Jvc3Muc3ZnJztcblxuY29uc3QgQ29ubmVjdGlvbkJ1dHRvbk1vZGUgPSBPYmplY3QuZnJlZXplKHtcbiAgICBDT05ORUNUOiAgICAgICAgIDAsXG4gICAgRElTQ09OTkVDVDogICAgICAxLFxufSk7XG5cbi8vIE1hbmFnZXMgdGhlIGNvbm5lY3Rpb24gc3RhdGUgYW5kIGFsbG93cyBmb3IgY29tbXVuaWNhdGlvbiB3aXRoIHRoZSB3YXRjaFxuY29uc3QgY29ubmVjdGlvbk1hbmFnZXIgPSBuZXcgQ29ubmVjdGlvbk1hbmFnZXI7XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggcHJvcGVydGllczpcbiAqIFxuICoge1xuICogICAgICBwYWNrYWdlTmFtZSxcbiAqICAgICAgdGFibGVEYXRhRWxlbWVudFxuICogfVxuICogXG4gKi9cbmZ1bmN0aW9uIGdldFRhYmxlUGFja2FnZUVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHRhYmxlRGF0YUVsZW1lbnRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGFja2FnZS10YWJsZSB0ZFwiKV07IC8vIFNwcmVhZCB0aGUgU3RhdGljTm9kZUxpc3QgdG8gY29udmVydCB0byBBcnJheSBzbyBtYXAgY2FuIGJlIHVzZWQgYmVsb3dcbiAgICByZXR1cm4gdGFibGVEYXRhRWxlbWVudHMubWFwKHggPT4gKHtwYWNrYWdlTmFtZTogeC50ZXh0Q29udGVudC50cmltKCksIHRhYmxlRGF0YUVsZW1lbnQ6IHh9KSk7XG59XG5cbi8qKlxuICogQ29ubmVjdHMgdG8gdGhlIHdhdGNoIGZpcnN0IG92ZXIgVVNCIHdoaWNoIGNhdXNlcyB0aGUgYnJvd3NlciB0b1xuICogcHJvbXB0IHRoZSB1c2VyIGZvciBhIFVTQiBkZXZpY2UuIE9uY2UgYWNjZXB0ZWQsIGRpc3BsYXlzIGEgbW9kYWxcbiAqIHByb21wdGluZyB0aGUgdXNlciB0byBhY2NlcHQgdGhlIEFEQiBjb25uZWN0aW9uIG9uIHRoZSB3YXRjaC4gTmV4dCxcbiAqIGZldGNoZXMgdGhlIHdhdGNoZXMgc3RhdHMgYW5kIGRpc3BsYXlzIHRoZW0gaW4gdGhlIHN0YXRzIHNlY3Rpb24uXG4gKiBDaGFuZ2VzIHRoZSBjb25uZWN0aW9uIGJ1dHRvbiB0byBcImRpc2Nvbm5lY3RcIiBtb2RlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgYXdhaXQgY29ubmVjdGlvbk1hbmFnZXIuaW5pdGlhbGl6ZVVzYkNvbm5lY3Rpb24oKTtcblxuICAgIC8vIFNob3cgdGhlIG1vZGFsIHRlbGxpbmcgdGhlIHVzZXIgdG8gYWNjZXB0IEFEQiBjb25uZWN0aW9uIG9uIHdhdGNoXG4gICAgc2V0TW9kYWxWaXNpYmlsaXR5KHRydWUpO1xuXG4gICAgLy8gQXdhaXQgdXNlcnMgY29uZmlybWF0aW9uIHRvIGNvbm5lY3Qgb3ZlciBBREIgdGhlbiBjb25uZWN0XG4gICAgYXdhaXQgY29ubmVjdGlvbk1hbmFnZXIuY29ubmVjdEFkYigpO1xuXG4gICAgLy8gVE9ETzogaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSB1c2VyIGRvZXMgbm90IGFjY2VwdC4gQWxzbywgc29tZXRpbWVzIHRoZVxuICAgIC8vIHdhdGNoIGp1c3QgZG9lc24ndCBldmVuIHNob3cgaXQgb3IgaXQgZGlzc2FwZWFycyBxdWlja2x5XG5cbiAgICAvLyBIaWRlIHRoZSBtb2RhbFxuICAgIHNldE1vZGFsVmlzaWJpbGl0eShmYWxzZSk7XG5cbiAgICBsZXQgZGV2aWNlU3RhdHMgPSBhd2FpdCBjb25uZWN0aW9uTWFuYWdlci5nZXREZXZpY2VTdGF0cygpXG4gICAgICAgICAgICAudGhlbihzdGF0cyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHb3QgZGV2aWNlIHN0YXRzIGZyb20gd2F0Y2g6IFwiLCBzdGF0cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRzO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBkaXNwbGF5IHRoaXMgaW4gdGhlIHN0YXRzIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IGRldmljZSBzdGF0cyBmcm9tIHdhdGNoLiBFcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIC8vIFBvcHVsYXRlIHRoZSBkZXZpY2Ugc3RhdHNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGVsX3N0YXR1c1wiKS50ZXh0Q29udGVudCA9IGRldmljZVN0YXRzLm1vZGVsO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VyaWFsbm9fc3RhdHVzXCIpLnRleHRDb250ZW50ID0gZGV2aWNlU3RhdHMuc2VyaWFsTm87XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmRyb2lkX3N0YXR1c1wiKS50ZXh0Q29udGVudCA9IGRldmljZVN0YXRzLmFuZHJvaWRWZXJzaW9uO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmF0dGVyeV9zdGF0dXNcIikudGV4dENvbnRlbnQgPSBgJHtkZXZpY2VTdGF0cy5iYXR0ZXJ5UGVyY2VudH0gJWA7XG5cbiAgICAvLyBIaWRlIHRoZSB0ZXh0IHN0YXRzIGNvbnRhaW5lciBtZXNzYWdlIGFuZCBzaG93IHRoZSByZXRyaWV2ZWQgc3RhdHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dhdGNoLXN0YXRzLWNvbnRhaW5lciA+IC53YXRjaC1zdGF0cy1jb250YWluZXJfX3RleHRcIikuY2xhc3NMaXN0LmFkZChcIndhdGNoLXN0YXRzLWNvbnRhaW5lcl9fdGV4dC0taGlkZGVuXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2F0Y2gtc3RhdHMtY29udGFpbmVyID4gLndhdGNoLXN0YXRzLWNvbnRhaW5lcl9fZ3JpZFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwid2F0Y2gtc3RhdHMtY29udGFpbmVyX19ncmlkLS1oaWRkZW5cIik7XG5cbiAgICBjaGFuZ2VDb25uZWN0aW9uQnV0dG9uVG8oQ29ubmVjdGlvbkJ1dHRvbk1vZGUuRElTQ09OTkVDVCk7XG5cbiAgICBzZXRSdW5CdXR0b25TdGF0ZSh0cnVlKTsgLy8gZW5hYmxlIGl0XG59XG5cbi8qKlxuICogRGlzYWJsZXMgdGhlIHBhY2thZ2VzIG9uIHRoZSB3YXRjaCBvbmUtYnktb25lIHRoZW4gcmVwb3J0cyB0aGUgXG4gKiBzdGF0dXMgaW4gdGhlIHBhY2thZ2UgdGFibGUuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcblxuICAgIC8vIERpc2FibGUgdGhlIHJ1biBidXR0b24gaW1tZWRpYXRlbHkgLSBkb24ndCB3YW50IGl0IGJlaW5nIHByZXNzZWQgYWdhaW4gd2hpbGUgdGhpcyBvcGVyYXRpb25cbiAgICAvLyBpcyB1bmRlcndheVxuICAgIHNldFJ1bkJ1dHRvblN0YXRlKGZhbHNlKTtcblxuICAgIC8vIFJlYWQgdGhlIGxhYmVscyBvdXQgb2YgdGhlIHRhYmxlIGFuZCBET00gZWxlbWVudHNcbiAgICBjb25zdCB0YWJsZVBhY2thZ2VFbGVtZW50cyA9IGdldFRhYmxlUGFja2FnZUVsZW1lbnRzKCk7XG5cbiAgICAvLyBEaXNhYmxlIGVhY2ggcGFja2FnZSBpbmRpdmlkdWFsbHkgYW5kIGRpc3BsYXkgdGhlIHJlc3VsdCBpbiB0aGUgRE9NXG4gICAgZm9yIChjb25zdCBwYWNrYWdlRWxlbWVudCBvZiB0YWJsZVBhY2thZ2VFbGVtZW50cykge1xuICAgICAgICBjb25zdCBwYWNrYWdlTmFtZSA9IHBhY2thZ2VFbGVtZW50LnBhY2thZ2VOYW1lO1xuXG4gICAgICAgIC8vIERpc2FibGUgdGhlIHBhY2thZ2VcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgY29ubmVjdGlvbk1hbmFnZXIuZGlzYWJsZVBhY2thZ2UocGFja2FnZU5hbWUpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdGF0dXNJbWcgPSBwYWNrYWdlRWxlbWVudC50YWJsZURhdGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgICAgIGxldCBwYWNrYWdlTGFiZWwgPSBwYWNrYWdlRWxlbWVudC50YWJsZURhdGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgaWNvbiBhY2NvcmRpbmdseSAoZGVmYXVsdHMgdG8gYSB0aWNrL3N1Y2Nlc3Mgc28gb25seSBjaGFuZ2Ugb24gZmFpbClcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICBzdGF0dXNJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGNyb3NzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IHByb2JhYmx5IHNob3VsZCBwdXQgYSB0b29sdGlwIHdpdGggZmFpbCBtZXNzYWdlIG9uIGljb24gaWYgZmFpbGVkXG5cbiAgICAgICAgLy8gVW5oaWRlIHRoZSBzdGF0dXMgaW1nIGluIHRoZSBkb20gLSBpdCBhcHBlYXJzIG9uIHRoZSByaWdodCBvZiB0aGUgcm93XG4gICAgICAgIHN0YXR1c0ltZy5jbGFzc0xpc3QucmVtb3ZlKFwicm93X19zdGF0dXMtaWNvbi0taGlkZGVuXCIpO1xuXG4gICAgICAgIC8vIFNoaWZ0IHRoZSBsYWJlbCBmcm9tIHRoZSBjZW50ZXIgdG8gdGhlIGxlZnRcbiAgICAgICAgcGFja2FnZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJyb3dfX3BhY2thZ2UtbGFiZWwtLW1vdmUtbGVmdFwiKTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBBREIgY29ubmVjdGlvbiB0byB0aGUgd2F0Y2guIENsZWFycyB0aGUgc3RhdHMuXG4gKiBDaGFuZ2VzIHRoZSBjb25uZWN0aW9uIGJ1dHRvbiB0byBcImNvbm5lY3RcIiBtb2RlLlxuICovXG5hc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgIGF3YWl0IGNvbm5lY3Rpb25NYW5hZ2VyLmNsb3NlQ29ubmVjdGlvbigpO1xuXG4gICAgLy8gQ2xlYXIgdGhlIHN0YXRzIGFuZCBzaG93IHRoZSBubyBkZXZpY2UgY29ubmVjdGVkIG1lc3NhZ2VcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dhdGNoLXN0YXRzLWNvbnRhaW5lciA+IC53YXRjaC1zdGF0cy1jb250YWluZXJfX3RleHRcIikuY2xhc3NMaXN0LnJlbW92ZShcIndhdGNoLXN0YXRzLWNvbnRhaW5lcl9fdGV4dC0taGlkZGVuXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2F0Y2gtc3RhdHMtY29udGFpbmVyID4gLndhdGNoLXN0YXRzLWNvbnRhaW5lcl9fZ3JpZFwiKS5jbGFzc0xpc3QuYWRkKFwid2F0Y2gtc3RhdHMtY29udGFpbmVyX19ncmlkLS1oaWRkZW5cIik7XG5cbiAgICAvLyBSZW1vdmUgdGhlIHN0YXR1cyBpY29ucyBmcm9tIHRoZSB0YWJsZSBhbmQgc2xpZGUgdGhlIHRleHQgYmFjayB0byB0aGUgY2VudGVyXG4gICAgY29uc3QgdGFibGVQYWNrYWdlRWxlbWVudHMgPSBnZXRUYWJsZVBhY2thZ2VFbGVtZW50cygpO1xuICAgIGZvciAobGV0IHBhY2thZ2VFbGVtZW50IG9mIHRhYmxlUGFja2FnZUVsZW1lbnRzKSB7XG4gICAgICAgIGxldCBzdGF0dXNJbWcgPSBwYWNrYWdlRWxlbWVudC50YWJsZURhdGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgICAgIGxldCBwYWNrYWdlTGFiZWwgPSBwYWNrYWdlRWxlbWVudC50YWJsZURhdGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICAgICAgICBzdGF0dXNJbWcuY2xhc3NMaXN0LmFkZChcInJvd19fc3RhdHVzLWljb24tLWhpZGRlblwiKTtcbiAgICAgICAgcGFja2FnZUxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJyb3dfX3BhY2thZ2UtbGFiZWwtLW1vdmUtbGVmdFwiKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VDb25uZWN0aW9uQnV0dG9uVG8oQ29ubmVjdGlvbkJ1dHRvbk1vZGUuQ09OTkVDVCk7XG5cbiAgICBzZXRSdW5CdXR0b25TdGF0ZShmYWxzZSk7IC8vIGRpc2FibGUgaXRcbn1cblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBjb25uZWN0aW9uIGJ1dHRvbiB0byB0aGUgc3RhdGUgaW5kaWNhdGVkIGJ5XG4gKiBuZXdCdXR0b25TdGF0ZS5cbiAqIFxuICogQmluZHMgdGhlIGNsaWNrIGxpc3RlbmVyIGZvciB0aGUgaW5kaWNhdGVkIHN0YXRlLlxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gbmV3QnV0dG9uU3RhdGUgc3RhdGUgdG8gc2V0IHRoZSBjb25uZWN0aW9uIGJ1dHRvbiB0byBcbiAqL1xuZnVuY3Rpb24gY2hhbmdlQ29ubmVjdGlvbkJ1dHRvblRvKG5ld0J1dHRvblN0YXRlKSB7XG4gICAgY29uc3QgY29ubmVjdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29ubmVjdGlvbi1idG5cIik7XG5cbiAgICAvLyBDbGVhciBhbnkgY3VycmVudCBldmVudCBsaXN0ZW5lcnNcbiAgICBjb25uZWN0aW9uQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25uZWN0KTtcbiAgICBjb25uZWN0aW9uQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNjb25uZWN0KTtcblxuICAgIHN3aXRjaCAobmV3QnV0dG9uU3RhdGUpIHtcbiAgICAgICAgY2FzZSBDb25uZWN0aW9uQnV0dG9uTW9kZS5DT05ORUNUOlxuICAgICAgICAgICAgY29ubmVjdGlvbkJ0bi50ZXh0Q29udGVudCA9IFwiQ29ubmVjdFwiOyAvLyBTZXQgYnV0dG9uIGxhYmVsXG4gICAgICAgICAgICBjb25uZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25uZWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbm5lY3Rpb25CdXR0b25Nb2RlLkRJU0NPTk5FQ1Q6XG4gICAgICAgICAgICBjb25uZWN0aW9uQnRuLnRleHRDb250ZW50ID0gXCJEaXNjb25uZWN0XCI7IC8vIFNldCBidXR0b24gbGFiZWxcbiAgICAgICAgICAgIGNvbm5lY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc2Nvbm5lY3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBgSW52YWxpZCBidXR0b24gc3RhdGUgJyR7bmV3QnV0dG9uU3RhdGV9JyBmb3IgdGhlIGNvbm5lY3Rpb24gYnV0dG9uYDtcbiAgICB9XG59XG5cbi8qKlxuICogRGlzYWJsZXMgb3IgZW5hYmxlcyB0aGUgYnV0dG9uXG4gKiBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkRW5hYmxlIHRydWUgZW5hYmxlcyB0aGUgYnV0dG9uLCBmYWxzZSBkaXNhYmxlcyBpdFxuICovXG5mdW5jdGlvbiBzZXRSdW5CdXR0b25TdGF0ZShzaG91bGRFbmFibGUpIHtcbiAgICBjb25zdCBydW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJ1bi1idG5cIik7XG5cbiAgICAvLyBDbGVhciBhbnkgZXZlbnQgbGlzdGVuZXJzXG4gICAgcnVuQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBydW4pO1xuXG4gICAgLy8gQ2xlYXIgYW55IGVuYWJsZS9kaXNhYmxlIHN0eWxlc1xuICAgIHJ1bkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uLWNvbnRhaW5lcl9fYnRuLS1lbmFibGVkXCIpO1xuICAgIHJ1bkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uLWNvbnRhaW5lcl9fYnRuLS1kaXNhYmxlZFwiKTtcblxuICAgIGlmIChzaG91bGRFbmFibGUpIHtcbiAgICAgICAgcnVuQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udGFpbmVyX19idG4tLWVuYWJsZWRcIik7XG4gICAgICAgIHJ1bkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcnVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBydW5CdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250YWluZXJfX2J0bi0tZGlzYWJsZWRcIik7XG4gICAgfVxufVxuXG4vKipcbiAqIFNob3dzL2hpZGVzIHRoZSBtb2RhbFxuICogXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFNob3cgdHJ1ZSB0byBzaG93IHRoZSBtb2RhbCwgZmFsc2UgdG8gaGlkZSBpdFxuICovXG5mdW5jdGlvbiBzZXRNb2RhbFZpc2liaWxpdHkoc2hvdWxkU2hvdykge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbiAgICBcbiAgICAvLyBDbGVhciBhbnkgZXhpc3RpbmcgbW9kYWwgdmlzaWJpbGl0eSBjbGFzc2VzXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLS12aXNpYmxlXCIpO1xuXG4gICAgaWYgKHNob3VsZFNob3cpIHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsLS12aXNpYmxlXCIpO1xuICAgIH0gLy8gZWxzZSBpdCBpcyBoaWRkZW4gYnkgZGVmYXVsdFxufVxuXG4vLyBCaW5kIGNsaWNrIGxpc3RlbmVyc1xuY2hhbmdlQ29ubmVjdGlvbkJ1dHRvblRvKENvbm5lY3Rpb25CdXR0b25Nb2RlLkNPTk5FQ1QpO1xuc2V0UnVuQnV0dG9uU3RhdGUoZmFsc2UpOyAvLyBTdGFydCBvZmYgYXMgZGlzYWJsZWRcblxuLy8gTWFrZSBzdXJlIHRoZSBtb2RhbCBpcyBoaWRkZW4gYnkgZGVmYXVsdFxuc2V0TW9kYWxWaXNpYmlsaXR5KGZhbHNlKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=