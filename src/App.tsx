import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/DashBoard';
import RunDetailsPage from './components/RunDetailsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/runs/:id" element={<RunDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;