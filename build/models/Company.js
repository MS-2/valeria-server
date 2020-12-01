"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var companySchema = new _mongoose.Schema({
  empresa: {
    required: true,
    type: {}
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('company', companySchema);

exports["default"] = _default;