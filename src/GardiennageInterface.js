

import React, { useState } from 'react';

import './GardiennageInterface.css';

const trucksData = [
  { id: 1, bon: 'BC-2025-0012', status: 'En attente', client: 'TransAlpha', plaque: '1234-AB-56', anomalies: false },
  { id: 2, bon: 'BC-2025-0013', status: 'Validé', client: 'LogiBeta', plaque: '5678-CD-90', anomalies: false },
  { id: 3, bon: 'BC-2025-0014', status: 'Anomalie', client: 'CargoGamma', plaque: '1122-EF-33', anomalies: true },
];

const statusColors = {
  'En attente': '#fbbf24',
  'Validé': '#22c55e',
  'Anomalie': '#ef4444',
};

function StatusIcon({ status }) {
  const color = statusColors[status] || '#64748b';
  return (
    <span style={{ display: 'inline-block', width: 14, height: 14, borderRadius: '50%', background: color, marginRight: 8, verticalAlign: 'middle' }}></span>
  );
}

const GardiennageInterface = () => {
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [ficheView, setFicheView] = useState(false);
  const [rejectionComment, setRejectionComment] = useState('');
  const [weighing, setWeighing] = useState({ empty: '', loaded: '', net: '', valid: null });
  const [validationResult, setValidationResult] = useState(null);

  // Dashboard: List of trucks
  const handleSelectTruck = (truck) => {
    setSelectedTruck(truck);
    setFicheView(true);
    setRejectionComment('');
    setWeighing({ empty: '', loaded: '', net: '', valid: null });
    setValidationResult(null);
  };

  // Fiche Client: Accept/Reject
  const handleAcceptTruck = () => {
    setFicheView(false);
    setSelectedTruck(null);
    // Here you would update the truck status in a real app
  };
  const handleRejectTruck = () => {
    if (!rejectionComment.trim()) return;
    setFicheView(false);
    setSelectedTruck(null);
    // Here you would send the rejection and comment in a real app
  };

  // Weighing Form
  const handleWeighingChange = (field, value) => {
    const newWeighing = { ...weighing, [field]: value };
    if (newWeighing.empty && newWeighing.loaded) {
      const net = parseFloat(newWeighing.loaded) - parseFloat(newWeighing.empty);
      newWeighing.net = isNaN(net) ? '' : net;
      newWeighing.valid = net > 0 && net < 40000; // Example validation
    } else {
      newWeighing.net = '';
      newWeighing.valid = null;
    }
    setWeighing(newWeighing);
  };

  // Validation Section
  const handleApproveLoading = () => {
    setValidationResult('approved');
    // In a real app, update status
  };
  const handleRejectLoading = () => {
    setValidationResult('reclamation');
    // In a real app, send reclamation
  };

  return (
    <div className="gardiennage-root">
      <div className="interface-container">
        <h1 className="gardiennage-title">Dashboard Gardiennage</h1>
        {!ficheView ? (
          <div>
            <h2 style={{ fontSize: 22, marginBottom: 16 }}>Liste des camions</h2>
            <table className="gardiennage-table">
              <thead>
                <tr style={{ background: '#e0e7ef' }}>
                  <th style={{ padding: 10, textAlign: 'left', borderRadius: 6 }}>Bon de Chargement</th>
                  <th style={{ padding: 10, textAlign: 'left' }}>Client</th>
                  <th style={{ padding: 10, textAlign: 'left' }}>Plaque</th>
                  <th style={{ padding: 10, textAlign: 'left' }}>Statut</th>
                  <th style={{ padding: 10, textAlign: 'left' }}></th>
                </tr>
              </thead>
              <tbody>
                {trucksData.map(truck => (
                  <tr key={truck.id} className={selectedTruck && selectedTruck.id === truck.id ? 'selected' : ''}>
                    <td>{truck.bon}</td>
                    <td>{truck.client}</td>
                    <td>{truck.plaque}</td>
                    <td><StatusIcon status={truck.status} />{truck.status}</td>
                    <td>
                      <button className="feature-btn" onClick={() => handleSelectTruck(truck)}>
                        Voir fiche
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {/* Fiche Client View */}
            <div className="fiche-section">
              <h2>Fiche Camion</h2>
              <div style={{ marginBottom: 10 }}><b>Bon:</b> {selectedTruck.bon}</div>
              <div style={{ marginBottom: 10 }}><b>Client:</b> {selectedTruck.client}</div>
              <div style={{ marginBottom: 10 }}><b>Plaque:</b> {selectedTruck.plaque}</div>
              <div style={{ marginBottom: 10 }}><b>Anomalies:</b> {selectedTruck.anomalies ? <span style={{ color: '#ef4444' }}>Oui</span> : <span style={{ color: '#22c55e' }}>Non</span>}</div>
              <div style={{ margin: '16px 0' }}>
                <button className="feature-btn" style={{ background: '#22c55e', color: 'white', marginRight: 8, border: 'none', borderRadius: 6, padding: '6px 16px', cursor: 'pointer' }} onClick={handleAcceptTruck}>
                  Accepter
                </button>
                <button className="feature-btn" style={{ background: '#ef4444', color: 'white', border: 'none', borderRadius: 6, padding: '6px 16px', cursor: 'pointer' }} onClick={handleRejectTruck}>
                  Rejeter
                </button>
              </div>
              <textarea
                placeholder="Commentaire de rejet (obligatoire pour rejeter)"
                value={rejectionComment}
                onChange={e => setRejectionComment(e.target.value)}
              />
            </div>

            {/* Weighing Form */}
            <div className="weighing-section">
              <h2>Pesée</h2>
              <div>
                <label>Poids à vide (kg):</label>
                <input type="number" value={weighing.empty} onChange={e => handleWeighingChange('empty', e.target.value)} />
              </div>
              <div>
                <label>Poids chargé (kg):</label>
                <input type="number" value={weighing.loaded} onChange={e => handleWeighingChange('loaded', e.target.value)} />
              </div>
              <div>
                <label>Poids net (kg):</label>
                <input type="text" value={weighing.net} readOnly />
              </div>
              {weighing.valid !== null && (
                <div style={{ color: weighing.valid ? '#22c55e' : '#ef4444', fontWeight: 500 }}>
                  {weighing.valid ? 'Poids valide' : 'Poids invalide'}
                </div>
              )}
            </div>

            {/* Validation Section */}
            <div className="validation-section">
              <h2>Validation</h2>
              <button className="feature-btn accept" onClick={handleApproveLoading}>
                Valider le chargement
              </button>
              <button className="feature-btn reject" onClick={handleRejectLoading}>
                Rejeter et envoyer réclamation
              </button>
              {validationResult === 'approved' && <div style={{ color: '#22c55e', marginTop: 12 }}>Chargement validé !</div>}
              {validationResult === 'reclamation' && <div style={{ color: '#ef4444', marginTop: 12 }}>Réclamation envoyée à l'Agent de Facturation.</div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GardiennageInterface;