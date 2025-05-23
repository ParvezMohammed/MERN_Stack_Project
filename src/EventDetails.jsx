import React from 'react';
import './App.css';

const meetingRooms = [
  { name: 'Meeting Room 1', positions: 12, active: true },
  { name: 'Meeting Room 2', positions: 12 },
  { name: 'Meeting Room 3', positions: 12 },
  { name: 'Meeting Room 4', positions: 12 },
  { name: 'Meeting Room 5', positions: 12 },
];

const positions = Array.from({ length: 7 }, (_, i) => ({
  position: 'Camera 1 (Video)',
  time: '9 am - 7 pm',
  info: 'LP default',
  quantity: 20,
}));

export default function EventDetails() {
  return (
    <div className="event-details-outer">
      {/* Header Row */}
      <div className="event-details-header-row">
        <button className="event-details-back-btn">
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 24l-8-8 8-8"/></svg>
        </button>
        <span className="event-details-main-title">
          Event Name <span className="event-details-venue-details">(Venue Details)</span>
        </span>
      </div>
      {/* Tabs */}
      <div className="event-details-tabs">
        <button className="active">Event Details</button>
        <button>Assign Coordinator/Coordinator</button>
        <button>Session Management</button>
        <button>Generate SOW</button>
      </div>
      <div className="event-details-main-content-row">
        {/* Left: Assign Coordinator/Contractor */}
        <div className="event-details-left-col">
          <div className="event-details-section-label">Assign Coordinator</div>
          <div className="event-details-search-dropdown">
            <input type="text" placeholder="Search Coordinator" />
            <span className="event-details-dropdown-arrow">▼</span>
          </div>
          <div className="event-details-add-link">Add New Coordinator</div>
          <div className="event-details-section-label" style={{ marginTop: 32 }}>Assign Contractor</div>
          <div className="event-details-meeting-rooms-list">
            {meetingRooms.map((room, idx) => (
              <div key={room.name} className={`event-details-meeting-room${room.active ? ' active' : ''}`}>
                <span className="event-details-meeting-room-title">{room.name}</span>
                <span className="event-details-meeting-room-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e07be0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.5 21 12 17.8 5.5 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>
                  {room.positions} Positions
                </span>
                <div className="event-details-meeting-room-dates">Start from 12 Jan, 2023 – Ends at 15 Jan, 2023</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Event Info and Positions Table */}
        <div className="event-details-right-col">
          <div className="event-details-info-grid">
            <div className="event-details-info-title">Event Name <span className="event-details-venue-details">(Venue Here)</span></div>
            <div className="event-details-info-row">
              <div className="event-details-info-field">
                <input type="text" value="Starts: 12-12-2023" readOnly placeholder="Start" />
              </div>
              <div className="event-details-info-field">
                <input type="text" value="Ends: 15-12-2023" readOnly placeholder="Ends" />
              </div>
            </div>
            <div className="event-details-info-row">
              <div className="event-details-info-field" style={{ flex: 1 }}>
                <input type="text" value="Venue Address: Some Location 12, Name Here, City, State." readOnly />
              </div>
            </div>
          </div>
          <div className="event-details-positions-table-wrapper">
            <div className="event-details-positions-title">Positions</div>
            <table className="event-details-positions-table">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Time</th>
                  <th>Info</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {positions.map((pos, idx) => (
                  <tr key={idx}>
                    <td>{pos.position}</td>
                    <td>{pos.time}</td>
                    <td><b>LP default</b></td>
                    <td>20</td>
                    <td>
                      <select className="event-details-contractor-select">
                        <option>Select Contractor</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="event-details-pagination-row">
              <button className="event-details-pagination-btn">&lt;</button>
              <span className="event-details-pagination-dot active"></span>
              <button className="event-details-pagination-btn">&gt;</button>
            </div>
          </div>
        </div>
      </div>
      {/* Save Edits Button */}
      <div className="event-details-save-btn-row">
        <button className="event-details-save-btn">Save Edits</button>
      </div>
    </div>
  );
} 