import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import UploadAudio from './components/UploadAudio';
import FeedbackSessions from './components/FeedbackSessions';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Peter Jones', email: 'peter@example.com' }
  ]);

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LandingPage setCurrentPage={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} />;
      case 'users':
        return <UserManagement setCurrentPage={setCurrentPage} users={users} />;
      case 'upload':
        return <UploadAudio setCurrentPage={setCurrentPage} users={users} />;
      case 'feedback':
        return <FeedbackSessions setCurrentPage={setCurrentPage} />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;