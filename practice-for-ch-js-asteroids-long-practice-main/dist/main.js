/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving-object.js */ \"./src/moving-object.js\");\n\n\n\nclass Asteroid extends _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    static RADIUS = 25;\n    static COLOR = \"brown\";\n\n    constructor(options) {\n        super({\n            pos: options.pos,\n            vel: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.randomVec)(Math.floor(Math.random() * 20)),\n            radius: Asteroid.RADIUS,\n            color: Asteroid.COLOR\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asteroid);\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/asteroid.js?");

/***/ }),

/***/ "./src/game-view.js":
/*!**************************!*\
  !*** ./src/game-view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass GameView {\n    constructor(ctx) {\n        this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n        this.ctx = ctx;\n    }\n\n    start() {\n        setInterval(() => {\n            this.game.moveObjects()\n            this.game.draw(this.ctx)\n        }, 500);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/game-view.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nclass Game {\n    static DIM_X = 500\n    static DIM_Y = 500\n    static NUM_ASTEROIDS;\n\n    constructor(astAmount) {\n        this.asteroids = []\n        this.addAsteroids(astAmount)\n    }\n\n    setDim(x, y) {\n        Game.DIM_X = x\n        Game.DIM_Y = y\n    }\n\n    addAsteroids(amount) {\n        Game.NUM_ASTEROIDS += amount\n        for (let i = 0; i < amount; i++) {\n            let newAst = new _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({pos: this.randomPosition()})\n            this.asteroids.push(newAst)\n        }\n    }\n\n    randomPosition() {\n        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.randomPos)(Game.DIM_X, Game.DIM_Y)\n    }\n\n    draw(ctx) {\n        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n        ctx.fillStyle = 'salmon';\n        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n        this.asteroids.forEach(ast => {\n            ast.draw(ctx)\n        })\n    }\n\n    moveObjects() {\n        this.asteroids.forEach(function(ast) {\n            ast.move();\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object.js */ \"./src/moving-object.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-view.js */ \"./src/game-view.js\");\n\n\n\n\nwindow.MovingObject = _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nwindow.Game = _game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n\nconst canvasEl = document.getElementById('game-canvas');\ncanvasEl.width = window.innerWidth;\ncanvasEl.height = window.innerHeight;\n\nconst ctx = canvasEl.getContext('2d');\n\nconst gameView = new _game_view_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n\ngameView.start();\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/index.js?");

/***/ }),

/***/ "./src/moving-object.js":
/*!******************************!*\
  !*** ./src/moving-object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MovingObject {\n    constructor(options) {\n        this.pos = options.pos;\n        this.velocity = options.vel;\n        this.radius = options.radius;\n        this.color = options.color;\n    }\n\n    draw(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n    }\n\n    move() {\n        this.pos[0] += this.velocity[0];\n        this.pos[1] += this.velocity[1];\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovingObject);\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/moving-object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   randomPos: () => (/* binding */ randomPos),\n/* harmony export */   randomVec: () => (/* binding */ randomVec),\n/* harmony export */   scale: () => (/* binding */ scale)\n/* harmony export */ });\n// Return a randomly oriented vector with the given length.\nfunction randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return scale([Math.sin(deg), Math.cos(deg)], length);\n}\n\nfunction randomPos(x, y) {\n    return [Math.floor(Math.random() * x), Math.floor(Math.random() * y)]\n}\n\n// Scale the length of a vector by the given amount.\nfunction scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n}\n\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/utils.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;