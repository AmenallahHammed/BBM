
import React, { useState } from 'react';
import NavBar from './NavBar';

function Notification() {
  // Example notifications with new types: refusé and modification
  const [notifications] = useState([
    {
      id: 1,
      type: 'modification',
      title: 'Modification',
      message: 'Demande de modification du client acceptée.',
      time: 'Il y a 2 min',
    },
    {
      id: 2,
      type: 'refuse',
      title: 'Refusé',
      message: 'Bon de chargement refusé pour Client Alpha.',
      time: 'Il y a 10 min',
    },
  ]);

  // Icon SVGs
  const icons = {
    refuse: (
      <span className="notification-icon" aria-label="Erreur" title="Erreur">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#e74c3c" opacity="0.12"/><path d="M15.535 8.465l-7.07 7.07m0-7.07l7.07 7.07" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
    ),
    modification: (
      <span className="notification-icon" aria-label="Modification" title="Modification">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#2980b9" opacity="0.12"/><path d="M7 17h10M12 7v6m0 0l-2-2m2 2l2-2" stroke="#2980b9" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
    ),
  };

  return (
    <>
      <NavBar />
      <div className="notification-list">
        <h3>Notifications</h3>
        {notifications.length === 0 ? (
          <div className="notification-empty">Aucune notification.</div>
        ) : (
          notifications.map((notif) => (
            <div key={notif.id} className={`notification-card ${notif.type}`} tabIndex={0}>
              {icons[notif.type]}
              <div className="notification-content">
                <div className="notification-title">{notif.title}</div>
                <div className="notification-message">{notif.message}</div>
                <div className="notification-time">{notif.time}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Notification;
