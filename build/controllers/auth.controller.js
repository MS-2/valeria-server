"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signUp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, email, pass, roles, newUser, saveuser, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const userFound = User.find({email})
            _req$body = req.body, name = _req$body.name, email = _req$body.email, pass = _req$body.pass, roles = _req$body.roles; // console.log(req.body)

            _context.t0 = _User["default"];
            _context.t1 = name;
            _context.t2 = email;
            _context.next = 6;
            return _User["default"].encryptPassword(pass);

          case 6:
            _context.t3 = _context.sent;
            _context.t4 = {
              name: _context.t1,
              email: _context.t2,
              pass: _context.t3
            };
            newUser = new _context.t0(_context.t4);
            _context.next = 11;
            return newUser.save();

          case 11:
            saveuser = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: saveuser._id
            }, _config["default"].SECRET, {
              expiresIn: 36000
            }); // console.log(newUser)
            // console.log(saveuser)

            res.status(200).json({
              token: token
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userfound, match, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User["default"].findOne({
              email: req.body.email
            }).populate('roles');

          case 3:
            userfound = _context2.sent;

            if (userfound) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: "usuario no encontrado"
            }));

          case 6:
            _context2.next = 8;
            return _User["default"].comparePassword(req.body.pass, userfound.pass);

          case 8:
            match = _context2.sent;

            if (match) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              msg: "contraseña invalida"
            }));

          case 11:
            token = _jsonwebtoken["default"].sign({
              id: userfound._id
            }, _config["default"].SECRET, {
              expiresIn: 36000
            }); // let id = token.id
            // console.log("userfound",userfound)

            res.json({
              token: token
            });
            _context2.next = 18;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 15]]);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;