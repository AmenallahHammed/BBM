import React, { useState } from 'react';
import './FacturesPage.css';
import NavBar from './NavBar';

// Dummy client data for simulation
const dummyClients = [
  { cin: 'A123456', name: 'Client Alpha' },
  { cin: 'B654321', name: 'Client Beta' },
  { cin: 'C789012', name: 'Client Gamma' },
];

function FacturesPage() {
  const [cin, setCin] = useState('');
  const [client, setClient] = useState(null);
  const [error, setError] = useState('');
  const [step, setStep] = useState('search');

  const handleCinChange = (e) => {
    setCin(e.target.value);
    setError('');
    setClient(null);
    setStep('search');
  };

  const handleCinSubmit = (e) => {
    e.preventDefault();
    const found = dummyClients.find(c => c.cin.toLowerCase() === cin.trim().toLowerCase());
    if (found) {
      setClient(found);
      setStep('found');
      setError('');
    } else {
      setClient(null);
      setStep('notfound');
      setError('Aucun client trouvé avec ce CIN.');
    }
  };

  const handleBonDeChargement = () => {
    alert('Bon de chargement lancé pour ' + client.name + ' (' + client.cin + ')');
  };

  return (
    <>
      <NavBar />
      <div className="factures-page">
        <div className="factures-title">Bon de chargement</div>
        <form className="cin-form" onSubmit={handleCinSubmit}>
          <label htmlFor="cin">CIN du client</label>
          <input
            type="text"
            id="cin"
            name="cin"
            value={cin}
            onChange={handleCinChange}
            placeholder="Entrer le CIN du client"
            required
          />
          <button type="submit">Vérifier</button>
        </form>
        {step === 'found' && client && (
          <div className="client-found">
            <div className="client-info">Client trouvé : <strong>{client.name}</strong> ({client.cin})</div>
            <button className="bon-btn" onClick={handleBonDeChargement}>Lancer bon de chargement</button>
          </div>
        )}
        {step === 'notfound' && (
          <div className="client-error">
            {error} <br />
            <span className="create-client-prompt">Voulez-vous créer un nouveau client ?</span>
          </div>
        )}
      </div>
    </>
  );
}

export default FacturesPage;
