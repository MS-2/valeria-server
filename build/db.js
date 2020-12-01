"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

_mongoose["default"].connect(_config["default"].MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}).then(function (db) {
  return console.log("conectado a mongo : ", db.connection.host + ':' + db.connection.port);
})["catch"](function (error) {
  return console.log(error);
});