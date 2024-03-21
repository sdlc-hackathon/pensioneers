import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; 
// src/components/Dashboard.js
import { Link } from 'react-router-dom';

// Your other imports...

const Dashboard = ({ user }) => {
  // Example chart data
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Total Savings',
        data: [500, 600, 800, 900, 1200], // Example data
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Welcome, {user.username}!</h1>

      <div className="chart-container">
        <Line data={chartData} />  
      </div>

      <ul className="dashboard-links">
        <li><Link to="/savings-goals" className="dashboard-link">View Savings Goals</Link></li>
        <li><Link to="/sub-quests" className="dashboard-link">Sub-Quests</Link></li>
        <li><Link to="/leaderboards" className="dashboard-link">Leaderboards</Link></li>
        <li><Link to="/rewards" className="dashboard-link">Rewards Store</Link></li>
        <li><Link to="/profile" className="dashboard-link">Profile & Settings</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
