"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./App.css");
var _AuthContext = require("./context/AuthContext");
var _reactToastify = require("react-toastify");
var _Main = _interopRequireDefault(require("./pages/Main"));
var _BarStyleContext = require("./context/BarStyleContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import Sidebar from './components/Sidebar';

function App() {
  return /*#__PURE__*/_react.default.createElement(_AuthContext.AuthProvider, null, /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, null), /*#__PURE__*/_react.default.createElement(_BarStyleContext.BarStyleProvider, null, /*#__PURE__*/_react.default.createElement(_Main.default, null)));
}
var _default = App;
exports.default = _default;