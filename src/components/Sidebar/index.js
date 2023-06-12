import React, { useState, useContext } from 'react';
import '../../pages/Main/main.css';
import { BarStyleContext } from '../../context/BarStyleContext';
// import Logo from '../Logo';
import NavSection from './NavSection';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Sidebar() {
  const { style, setStyle } = useContext(BarStyleContext);

  const changeStyle = () => {
    if (
      style ==
      'navbar-nav bg-primary sidebar sidebar-dark navbar-nav-transaction accordion'
    ) {
      setStyle(
        'navbar-nav bg-primary sidebar sidebar-dark navbar-nav-transaction accordion toggled',
      );
    } else {
      setStyle(
        'navbar-nav bg-primary sidebar sidebar-dark navbar-nav-transaction accordion',
      );
    }
  };

  function Logo() {
    return (
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="#"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Starter Pack</div>
        <div className="text-center d-none d-md-inline">
          {/* <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={changeStyle}
          ></button> */}
        </div>
      </a>
    );
  }

  return (
    <ul
      className={style}
      style={{ transition: 'width 0.3s ease-in-out' }}
      id="accordionSidebar"
    >
      {/*  <!-- Sidebar - Brand --> */}
      <Logo />
      {/*   <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/*  <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <span>
          <Link
            // activeClassName="active-link"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
            className="nav-link"
            to="/app/dashboard"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </span>
        {/* <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a> */}
      </li>

      {/*  <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/*   <!-- Heading --> */}
      <div className="sidebar-heading">Interface</div>

      <NavSection />

      {/*  <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Addons</div>

      {/*  <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="login.html">
              Login
            </a>
            <a className="collapse-item" href="register.html">
              Register
            </a>
            <a className="collapse-item" href="forgot-password.html">
              Forgot Password
            </a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="404.html">
              404 Page
            </a>
            <a className="collapse-item" href="blank.html">
              Blank Page
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </a>
      </li>

      {/*  <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/*   <!-- Sidebar Toggler (Sidebar) --> */}
      {/*   <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
    </div> */}

      {/*  <!-- Sidebar Message --> */}

      {/* <div className="sidebar-card d-none d-lg-flex">
        <img
          className="sidebar-card-illustration mb-2"
          src="img/undraw_rocket.svg"
          alt="..."
        />
        <p className="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features,
          components, and more!
        </p>
        <a
          className="btn btn-success btn-sm"
          href="https://startbootstrap.com/theme/sb-admin-pro"
        >
          Upgrade to!
        </a>
      </div> */}
    </ul>
  );
}
