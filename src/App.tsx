import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import SwipePage from './pages/SwipePage';
import ChatbotPage from './pages/ChatbotPage';
import ResultsPage from './pages/ResultsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pb-16">
          <Routes>
            <Route path="/" element={<SwipePage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;