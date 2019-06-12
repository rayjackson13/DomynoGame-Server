/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/errorMessages.js":
/*!**************************************!*\
  !*** ./src/helpers/errorMessages.js ***!
  \**************************************/
/*! exports provided: MAX_PLAYERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_PLAYERS\", function() { return MAX_PLAYERS; });\nvar MAX_PLAYERS = 'Players amount exceeded for this game. Please try again later.';\n\n//# sourceURL=webpack:///./src/helpers/errorMessages.js?");

/***/ }),

/***/ "./src/helpers/generateRandomMatrixInput.js":
/*!**************************************************!*\
  !*** ./src/helpers/generateRandomMatrixInput.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/grid */ \"./src/logic/grid.js\");\n\n\nvar generateRandomMatrixInput = function generateRandomMatrixInput() {\n  var width = 4; //Math.floor(Math.random() * 3) + 3\n\n  var height = 3; //Math.floor(Math.random() * 3) + 3\n\n  var grid = new _logic_grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](width, height);\n  grid.setItem({\n    x: 1,\n    y: 1\n  });\n  grid.setItem({\n    x: 1,\n    y: 2\n  });\n  return grid;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateRandomMatrixInput);\n\n//# sourceURL=webpack:///./src/helpers/generateRandomMatrixInput.js?");

/***/ }),

/***/ "./src/helpers/getBestMove.js":
/*!************************************!*\
  !*** ./src/helpers/getBestMove.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getBestMove = function getBestMove(moves) {\n  var bestCount = Infinity;\n  var bestMove;\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = moves[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var move = _step.value;\n      var grid = move.grid;\n      var moveCount = grid.countFurtherMoves();\n\n      if (moveCount % 2 === 0 && moveCount < bestCount) {\n        bestCount = moveCount;\n        bestMove = move;\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  console.log(bestMove, bestCount);\n\n  if (!bestMove) {\n    return moves[0];\n  }\n\n  return bestMove;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getBestMove);\n\n//# sourceURL=webpack:///./src/helpers/getBestMove.js?");

/***/ }),

/***/ "./src/helpers/getMoveSequence.js":
/*!****************************************!*\
  !*** ./src/helpers/getMoveSequence.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * Get an array of all possible moves\r\n */\nvar getMoveSequences = function getMoveSequences(_ref) {\n  var grid = _ref.grid,\n      _ref$aiMove = _ref.aiMove,\n      aiMove = _ref$aiMove === void 0 ? false : _ref$aiMove;\n  var moves = [];\n\n  if (!grid.checkMoves()) {\n    return moves;\n  }\n\n  var _grid$getSize = grid.getSize(),\n      width = _grid$getSize.width,\n      height = _grid$getSize.height;\n\n  for (var i = 0; i < height; i++) {\n    for (var j = 0; j < width; j++) {\n      if (j < width - 1 && !grid.getItem({\n        x: j,\n        y: i\n      }) && !grid.getItem({\n        x: j + 1,\n        y: i\n      })) {\n        var copyGrid = grid.copy();\n        copyGrid.setItem({\n          x: j,\n          y: i\n        });\n        copyGrid.setItem({\n          x: j + 1,\n          y: i\n        });\n        moves.push({\n          position: {\n            x: j,\n            y: i\n          },\n          vertical: false,\n          grid: copyGrid,\n          aiMove: aiMove\n        });\n      }\n\n      if (i < height - 1 && !grid.getItem({\n        x: j,\n        y: i\n      }) && !grid.getItem({\n        x: j,\n        y: i + 1\n      })) {\n        var _copyGrid = grid.copy();\n\n        _copyGrid.setItem({\n          x: j,\n          y: i\n        });\n\n        _copyGrid.setItem({\n          x: j,\n          y: i + 1\n        });\n\n        moves.push({\n          position: {\n            x: j,\n            y: i\n          },\n          vertical: true,\n          grid: _copyGrid,\n          aiMove: aiMove\n        });\n      }\n    }\n  }\n\n  return moves;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getMoveSequences);\n\n//# sourceURL=webpack:///./src/helpers/getMoveSequence.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());\nvar htmlFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, 'template.html');\nvar PORT = 1700;\napp.get('/', function (req, res) {\n  console.log(\"\".concat(req.ip, \" \").concat(req.method, \": \").concat(req.path));\n  res.sendFile(htmlFile);\n});\nObject(_modules_game__WEBPACK_IMPORTED_MODULE_4__[\"handleGame\"])(app);\napp.use(function (req, res, next) {\n  res.header('Access-Control-Allow-Origin', '*');\n  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');\n  next();\n});\napp.listen(PORT); // console.clear()\n\nconsole.log('Server started on port %o.', PORT);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic/game.js":
/*!***************************!*\
  !*** ./src/logic/game.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/logic/player.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid */ \"./src/logic/grid.js\");\n/* harmony import */ var _helpers_errorMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/errorMessages */ \"./src/helpers/errorMessages.js\");\n\n\n\n\n\n\nvar Game = function Game() {\n  var _this = this;\n\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Game);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"addPlayer\", function (name) {\n    var players = _this.players;\n\n    if (players.length < 4) {\n      var player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](players.length, name);\n      players.push(player);\n      return player;\n    }\n\n    throw _helpers_errorMessages__WEBPACK_IMPORTED_MODULE_4__[\"MAX_PLAYERS\"];\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"getPlayers\", function () {\n    return _this.players;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"start\", function (width, height) {\n    _this.grid = new _grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"](width, height);\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"getGrid\", function () {\n    return _this.grid;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"addMove\", function (_ref) {\n    var position = _ref.position,\n        idPlayer = _ref.idPlayer,\n        _ref$vertical = _ref.vertical,\n        vertical = _ref$vertical === void 0 ? false : _ref$vertical;\n\n    var player = _this.players.filter(function (val) {\n      return val && val.id === idPlayer;\n    })[0];\n\n    _this.moves.push({\n      player: player,\n      position: position,\n      vertical: vertical\n    });\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"putDomino\", function (_ref2) {\n    var position = _ref2.position,\n        _ref2$vertical = _ref2.vertical,\n        vertical = _ref2$vertical === void 0 ? false : _ref2$vertical,\n        playerId = _ref2.idPlayer;\n\n    var grid = _this.getGrid();\n\n    var _grid$getSize = grid.getSize(),\n        width = _grid$getSize.width,\n        height = _grid$getSize.height;\n\n    var x = position.x,\n        y = position.y; // calculate the second position\n\n    var secPos;\n\n    if (vertical) {\n      secPos = y + 1 !== height ? {\n        x: x,\n        y: y + 1\n      } : {\n        x: x,\n        y: y - 1\n      };\n    } else {\n      secPos = x + 1 !== width ? {\n        x: x + 1,\n        y: y\n      } : {\n        x: x - 1,\n        y: y\n      };\n    } // check if places are empty\n\n\n    if (grid.getItem(position) || grid.getItem(secPos)) {\n      throw {\n        status: 400,\n        errorCode: 8,\n        message: 'This position is already taken!'\n      };\n    }\n\n    grid.setItem(position, playerId);\n    grid.setItem(secPos, playerId); // TODO: check if there are other possible combinations\n\n    var gameEnded = !grid.checkMoves();\n    return {\n      grid: grid.getGrid(),\n      full: gameEnded\n    };\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"getPossibleMoves\", function () {\n    return _this.getGrid().getMoves();\n  });\n\n  this.id = 0;\n  this.moves = [];\n  this.isOver = false;\n  this.players = [];\n  this.grid = null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/logic/game.js?");

/***/ }),

/***/ "./src/logic/grid.js":
/*!***************************!*\
  !*** ./src/logic/grid.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_getMoveSequence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/getMoveSequence */ \"./src/helpers/getMoveSequence.js\");\n/* harmony import */ var _helpers_getBestMove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/getBestMove */ \"./src/helpers/getBestMove.js\");\n\n\n\n\n\nvar Grid = function Grid(w, h, options) {\n  var _this = this;\n\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Grid);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"copy\", function () {\n    var width = _this.width,\n        height = _this.height,\n        grid = _this.grid;\n    var gridCopy = new Array(height);\n\n    for (var i = 0; i < height; i++) {\n      gridCopy[i] = new Array(width);\n\n      for (var j = 0; j < width; j++) {\n        gridCopy[i][j] = grid[i][j];\n      }\n    }\n\n    return new Grid(width, height, {\n      grid: gridCopy\n    });\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"setGridMatrix\", function () {\n    var width = _this.width,\n        height = _this.height;\n    var grid = new Array(height);\n\n    for (var i = 0; i < height; i++) {\n      grid[i] = new Array(width);\n\n      for (var j = 0; j < width; j++) {\n        grid[i][j] = 0;\n      }\n    } // console.log(`Grid initiated.\\n${ grid }`)\n\n\n    return grid;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"getSize\", function () {\n    var width = _this.width,\n        height = _this.height;\n    return {\n      width: width,\n      height: height\n    };\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"setItem\", function (_ref) {\n    var x = _ref.x,\n        y = _ref.y;\n    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n    _this.grid[y][x] = value === 0 ? 1 : value;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"getItem\", function (_ref2) {\n    var x = _ref2.x,\n        y = _ref2.y;\n    return _this.grid[y][x];\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"getGrid\", function () {\n    return _this.grid;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"checkMoves\", function () {\n    var _this$getSize = _this.getSize(),\n        width = _this$getSize.width,\n        height = _this$getSize.height;\n\n    for (var i = 0; i < height; i++) {\n      for (var j = 0; j < width; j++) {\n        if (j < width - 1 && !_this.getItem({\n          x: j,\n          y: i\n        }) && !_this.getItem({\n          x: j + 1,\n          y: i\n        })) {\n          return true;\n        }\n\n        if (i < height - 1 && !_this.getItem({\n          x: j,\n          y: i\n        }) && !_this.getItem({\n          x: j,\n          y: i + 1\n        })) {\n          return true;\n        }\n      }\n    }\n\n    return false;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"getMoves\", function () {\n    var moves = [];\n    var moveSequences = Object(_helpers_getMoveSequence__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      grid: _this.copy(),\n      moves: moves\n    });\n    var bestMove = Object(_helpers_getBestMove__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(moveSequences);\n    return bestMove;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"countFurtherMoves\", function () {\n    var result = 0;\n\n    var grid = _this.copy();\n\n    var _grid$getSize = grid.getSize(),\n        width = _grid$getSize.width,\n        height = _grid$getSize.height;\n\n    for (var i = 0; i < height; i++) {\n      for (var j = 0; j < width; j++) {\n        if (j < width - 1 && !grid.getItem({\n          x: j,\n          y: i\n        }) && !grid.getItem({\n          x: j + 1,\n          y: i\n        })) {\n          grid.setItem({\n            x: j,\n            y: i\n          });\n          grid.setItem({\n            x: j + 1,\n            y: i\n          });\n          result++;\n        }\n\n        if (i < height - 1 && !grid.getItem({\n          x: j,\n          y: i\n        }) && !grid.getItem({\n          x: j,\n          y: i + 1\n        })) {\n          grid.setItem({\n            x: j,\n            y: i\n          });\n          grid.setItem({\n            x: j,\n            y: i + 1\n          });\n          result++;\n        }\n      }\n    }\n\n    return result;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"print\", function () {\n    console.log('Grid: [');\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = _this.grid[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var row = _step.value;\n        console.log(\"[ \".concat(row, \" ]\"));\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    console.log('].');\n  });\n\n  if (typeof w === 'number' && typeof h === 'number') {\n    this.width = w;\n    this.height = h;\n    this.grid = options && options.grid ? options.grid : this.setGridMatrix();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack:///./src/logic/grid.js?");

/***/ }),

/***/ "./src/logic/model.js":
/*!****************************!*\
  !*** ./src/logic/model.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tensorflow/tfjs */ \"@tensorflow/tfjs\");\n/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _helpers_generateRandomMatrixInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/generateRandomMatrixInput */ \"./src/helpers/generateRandomMatrixInput.js\");\n\n\n\n\n\n\n\n\nvar Model =\n/*#__PURE__*/\nfunction () {\n  function Model() {\n    var _this = this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Model);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, \"compile\", function () {\n      _this.model.compile({\n        loss: 'meanSquaredError',\n        optimizer: 'sgd'\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, \"train\",\n    /*#__PURE__*/\n    function () {\n      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(callback) {\n        var i, grid, move, xs, ys, h;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                i = 1;\n\n              case 1:\n                if (!(i < 10)) {\n                  _context.next = 14;\n                  break;\n                }\n\n                grid = Object(_helpers_generateRandomMatrixInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n                move = grid.getMoves(); // console.log(grid)\n\n                xs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_5__[\"tensor2d\"](grid.getGrid());\n                console.log(move.position.x, move.position.y, move.vertical ? 1 : 0);\n                ys = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_5__[\"tensor1d\"]([move.position.x, move.position.y, move.vertical ? 1 : 0]);\n                _context.next = 9;\n                return _this.model.fit(xs, ys, {\n                  batchSize: 4,\n                  epochs: 3\n                });\n\n              case 9:\n                h = _context.sent;\n                console.log(h.history.loss[0]);\n\n              case 11:\n                i++;\n                _context.next = 1;\n                break;\n\n              case 14:\n                callback && callback();\n\n              case 15:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, \"predict\", function (tensor) {\n      var result = _this.model.predict(tensor);\n\n      result.print();\n      return result;\n    });\n\n    this.model = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_5__[\"sequential\"]();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Model, [{\n    key: \"addLayer\",\n    value: function addLayer(_ref2) {\n      var units = _ref2.units,\n          batchInputShape = _ref2.batchInputShape;\n      this.model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_5__[\"layers\"].dense({\n        units: units,\n        batchInputShape: batchInputShape,\n        activation: 'sigmoid'\n      }));\n    }\n  }]);\n\n  return Model;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model); // model = tf.sequential()\n// model.add(tf.layers.dense({ \n//     units: 1, \n//     batchInputShape: [ 3, 4 ],\n//     activation: 'sigmoid'\n// }))\n// model.compile({\n//     loss: 'meanSquaredError',\n//     optimizer: 'sgd'\n// })\n// // train the model\n// for (let i = 1; i < 10; i++) {\n//     const grid = generateRandomMatrixInput()\n//     const move = grid.getMoves()\n//     console.log(grid)\n//     const xs = tf.tensor2d(grid.getGrid())\n//     const ys = tf.tensor1d([ move.position.x, move.position.y, move.vertical ? 1 : 0 ])\n//     model.fit(xs, ys, {\n//         // batchSize: 4,\n//         // epochs: 3\n//     }).then((h) => console.log(h.history.loss[0]))\n// }\n\n//# sourceURL=webpack:///./src/logic/model.js?");

/***/ }),

/***/ "./src/logic/player.js":
/*!*****************************!*\
  !*** ./src/logic/player.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Player = function Player(id, name) {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Player);\n\n  this.id = id;\n  this.name = name;\n  this.dominos = [];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/logic/player.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! exports provided: handleGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleGame\", function() { return handleGame; });\n/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs */ \"@tensorflow/tfjs\");\n/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/game */ \"./src/logic/game.js\");\n/* harmony import */ var _logic_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/model */ \"./src/logic/model.js\");\n\n\n\nvar game;\nvar handleGame = function handleGame(app) {\n  app.post('/game', function (req, res) {\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');\n    var _req$body = req.body,\n        playerName = _req$body.name,\n        width = _req$body.width,\n        height = _req$body.height;\n\n    try {\n      game = new _logic_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n      if (!playerName || !playerName.length) {\n        throw {\n          message: 'Player name should be provided and should not be empty.'\n        };\n      }\n\n      game.addPlayer(playerName);\n\n      if (!width || !height) {\n        throw {\n          message: 'Please specify the width and the height of the field.'\n        };\n      }\n\n      if (width < 3 || width > 50 || height < 3 || height > 50) {\n        throw {\n          message: 'The size of the field is either too small or too large.'\n        };\n      }\n\n      game.start(width, height);\n      return res.status(200).send({\n        msg: 'Game started. Grid initialized.',\n        grid: game.getGrid(),\n        players: game.getPlayers()\n      });\n    } catch (e) {\n      return res.status(400).send({\n        msg: e.message\n      });\n    }\n  });\n  app.get('/game', function (req, res) {\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // retrieve game identifier\n\n    if (game) {\n      return res.status(200).send(\"Game identifier: \".concat(game.id));\n    }\n\n    return res.status(400).send('No game initialized yet.');\n  });\n  app.get('/game/players', function (req, res) {\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //get players in the game\n\n    if (game) {\n      return res.status(200).send(game.getPlayers());\n    }\n\n    return res.status(400).send('No game initialized yet.');\n  });\n  app.get('/grid', function (req, res) {\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // get the grid properties.\n\n    var grid = game ? game.getGrid() : null;\n\n    if (!grid) {\n      return res.status(400).send('No grid specified.');\n    }\n\n    var _req$query = req.query,\n        x = _req$query.x,\n        y = _req$query.y;\n\n    if (x && y) {\n      return res.status(200).send({\n        item: grid.getItem({\n          x: Number(x),\n          y: Number(y)\n        })\n      });\n    }\n\n    return res.status(200).send({\n      size: grid.getSize(),\n      grid: grid\n    });\n  });\n  app.post('/game/domino', function (_ref, res) {\n    var body = _ref.body;\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');\n\n    try {\n      var _game$putDomino = game.putDomino(body),\n          full = _game$putDomino.full,\n          grid = _game$putDomino.grid;\n\n      game.addMove(body);\n      console.log('Game over', full);\n\n      if (full) {\n        throw {\n          status: 200,\n          message: 'Game\\'s over!',\n          grid: grid,\n          full: full,\n          winner: 'player'\n        };\n      }\n\n      var aiMove = game.getPossibleMoves();\n      aiMove.idPlayer = -1;\n\n      var _game$putDomino2 = game.putDomino(aiMove),\n          newGrid = _game$putDomino2.grid,\n          isFinished = _game$putDomino2.full;\n\n      game.addMove(aiMove);\n      return res.status(200).send({\n        msg: isFinished ? 'Game\\'s over!' : 'Success.',\n        grid: newGrid,\n        full: isFinished,\n        winner: isFinished ? 'ai' : undefined\n      });\n    } catch (_ref2) {\n      var _ref2$status = _ref2.status;\n      var status = _ref2$status === void 0 ? 400 : _ref2$status;\n      var message = _ref2.message;\n      var _grid = _ref2.grid;\n      var _full = _ref2.full;\n      var winner = _ref2.winner;\n      console.error({\n        status: status,\n        message: message,\n        grid: _grid,\n        full: _full,\n        winner: winner\n      });\n      return res.status(status).send({\n        msg: message,\n        grid: _grid,\n        full: _full,\n        winner: winner\n      });\n    }\n  }); // app.post('/game/ai', () => {\n  //     const model = new Model()\n  //     model.addLayer({ units: 1, batchInputShape: [ 3, 4 ] })\n  //     model.compile()\n  //     model.train(() => {\n  //         model.predict(tf.tensor2d(game.getGrid().getGrid()))\n  //     })\n  // })\n};\n\n//# sourceURL=webpack:///./src/modules/game.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "@tensorflow/tfjs":
/*!***********************************!*\
  !*** external "@tensorflow/tfjs" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@tensorflow/tfjs\");\n\n//# sourceURL=webpack:///external_%22@tensorflow/tfjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });