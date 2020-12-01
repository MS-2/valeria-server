"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var control = _interopRequireWildcard(require("../controllers/usercontroller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/:userId', control.getuser);
router.get('/', control.getusers);
router.post('/', [_middlewares.verifyToken, _middlewares.isAdmin, _middlewares.checkDuplicateUsernameOrEmail], control.createuser);
router.patch('/:userId', [_middlewares.verifyToken, _middlewares.isAdmin], control.addroles);
router.patch('/remove/:userId', [_middlewares.verifyToken, _middlewares.isAdmin], control.remoroles);
router.patch('/adduser/:userId', [_middlewares.verifyToken, _middlewares.isAdmin], control.adduser);
var _default = router;
exports["default"] = _default;