"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ROLES = void 0;

var _mongoose = require("mongoose");

var ROLES = ["admin"];
exports.ROLES = ROLES;
var roleSchema = new _mongoose.Schema({
  name: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  description: String
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)("role", roleSchema);

exports["default"] = _default;