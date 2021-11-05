import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to="/example" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
        Example
      </NavLink>
    </header>
  );
}
