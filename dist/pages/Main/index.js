"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Main;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _AuthContext = require("../../context/AuthContext");
var _reactRouterDom = require("react-router-dom");
var _AppRoutes = _interopRequireDefault(require("../../routes/AppRoutes"));
var _Header = _interopRequireDefault(require("../../components/Header"));
require("./main.css");
var _Login = require("./../Login");
var _Sidebar = _interopRequireDefault(require("../../components/Sidebar"));
var _Content = _interopRequireDefault(require("./Content"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// import Sidebar from './components/Sidebar';

// import ErrorBoundary from '../../components/ErrorBoundary';

function Main() {
  var _useContext = (0, _react.useContext)(_AuthContext.AuthContext),
    authenticated = _useContext.authenticated,
    userData = _useContext.userData;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, !authenticated && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    className: "p-0",
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_Login.Login, null)), authenticated && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("body", {
    id: "page-top"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "wrapper"
  }, /*#__PURE__*/_react.default.createElement(_Sidebar.default, null), /*#__PURE__*/_react.default.createElement("div", {
    id: "content-wrapper",
    className: "d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "content"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_Content.default, null)))))));
}