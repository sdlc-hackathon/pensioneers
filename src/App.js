import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login';

function App() {
  const authUser = { username: 'User123', isAuthenticated: true };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard user={authUser} />} />
        {/* <Route path="/savings-goals" element={<SavingsGoals />} />
        <Route path="/sub-quests" element={<SubQuests />} />
        <Route path="/leaderboards" element={<SocialLeaderboards />} />
        <Route path="/rewards" element={<RewardsStore />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/notifications" element={<Notifications />} /> */}
        // Add additional routes here as needed
      </Routes>
    </Router>
  );
}

export default App;