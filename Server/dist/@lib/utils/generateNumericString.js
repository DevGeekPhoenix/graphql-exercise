"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var generateSingleDigitNumber = function generateSingleDigitNumber() {
  return Math.floor(Math.random() * 10);
};

var _default = function _default(length) {
  return Array.from({
    length: length
  }).reduce(function (acc, _) {
    var digit = generateSingleDigitNumber(); // this is the real return

    return acc += digit;
  }, '');
};

exports["default"] = _default;