import React, { Children } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState } from 'react';
import Config from './../../routes/Config';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './styles.css';

function NavSection() {
  const { userData } = useContext(AuthContext);
  const { privateRoutes } = Config();

  const objectsWithoutRepeatingGroups = privateRoutes.map((object) => {
    if (Array.isArray(object.children)) {
      const proccessedGroups = {};
      const childrenWithoutRepeatingGroups = object.children.filter((child) => {
        if (!proccessedGroups[child.group]) {
          proccessedGroups[child.group] = true;
          return true;
        }
        return false;
      });

      return { ...object, children: childrenWithoutRepeatingGroups };
    }

    return object;
  });

  return (
    <div className="">
      {objectsWithoutRepeatingGroups.map((item, index) =>
        item.rules.includes(userData.rule.description) ? (
          <li className="nav-item" key={`li-${index}}`}>
            <NavLink
              className="nav-link collapsed"
              style={{
                padding: 6,
                color: 'rgb(255 255 255 / 95%)',
                textDecoration: 'none',
              }}
              href="#"
              data-toggle={
                Array.isArray(item.children) && item.children.length >= 1
                  ? 'collapse'
                  : ''
              }
              to={!Array.isArray(item.children) && `${item.path}`}
              data-target={`#collapse-${item.name}`}
              aria-expanded="true"
              aria-controls={`#collapse-${item.name}`}
            >
              {Array.isArray(item.children) && item.children.length >= 1 ? (
                <>
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </>
              ) : (
                <>
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </>
              )}
            </NavLink>
            {Array.isArray(item.children) && item.children.length >= 1 ? (
              <div
                id={`collapse-${item.name}`}
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  {/* <h6 className="collapse-header">Custom Utilities:</h6> */}
                  {item.children.map((children, index) => (
                    <NavLink
                      className="collapse-item"
                      to={children.path}
                      key={`link-${index}`}
                    >
                      {children.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : null}
          </li>
        ) : null,
      )}
    </div>
  );
}

export default NavSection;
