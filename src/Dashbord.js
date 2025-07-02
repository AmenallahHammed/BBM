
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FacturesPage from './FacturesPage';
import Notification from './Notification';
// import GardiennageInterface from './GardiennageInterface'; // File does not exist
import LivraisonInterface from './LivraisonInterface';
import ClientForm from './ClientForm';
import NavBar from './NavBar';
import './Dashbord.css';


const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard">
      <NavBar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <div className="user-info">
            <h2>Bienvenue, {user.name}</h2>
            <span className="user-role">Code: {user.code}</span>
          </div>
          <button onClick={onLogout} className="logout-btn">
            Déconnexion
          </button>
        </header>
        <Routes>
          <Route path="/" element={<ClientForm />} />
          {user.role === 'facturation' && (
            <>
              <Route path="/factures" element={<FacturesPage />} />
              <Route path="/notification" element={<Notification />} />
            </>
          )}
          {user.role === 'livraison' && (
            <Route path="/livraison" element={<LivraisonInterface />} />
          )}
          {user.role === 'gardiennage' && (
            <Route path="/gardiennage" element={<div>GardiennageInterface non disponible</div>} />
          )}
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;