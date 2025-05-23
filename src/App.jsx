import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import EventRequests from './EventRequests';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventDetails from './EventDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="app-bg">
        <Header />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<EventRequests />} />
            <Route path="/events" element={<EventRequests />} />
            <Route path="/events/:id" element={<EventDetails />} />
          </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
