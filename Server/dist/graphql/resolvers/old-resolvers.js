"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var length = 0;
var _default = {
  Query: {
    hello: function hello() {
      var str = Array.from({
        length: length
      }).reduce(function (acc, cur) {
        return acc + 'o';
      }, '');
      return "hello w".concat(str, "rld");
    },
    anotherQuery: function anotherQuery() {
      return Math.floor(Math.random() * 100) + 1;
    }
  },
  Mutation: {
    myMutation: function () {
      var _myMutation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                length++;
                return _context.abrupt("return", 'success');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function myMutation() {
        return _myMutation.apply(this, arguments);
      }

      return myMutation;
    }()
  }
};
exports["default"] = _default;