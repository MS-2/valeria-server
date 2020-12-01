"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAdmin = exports.createRoles = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _User = _interopRequireDefault(require("../models/User"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var createRoles = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var count, values;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Role["default"].estimatedDocumentCount();

          case 3:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return Promise.all([new _Role["default"]({
              name: "basic",
              description: "usuario basico"
            }).save(), new _Role["default"]({
              name: "admin",
              description: "todo lo puede lord"
            }).save()]);

          case 8:
            values = _context.sent;
            console.log(values);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;

var createAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              email: "admin@localhost"
            });

          case 2:
            user = _context2.sent;

            if (user) {
              _context2.next = 26;
              break;
            }

            _context2.t0 = _User["default"];
            _context2.t1 = [];
            _context2.t2 = [];
            _context2.next = 9;
            return _bcryptjs["default"].hash("admin", 10);

          case 9:
            _context2.t3 = _context2.sent;
            _context2.t4 = ["admin"];
            _context2.t5 = {
              name: "admin",
              email: "admin@localhost",
              companys: _context2.t1,
              users: _context2.t2,
              pass: _context2.t3,
              role: _context2.t4
            };
            _context2.next = 14;
            return _context2.t0.create.call(_context2.t0, _context2.t5);

          case 14:
            console.log('Admin User Created!');
            _context2.t6 = _User["default"];
            _context2.t7 = [];
            _context2.t8 = [];
            _context2.next = 20;
            return _bcryptjs["default"].hash("basic", 10);

          case 20:
            _context2.t9 = _context2.sent;
            _context2.t10 = ["basic"];
            _context2.t11 = {
              name: "basic",
              email: "basic@localhost",
              companys: _context2.t7,
              users: _context2.t8,
              pass: _context2.t9,
              role: _context2.t10
            };
            _context2.next = 25;
            return _context2.t6.create.call(_context2.t6, _context2.t11);

          case 25:
            console.log('basic User Created!');

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createAdmin() {
    return _ref2.apply(this, arguments);
  };
}();

exports.createAdmin = createAdmin;