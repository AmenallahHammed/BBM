import React from 'react';
import NavBar from './NavBar'; // Your existing NavBar

const LivraisonInterface = () => {
  return (
    <div>
      <NavBar />
      <div className="interface-container">
        <h1>Interface Agent de Livraison</h1>
        <div className="interface-content">
          <div className="feature-card">
            <h3>Bons de Chargement</h3>
            <p>Consulter et traiter les bons de chargement</p>
            <button className="feature-btn">Gérer les bons</button>
          </div>
          <div className="feature-card">
            <h3>Itinéraires</h3>
            <p>Planifier et optimiser les routes</p>
            <button className="feature-btn">Planifier routes</button>
          </div>
          <div className="feature-card">
            <h3>Notifications</h3>
            <p>Gérer les modifications et refus</p>
            <button className="feature-btn">Voir notifications</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivraisonInterface;