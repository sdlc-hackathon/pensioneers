// src/components/Rewards.js
import React from 'react';
import './Rewards.css'; // We'll create this CSS file next

const mockRewards = [
  { id: 1, title: 'Free Coffee', cost: 100 },
  { id: 2, title: 'Cinema Ticket', cost: 200 },
  { id: 3, title: 'Gift Card', cost: 500 },
  // Add more rewards as needed
];

const Rewards = () => {
  return (
    <div className="rewards-container">
      <h1>Rewards</h1>
      <ul className="rewards-list">
        {mockRewards.map((reward) => (
          <li key={reward.id} className="reward-item">
            <h2>{reward.title}</h2>
            <p>Cost: {reward.cost} Points</p>
            <button>Redeem</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rewards;
