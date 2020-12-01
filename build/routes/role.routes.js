"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var control = _interopRequireWildcard(require("../controllers/rolecontroller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router["delete"]('/:rolId', [_middlewares.verifyToken, _middlewares.isAdmin], control.deleterole);
router.get('/', control.getrole);
router.post('/', [_middlewares.verifyToken, _middlewares.isAdmin], control.createrole);
var _default = router;
exports["default"] = _default;