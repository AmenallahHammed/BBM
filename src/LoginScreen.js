import React, { useState } from 'react';
import './LoginScreen.css';

const LoginScreen = ({ onLogin }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const userCodes = {
    'FACT001': { role: 'facturation', name: 'Agent de Facturation' },
    'GARD001': { role: 'gardiennage', name: 'Agent de Gardiennage' },
    'LIVR001': { role: 'livraison', name: 'Agent de Livraison' }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (userCodes[code]) {
      onLogin({
        code,
        role: userCodes[code].role,
        name: userCodes[code].name
      });
      setError('');
    } else {
      setError('Code incorrect. Veuillez réessayer.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Connexion</h1>
        <p>Entrez votre code d'accès</p>
        
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Code d'accès"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            className="login-input"
          />
          <button type="submit" className="login-btn">
            Se connecter
          </button>
        </form>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="login-help">
          <h3>Codes d'accès:</h3>
          <ul>
            <li><strong>FACT001</strong> - Agent de Facturation</li>
            <li><strong>GARD001</strong> - Agent de Gardiennage</li>
            <li><strong>LIVR001</strong> - Agent de Livraison</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;