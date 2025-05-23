import './App.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <div className="header-logo">
          {/* Placeholder SVG for logo */}
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="25" stroke="#E07BE0" strokeWidth="4" fill="none" />
            <circle cx="28" cy="28" r="18" stroke="#E07BE0" strokeWidth="3" fill="none" />
            <text x="50%" y="54%" textAnchor="middle" fill="#E07BE0" fontSize="22" fontWeight="bold" dy=".3em">B</text>
          </svg>
        </div>
      </div>
      <div className="header-right">
        <span className="header-icon info">
          {/* Modern info SVG */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E07BE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </span>
        <span className="header-icon bell">
          {/* Modern bell SVG */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E07BE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        </span>
        <div className="header-user">
          <img className="header-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
          <div className="header-user-info">
            <div>Hi, <span className="header-user-name">Muhammad Asad</span></div>
            <div className="header-user-welcome">welcome back!</div>
          </div>
        </div>
      </div>
    </header>
  );
} 