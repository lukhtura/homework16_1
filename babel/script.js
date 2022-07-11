"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var spreadFunc = function spreadFunc() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'error';
  var b = arguments.length > 1 ? arguments[1] : undefined;
  var c = arguments.length > 2 ? arguments[2] : undefined;

  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  if (args.length < 2) {
    console.log('error');
    return;
  }

  ;
  var arr = "".concat(a, "-").concat(b, "-").concat(c);

  var obj = _objectSpread({}, args);

  console.log(arr);
  console.log(obj);
};

var data = [undefined, 2, 3, 4, 5, 'sd'];
spreadFunc.apply(void 0, data);