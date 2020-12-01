"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var control = _interopRequireWildcard(require("../controllers/product.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.post('/', [_middlewares.verifyToken, _middlewares.isAdmin], control.createProduct);
router.get('/:productId', control.getproduct);
router.get('/', control.getproducts);
router.patch('/:productId', [_middlewares.verifyToken, _middlewares.isAdmin], control.updateproduct);
router["delete"]('/:productId', [_middlewares.verifyToken, _middlewares.isAdmin], control.deleteproduct);
var _default = router;
exports["default"] = _default;