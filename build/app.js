"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _package = _interopRequireDefault(require("../package.json"));

var _product = _interopRequireDefault(require("./routes/product.routes"));

var _company = _interopRequireDefault(require("./routes/company.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _role = _interopRequireDefault(require("./routes/role.routes"));

var _initialSetup = require("./utils/initialSetup");

; //initSetup

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
(0, _initialSetup.createAdmin)(); // const corsOptions = {
//   origin: "http://localhost:4000",
// };

app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); // Settings

app.set('pkg', _package["default"]); // Welcome Routes

app.get("/", function (req, res) {
  res.json({
    message: "Welcome to valeria api r",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author
  });
}); // Routes

app.use('/api/products', _product["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/user', _user["default"]);
app.use('/api/company', _company["default"]);
app.use('/api/role', _role["default"]);
var _default = app;
exports["default"] = _default;