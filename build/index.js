"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("./app"));

require("./db");

var _config = _interopRequireDefault(require("./config"));

_app["default"].listen(_config["default"].PORT);

var _default = _app["default"];
exports["default"] = _default;