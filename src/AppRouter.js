import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientForm from './ClientForm';
import FacturesPage from './FacturesPage';
import Notification from './Notification';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ClientForm />} />
          <Route path="/factures" element={<FacturesPage />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
