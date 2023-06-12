"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _AuthContext = require("../../context/AuthContext");
var _Config = _interopRequireDefault(require("./../../routes/Config"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function NavSection() {
  var _useContext = (0, _react.useContext)(_AuthContext.AuthContext),
    userData = _useContext.userData;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeLink = _useState2[0],
    setActiveLink = _useState2[1]; // Adiciona o state para armazenar o link ativo
  var location = (0, _reactRouterDom.useLocation)(); // Importa useLocation do react-router-dom para obter a rota atual
  var cont = 1;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _Config.default)().map(function (item) {
    return item.rules.includes(userData.rule.description) ? /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item",
      key: "li-".concat(cont++)
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "nav-link collapsed",
      style: {
        padding: 6
      },
      href: "#",
      "data-toggle": Array.isArray(item.children) && item.children.length >= 1 ? 'collapse' : '',
      "data-target": "#collapse-".concat(item.name),
      "aria-expanded": "true",
      "aria-controls": "#collapse-".concat(item.name)
    }, Array.isArray(item.children) && item.children.length >= 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("i", {
      className: item.icon
    }), /*#__PURE__*/_react.default.createElement("span", null, item.title)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("i", {
      className: item.icon
    }), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink
    // className={`nav-item ${
    //   location.pathname === item.path ? 'active' : ''
    // }`}
    // onClick={() => setActiveLink(item.path)} // Atualiza o link ativo quando o link é clicado
    // activeClassName="active-link"
    , {
      style: {
        color: 'rgb(255 255 255 / 80%)',
        textDecoration: 'none'
      },
      to: item.path
    }, item.title)))), Array.isArray(item.children) && item.children.length >= 1 ? /*#__PURE__*/_react.default.createElement("div", {
      id: "collapse-".concat(item.name),
      className: "collapse",
      "aria-labelledby": "headingTwo",
      "data-parent": "#accordionSidebar"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "bg-white py-2 collapse-inner rounded"
    }, item.children.map(function (children) {
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
        className: "collapse-item",
        to: children.path,
        key: "link-".concat(cont++)
        // activeClassName="active-link"
      }, children.title);
    }))) : null) : null;
  }));
}
var _default = NavSection;
exports.default = _default;