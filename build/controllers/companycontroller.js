"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteproduct = exports.updateproduct = exports.getproduct = exports.getproducts = exports.createCompany = exports.create = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _faker = require("faker");

var _Company = _interopRequireDefault(require("../models/Company"));

var _User = _interopRequireDefault(require("../models/User"));

var create = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, color, id, input, companySaved;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, color = _req$body.color, id = _req$body.id;
            input = {
              name: name,
              color: color,
              id: id
            };
            companySaved = _Company["default"].create(input).then(function exito(params) {
              console.log("los params : ", params);
              console.log("exito");
              var cosa = new _User["default"]({
                email: 'jaun@gmail.com',
                pass: 'asd',
                companys: params._id // assign the _id from the person

              });
              cosa.save();
              return params;
            }, function fracaso(params) {
              console.log("fracaso");
            });
            res.status(201).json(companySaved);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.create = create;

var createCompany = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var empresa, i, newCompany, companySaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // const {name, nit} = req.body
            empresa = req.body.empresa;
            _context2.prev = 1;
            i = 0;

          case 3:
            if (!(i < Object.keys(empresa).length)) {
              _context2.next = 9;
              break;
            }

            if (!(Object.entries(empresa)[i][i] === '')) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(500).send("objeto vacio"));

          case 6:
            i++;
            _context2.next = 3;
            break;

          case 9:
            newCompany = new _Company["default"]({
              empresa: empresa
            });
            _context2.next = 12;
            return newCompany.save();

          case 12:
            companySaved = _context2.sent;
            console.log("empresa creada");
            res.status(201).json(companySaved);
            _context2.next = 21;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(500).json(_context2.t0));

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 17]]);
  }));

  return function createCompany(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createCompany = createCompany;

var getproducts = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var products;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Company["default"].find();

          case 2:
            products = _context3.sent;
            return _context3.abrupt("return", res.json(products));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getproducts(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getproducts = getproducts;

var getproduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var productId, product;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            productId = req.params.productId;
            _context4.next = 3;
            return _Company["default"].findById(productId);

          case 3:
            product = _context4.sent;
            res.status(200).json(product);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getproduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getproduct = getproduct;

var updateproduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var updatedProduct;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Company["default"].findByIdAndUpdate(req.params.productId, req.body, {
              "new": true
            });

          case 2:
            updatedProduct = _context5.sent;
            res.status(204).json(updatedProduct);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateproduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateproduct = updateproduct;

var deleteproduct = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var productId;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            productId = req.params.productId;
            _context6.next = 3;
            return _Company["default"].findByIdAndDelete(productId);

          case 3:
            // code 200 is ok too
            res.status(204).json();

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteproduct(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteproduct = deleteproduct;