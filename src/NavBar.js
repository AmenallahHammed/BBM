import React from 'react';
import './NavBar.css';

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Agent de Facturisation</div>
      <ul className="navbar-links">
        <li><Link to="/">Fiche Client</Link></li>
        <li><Link to="/factures">Bon de chargement</Link></li>
        <li><Link to="/notification">Notification</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
