"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/valeria',
  PORT: process.env.PORT || 4000,
  SECRET: "9e9befa0b4635aa1c3681f16a35765829739860e5e2305e9eb6f709175ab97c57"
};
exports["default"] = _default;