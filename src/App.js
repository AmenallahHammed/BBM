import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import Dashboard from './Dashbord';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="App">
      {!currentUser ? (
        <LoginScreen onLogin={setCurrentUser} />
      ) : (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;