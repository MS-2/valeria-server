"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteproduct = exports.updateproduct = exports.getproduct = exports.getproducts = exports.createProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Product = _interopRequireDefault(require("../models/Product"));

var createProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, category, price, imgURL, newProduct, productSaved;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, category = _req$body.category, price = _req$body.price, imgURL = _req$body.imgURL; // console.log("cosa creada", name)

            _context.prev = 1;
            newProduct = new _Product["default"]({
              name: name,
              category: category,
              price: price,
              imgURL: imgURL
            });
            _context.next = 5;
            return newProduct.save();

          case 5:
            productSaved = _context.sent;
            res.status(201).json(productSaved);
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json(_context.t0));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function createProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;

var getproducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var products;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Product["default"].find();

          case 2:
            products = _context2.sent;
            return _context2.abrupt("return", res.json(products));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getproducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getproducts = getproducts;

var getproduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var productId, product;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            productId = req.params.productId;
            _context3.next = 3;
            return _Product["default"].findById(productId);

          case 3:
            product = _context3.sent;
            res.status(200).json(product);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getproduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getproduct = getproduct;

var updateproduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var updatedProduct;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Product["default"].findByIdAndUpdate(req.params.productId, req.body, {
              "new": true
            });

          case 2:
            updatedProduct = _context4.sent;
            res.status(204).json(updatedProduct);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateproduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateproduct = updateproduct;

var deleteproduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var productId;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            productId = req.params.productId;
            _context5.next = 3;
            return _Product["default"].findByIdAndDelete(productId);

          case 3:
            // code 200 is ok too
            res.status(204).json();

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteproduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteproduct = deleteproduct;