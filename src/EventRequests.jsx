import './App.css';
import { useNavigate } from 'react-router-dom';

const columns = [
  { label: 'Event Name', fixed: true },
  { label: 'Event Start' },
  { label: 'Event End' },
  { label: 'Client Name' },
  { label: 'Contact Info' },
  { label: 'Venue' },
  { label: 'City' },
  { label: 'State' },
  { label: 'Zip Code' },
];

const data = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  eventName: 'Filled Name',
  eventStart: 'Jan 12, 2024',
  eventEnd: 'Jan 14, 2024',
  clientName: 'Muhammad Asad',
  contact: '+1234 566 7890',
  venue: 'Lorem Ipsum Dolor Sit Amet',
  city: '-',
  state: '-',
  zip: '-',
}));

export default function EventRequests() {
  const navigate = useNavigate();
  return (
    <div className="event-requests-outer">
      <div className="event-requests-header-row">
        <h2 className="event-requests-title">Event Requests</h2>
        <div className="event-requests-searchbar-group">
          <div className="event-requests-searchbar">
            <span className="search-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e07be0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
            <input type="text" placeholder="Search here" />
          </div>
          <button className="event-requests-add-btn">+</button>
        </div>
      </div>
      <div className="event-requests-table-wrapper">
        <table className="event-requests-table">
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th key={col.label} className={col.fixed ? 'fixed-col' : ''}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td className="fixed-col">
                  <span className="eye-icon clickable" onClick={() => navigate(`/events/${row.id}`)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e07be0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2.05 12C3.84 7.61 7.92 4.5 12 4.5s8.16 3.11 9.95 7.5c-1.79 4.39-5.87 7.5-9.95 7.5s-8.16-3.11-9.95-7.5z"/></svg>
                  </span>
                  <span className="event-name-link clickable" onClick={() => navigate(`/events/${row.id}`)}>{row.eventName}</span>
                </td>
                <td>{row.eventStart}</td>
                <td>{row.eventEnd}</td>
                <td>{row.clientName}</td>
                <td>{row.contact}</td>
                <td>{row.venue}</td>
                <td>{row.city}</td>
                <td>{row.state}</td>
                <td>{row.zip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="event-requests-pagination">
        <button>{'<'}</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="active">4</button>
        <button>{'>'}</button>
      </div>
    </div>
  );
} 