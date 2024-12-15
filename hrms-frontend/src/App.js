import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy-load components for better performance
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Staff = React.lazy(() => import('./components/Staff'));
const Procurement = React.lazy(() => import('./components/Procurement'));
const ITDashboard = React.lazy(() => import('./components/ITDashboard'));
const Architecture = React.lazy(() => import('./components/Architecture'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const App = () => {
  return (
    <Router>
      {/* Suspense provides fallback UI while lazy-loaded components are being fetched */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Main Application Layout */}
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/procurement" element={<Procurement />} />
            <Route path="/it/*" element={<ITDashboard />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="*" element={<NotFound />} /> {/* 404 Page */}
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
