import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { HomePage } from './pages/HomePage';
import { AssemblyPage } from './pages/AssemblyPage';
import { DisassemblyPage } from './pages/DisassemblyPage';
import { WindingPage } from './pages/WindingPage';
import { TurningPage } from './pages/TurningPage';
import { OtherPage } from './pages/OtherPage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div className="pb-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assembly" element={<AssemblyPage />} />
          <Route path="/disassembly" element={<DisassemblyPage />} />
          <Route path="/winding" element={<WindingPage />} />
          <Route path="/turning" element={<TurningPage />} />
          <Route path="/other" element={<OtherPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
      <Navigation />
    </Router>
  );
}

export default App;
