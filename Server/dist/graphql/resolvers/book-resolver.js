"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterBooksByAuthorID = exports["default"] = exports.Books = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _generateNumericString = _interopRequireDefault(require("../../@lib/utils/generateNumericString"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Books = [];
exports.Books = Books;

var generateID = function generateID() {
  return "".concat(new Date().getTime()).concat((0, _generateNumericString["default"])(6));
};

var getBooks = function getBooks() {
  return [].concat(Books);
};

var getBookById = function getBookById(_id) {
  return Books.find(function (book) {
    return book._id === _id;
  });
};

var _createBook = function createBook(data) {
  var book = _objectSpread(_objectSpread({
    _id: generateID()
  }, data), {}, {
    createdAt: new Date().toISOString()
  });

  Books.push(book);
};

var _editBook = function editBook(_id, data) {
  var thisBookIndex = Books.findIndex(function (Book) {
    return Book._id === _id;
  });
  if (thisBookIndex < 0) throw new Error('bad request');
  Books[thisBookIndex].title = data.title;
};

var filterBooksByAuthorID = function filterBooksByAuthorID(authorId) {
  return Books.filter(function (item) {
    return item.authorId === authorId;
  });
};

exports.filterBooksByAuthorID = filterBooksByAuthorID;
var _default = {
  Query: {
    getBooks: getBooks,
    getBook: function getBook(_, _ref) {
      var _id = _ref._id;
      return getBookById(_id);
    }
  },
  Mutation: {
    createBook: function createBook(_, data) {
      _createBook(data);

      return {
        msg: 'ok',
        status: 200
      };
    },
    editBook: function editBook(_, _ref2) {
      var _id = _ref2._id,
          title = _ref2.title;

      try {
        _editBook(_id, {
          title: title
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