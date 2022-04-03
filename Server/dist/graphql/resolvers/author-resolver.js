"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAuthorById = exports["default"] = exports.Authors = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _generateNumericString = _interopRequireDefault(require("../../@lib/utils/generateNumericString"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Authors = [];
exports.Authors = Authors;

var generateID = function generateID() {
  return "".concat(new Date().getTime()).concat((0, _generateNumericString["default"])(6));
};

var getAuthors = function getAuthors() {
  return [].concat(Authors);
};

var getAuthorById = function getAuthorById(_id) {
  return Authors.find(function (author) {
    return author._id === _id;
  });
};

exports.getAuthorById = getAuthorById;

var _createAuthor = function createAuthor(data) {
  var author = _objectSpread(_objectSpread({
    _id: generateID()
  }, data), {}, {
    createdAt: new Date().toISOString()
  });

  Authors.push(author);
};

var _editAuthor = function editAuthor(_id, data) {
  var thisAuthorIndex = Authors.findIndex(function (author) {
    return author._id === _id;
  });
  if (thisAuthorIndex < 0) throw new Error('bad request');
  Authors[thisAuthorIndex].name = data.name;
}; // 
// (req,res,next) => 


var _default = {
  Query: {
    getAuthors: getAuthors,
    getAuthor: function getAuthor(_, _ref) {
      var _id = _ref._id;
      return getAuthorById(_id);
    }
  },
  Mutation: {
    createAuthor: function createAuthor(_, data) {
      _createAuthor(data);

      return {
        msg: 'ok',
        status: 200
      };
    },
    editAuthor: function editAuthor(_, _ref2) {
      var _id = _ref2._id,
          name = _ref2.name;

      try {
        _editAuthor(_id, {
          name: name
        });

        return {
          msg: 'ok',
          status: 200
        };
      } catch (error) {
        throw error;
      }
    }
  }
};
exports["default"] = _default;