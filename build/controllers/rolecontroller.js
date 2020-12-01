"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleterole = exports.getrole = exports.createrole = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var createrole = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, description, role, rolesaved;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, description = _req$body.description;
            role = new _Role["default"]({
              name: name,
              description: description
            }); // saving the new user

            _context.next = 5;
            return role.save();

          case 5:
            rolesaved = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              _id: rolesaved._id,
              name: rolesaved.name,
              description: rolesaved.description
            }));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function createrole(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createrole = createrole;

var getrole = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var rols;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Role["default"].find();

          case 2:
            rols = _context2.sent;
            console.log("test");
            return _context2.abrupt("return", res.json(rols));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getrole(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getrole = getrole;

var deleterole = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var roleId, rol;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            roleId = req.params.roleId;
            console.log("ROLEID : ", roleId);
            _context3.next = 4;
            return _Role["default"].findByIdAndDelete(roleId);

          case 4:
            rol = _context3.sent;
            return _context3.abrupt("return", res.json(rol));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleterole(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleterole = deleterole;