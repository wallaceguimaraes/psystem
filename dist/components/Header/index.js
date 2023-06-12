"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;
var _react = _interopRequireWildcard(require("react"));
require("../../pages/Main/main.css");
var _BarStyleContext = require("../../context/BarStyleContext");
var _index = _interopRequireDefault(require("./Notification/index"));
var _Message = _interopRequireDefault(require("./Message"));
var _Profile = _interopRequireDefault(require("./Profile"));
var _index2 = _interopRequireDefault(require("./Search/index"));
var _SearchXs = _interopRequireDefault(require("./SearchXs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Header() {
  var _useContext = (0, _react.useContext)(_BarStyleContext.BarStyleContext),
    style = _useContext.style,
    setStyle = _useContext.setStyle;
  var changeStyle1 = function changeStyle1() {
    if (style == 'navbar-nav bg-primary sidebar sidebar-dark accordion') {
      setStyle('navbar-nav bg-primary sidebar sidebar-dark accordion toggled1');
    } else {
      setStyle('navbar-nav bg-primary sidebar sidebar-dark accordion');
    }
  };
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
  }, /*#__PURE__*/_react.default.createElement("button", {
    id: "sidebarToggleTop",
    className: "btn btn-link d-md-none rounded-circle mr-3",
    onClick: changeStyle1
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-bars"
  })), /*#__PURE__*/_react.default.createElement(_index2.default, null), /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav ml-auto"
  }, /*#__PURE__*/_react.default.createElement(_SearchXs.default, null), /*#__PURE__*/_react.default.createElement(_index.default, null), /*#__PURE__*/_react.default.createElement(_Message.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "topbar-divider d-none d-sm-block"
  }), /*#__PURE__*/_react.default.createElement(_Profile.default, null)));
}