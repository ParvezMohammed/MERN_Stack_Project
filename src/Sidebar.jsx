import './App.css';
import { useState } from 'react';

export default function Sidebar() {
  const [eventsOpen, setEventsOpen] = useState(true);
  const [usersOpen, setUsersOpen] = useState(true);
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="sidebar-section">
          <div className="sidebar-section-title" onClick={() => setEventsOpen(v => !v)}>
            Events <span className="sidebar-chevron">{eventsOpen ? '▾' : '▸'}</span>
          </div>
          {eventsOpen && (
            <ul className="sidebar-submenu">
              <li className="active">New Requests</li>
              <li>Estimate <span className="sidebar-badge">9</span></li>
              <li>Events</li>
              <li>Partial Requests</li>
            </ul>
          )}
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-title">Positions</div>
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-title">Contractors</div>
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-title" onClick={() => setUsersOpen(v => !v)}>
            Users <span className="sidebar-chevron">{usersOpen ? '▾' : '▸'}</span>
          </div>
          {usersOpen && (
            <ul className="sidebar-submenu">
              <li>Admins</li>
              <li>Clients</li>
              <li>Coordinators</li>
            </ul>
          )}
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-title">Profile</div>
        </div>
      </nav>
      <button className="sidebar-logout"><span className="sidebar-logout-icon">⎋</span> Logout</button>
    </aside>
  );
} 