"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteuser = exports.adduser = exports.remoroles = exports.addroles = exports.updateuser = exports.getuser = exports.getusers = exports.createuser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _Company = _interopRequireDefault(require("../models/Company"));

// export const createuser2 = async (req,res)=> {
//   const { name, email, pass, roles, company } = req.body;
//   const user = new User({
//     name,
//     email,
//     pass,
//     company,
//   })
//   const a = User.create(input).then(
//     function exito(params) {
//         console.log(params);
//         console.log("exito");
//     const cosa = new Cosa({
//           name: 'Casino Royale asdadoooooooooooooo',
//           user: params._id    // assign the _id from the person
//         });
//         cosa.save();
//         return params;
//       },
//     function fracaso(params) {
//         console.log("fracaso");
//     }
//   )
//   return a;
// }
var createuser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, email, pass, role, company, user, savedUser;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, email = _req$body.email, pass = _req$body.pass, role = _req$body.role, company = _req$body.company; // const rolesFound = await Role.find({ name: { $in: roles } });
            //  console.log(rolesFound)
            // creating a new User

            user = new _User["default"]({
              name: name,
              email: email,
              pass: pass,
              company: company,
              role: role // roles: rolesFound.map((role) => role._id),

            }); // encrypting password

            _context.next = 5;
            return _User["default"].encryptPassword(user.pass);

          case 5:
            user.pass = _context.sent;
            _context.next = 8;
            return user.save();

          case 8:
            savedUser = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              _id: savedUser._id,
              name: savedUser.name,
              email: savedUser.email,
              // roles: savedUser.roles,
              role: savedUser.role,
              companys: savedUser.companys
            }));

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

  return function createuser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createuser = createuser;

var getusers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].find();

          case 2:
            users = _context2.sent;
            return _context2.abrupt("return", res.json(users));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getusers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getusers = getusers;

var getuser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var userId, user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            userId = req.params.userId;
            _context3.next = 3;
            return _User["default"].findById(userId);

          case 3:
            user = _context3.sent;
            return _context3.abrupt("return", res.json(user));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getuser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getuser = getuser;

var updateuser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var updatedUser;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log(req.params);
            _context4.next = 3;
            return _User["default"].findByIdAndUpdate(req.params.userId, req.body, {
              "new": true
            });

          case 3:
            updatedUser = _context4.sent;
            res.status(204).json(updatedUser);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateuser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateuser = updateuser;

var addroles = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var role, userId, user, updatedUser;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            role = req.body.role;
            userId = req.params.userId;
            console.log("ELBODY : ", role);

            if (!(role === null)) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", res.status(500).send({
              message: "error null"
            }));

          case 5:
            if (!(role === undefined)) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.status(500).send({
              message: "error undefined"
            }));

          case 7:
            _context5.next = 9;
            return _User["default"].findById(userId);

          case 9:
            user = _context5.sent;

            if (user.role.includes(role)) {
              _context5.next = 17;
              break;
            }

            _context5.next = 13;
            return _User["default"].findByIdAndUpdate(userId, {
              $push: {
                role: role
              }
            }, {
              "new": true
            });

          case 13:
            updatedUser = _context5.sent;
            res.status(204).json(updatedUser);
            _context5.next = 18;
            break;

          case 17:
            return _context5.abrupt("return", res.status(500).send({
              message: "el usuario ya tiene asignado ese rol"
            }));

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function addroles(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.addroles = addroles;

var remoroles = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var role, userId, user, updatedUser;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            role = req.body.role;
            userId = req.params.userId;
            console.log("ELBODY : ", role);

            if (!(role === "undefined")) {
              _context6.next = 5;
              break;
            }

            return _context6.abrupt("return", res.status(500).send({
              message: "error undefined"
            }));

          case 5:
            if (!(role === "admin")) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.status(500).send({
              message: "no se puede eliminar el rol de admin"
            }));

          case 7:
            _context6.next = 9;
            return _User["default"].findById(userId);

          case 9:
            user = _context6.sent;

            if (!user.role.includes(role)) {
              _context6.next = 17;
              break;
            }

            _context6.next = 13;
            return _User["default"].findByIdAndUpdate(userId, {
              $pull: {
                role: role
              }
            }, {
              "new": true
            });

          case 13:
            updatedUser = _context6.sent;
            res.status(204).json(updatedUser);
            _context6.next = 18;
            break;

          case 17:
            return _context6.abrupt("return", res.status(500).send({
              message: "error eliminando el rol"
            }));

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function remoroles(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.remoroles = remoroles;

var adduser = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var userId, id, usera, userx, objetoUsuarioA, ArrayParseadoAtexto, updatedUser;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            userId = req.params.userId; //id del usuarioactual

            id = req.body.id; // id del usuario foraneo

            if (!(userId === id)) {
              _context7.next = 4;
              break;
            }

            return _context7.abrupt("return", res.status(500).send({
              message: "error no se puede agregar a uno mismo"
            }));

          case 4:
            if (!(id === null)) {
              _context7.next = 6;
              break;
            }

            return _context7.abrupt("return", res.status(500).send({
              message: "error null"
            }));

          case 6:
            if (!(id === undefined)) {
              _context7.next = 8;
              break;
            }

            return _context7.abrupt("return", res.status(500).send({
              message: "error undefined"
            }));

          case 8:
            _context7.next = 10;
            return _User["default"].findById(userId);

          case 10:
            usera = _context7.sent;
            _context7.next = 13;
            return _User["default"].findById(id);

          case 13:
            userx = _context7.sent;
            objetoUsuarioA = usera.users;
            ArrayParseadoAtexto = JSON.stringify(objetoUsuarioA);

            if (ArrayParseadoAtexto.includes(id)) {
              _context7.next = 23;
              break;
            }

            _context7.next = 19;
            return _User["default"].findByIdAndUpdate(userId, {
              $push: {
                users: userx
              }
            }, {
              "new": true
            });

          case 19:
            updatedUser = _context7.sent;
            res.status(204).json(updatedUser);
            _context7.next = 24;
            break;

          case 23:
            return _context7.abrupt("return", res.status(500).send({
              message: "el usuario ya tiene asignado ese usuario"
            }));

          case 24:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function adduser(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.adduser = adduser;

var deleteuser = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var userId, user;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            userId = req.params.userId;
            _context8.next = 3;
            return _User["default"].findByIdAndDelete(userId);

          case 3:
            user = _context8.sent;
            return _context8.abrupt("return", res.json(user));

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function deleteuser(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.deleteuser = deleteuser;