"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;
var _react = _interopRequireWildcard(require("react"));
require("../../pages/Main/main.css");
var _BarStyleContext = require("../../context/BarStyleContext");
var _NavSection = _interopRequireDefault(require("./NavSection"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// import Logo from '../Logo';

function Sidebar() {
  var _useContext = (0, _react.useContext)(_BarStyleContext.BarStyleContext),
    style = _useContext.style,
    setStyle = _useContext.setStyle;
  var changeStyle = function changeStyle() {
    if (style == 'navbar-nav bg-primary sidebar sidebar-dark navbar-nav-transaction accordion') {
      setStyle('navbar-nav bg-primary sidebar sidebar-dark navbar-nav-transaction accordion toggled');
    } else {
      setStyle('navbar-nav bg-primary sidebar sidebar-dark navbar-nav-transaction accordion');
    }
  };
  function Logo() {
    return /*#__PURE__*/_react.default.createElement("a", {
      className: "sidebar-brand d-flex align-items-center justify-content-center",
      href: "#"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sidebar-brand-icon rotate-n-15"
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fas fa-laugh-wink"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "sidebar-brand-text mx-3"
    }, "Starter Pack"), /*#__PURE__*/_react.default.createElement("div", {
      className: "text-center d-none d-md-inline"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "rounded-circle border-0",
      id: "sidebarToggle",
      onClick: changeStyle
    })));
  }
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: style,
    style: {
      transition: 'width 0.3s ease-in-out'
    },
    id: "accordionSidebar"
  }, /*#__PURE__*/_react.default.createElement(Logo, null), /*#__PURE__*/_react.default.createElement("hr", {
    className: "sidebar-divider my-0"
  }), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item active"
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    activeClassName: "active-link",
    style: {
      color: 'white',
      textDecoration: 'none'
    },
    className: "nav-link",
    to: "/app/dashboard"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-fw fa-tachometer-alt"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Dashboard")))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "sidebar-divider"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-heading"
  }, "Interface"), /*#__PURE__*/_react.default.createElement(_NavSection.default, null), /*#__PURE__*/_react.default.createElement("hr", {
    className: "sidebar-divider"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-heading"
  }, "Addons"), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link collapsed",
    href: "#",
    "data-toggle": "collapse",
    "data-target": "#collapsePages",
    "aria-expanded": "true",
    "aria-controls": "collapsePages"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-fw fa-folder"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Pages")), /*#__PURE__*/_react.default.createElement("div", {
    id: "collapsePages",
    className: "collapse",
    "aria-labelledby": "headingPages",
    "data-parent": "#accordionSidebar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white py-2 collapse-inner rounded"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "collapse-header"
  }, "Login Screens:"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "login.html"
  }, "Login"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "register.html"
  }, "Register"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "forgot-password.html"
  }, "Forgot Password"), /*#__PURE__*/_react.default.createElement("div", {
    className: "collapse-divider"
  }), /*#__PURE__*/_react.default.createElement("h6", {
    className: "collapse-header"
  }, "Other Pages:"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "404.html"
  }, "404 Page"), /*#__PURE__*/_react.default.createElement("a", {
    className: "collapse-item",
    href: "blank.html"
  }, "Blank Page")))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link",
    href: "charts.html"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-fw fa-chart-area"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Charts"))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-link",
    href: "tables.html"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-fw fa-table"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Tables"))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "sidebar-divider d-none d-md-block"
  }));
}