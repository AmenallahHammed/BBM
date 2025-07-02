import React from 'react';
import NavBar from './NavBar'; // Your existing NavBar

const GardiennageInterface = () => {
  return (
    <div>
      <NavBar />
      <div className="interface-container">
        <h1>Interface Agent de gardiennage</h1>
        <div className="interface-content">
          <div className="feature-card">
            <h3>Bons de Chargement</h3>
            <p>Accepter ou refuser les bons de chargement</p>
            <button className="feature-btn">Gérer les bons</button>
          </div>
          <div className="feature-card">
            <h3>Planning gardiennage</h3>
            <p>Consulter et modifier le planning</p>
            <button className="feature-btn">Voir planning</button>
          </div>
          <div className="feature-card">
            <h3>Matériel</h3>
            <p>Gestion du matériel de gardiennage</p>
            <button className="feature-btn">Gérer matériel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardiennageInterface;