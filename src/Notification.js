import React, { useState } from 'react';
import NavBar from './NavBar';
import './Notification.css';

function Notification() {
  // Example notifications with new types: refusé and modification
  const [notifications] = useState([
    {
      id: 1,
      type: 'modification',
      agent: 'Sami Benali',
      role: 'Agent de livraison',
      orderId: 'BC-2025-0012',
      time: 'Il y a 2 min',
      details: "Changement de l'heure de chargement demandé : 14h00 → 16h00. Merci de valider.",
    },
    {
      id: 2,
      type: 'refuse',
      agent: 'Nadia El Fassi',
      role: 'Agent de gardiennage',
      orderId: 'BC-2025-0007',
      time: 'Il y a 10 min',
      details: 'Motif : Camion non conforme à la réglementation. Veuillez reprogrammer.',
    },
  ]);

  // Icon SVGs
  const icons = {
    refuse: (
      <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>
    ),
    modification: (
      <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
      </svg>
    ),
  };

  // Helper for agent initials
  const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);

  return (
    <>
      <NavBar />
      <div className="notifications-container">
        <h2 className="notifications-title">Notifications</h2>
        {notifications.length === 0 ? (
          <div className="notifications-empty">Aucune notification.</div>
        ) : (
          notifications.map((notif) => (
            <div key={notif.id} className={`notification-card ${notif.type}`}>
              <div className="notification-header">
                <div className="notification-type">
                  {icons[notif.type]}
                  <span className="type-badge">
                    {notif.type === 'refuse' ? 'Refus' : 'Modification'}
                  </span>
                </div>
                <span className="timestamp">{notif.time}</span>
              </div>
              
              <div className="agent-info">
                <div className="agent-avatar">{getInitials(notif.agent)}</div>
                <div className="agent-details">
                  <h4>{notif.agent}</h4>
                  <div className="agent-role">{notif.role}</div>
                </div>
              </div>
              
              <div className="order-info">
                <div className="order-id">Bon: {notif.orderId}</div>
              </div>
              
              <div className="message">{notif.details}</div>
              
              <div className="actions">
                {notif.type === 'modification' ? (
                  <>
                    <button className="btn btn-secondary">Refuser</button>
                    <button className="btn btn-primary">Approuver</button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-secondary">Voir détails</button>
                    <button className="btn btn-primary">Reprogrammer</button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Notification;