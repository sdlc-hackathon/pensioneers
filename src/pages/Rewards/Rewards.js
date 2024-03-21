import React, { useState } from 'react';
import './Rewards.css';
import { useNavigate } from 'react-router-dom';

const mockRewards = [
  { id: 1, title: 'Free Coffee', cost: 100, image: 'https://kopintableware.com/wp-content/uploads/2019/08/How-A-Ceramic-Mug-Makes-Your-Coffee-Taste-Better-Kopin-Tableware-Indonesiaa.jpg' },
  { id: 2, title: 'Cinema Ticket', cost: 200, image: 'https://www.candis.co.uk/wp-content/uploads/2013/08/cinema-ticket.jpg'},
  { id: 3, title: 'ASOS Discount Code', cost: 300, image: 'https://i.etsystatic.com/10158652/r/il/e9267d/1320400492/il_794xN.1320400492_d0mh.jpg' },
  // Add more rewards as needed
];

const Rewards = () => {
  const navigate = useNavigate
  const [points, setPoints] = useState(900);

  const handlePointsChange = (event) => {
    setPoints(event.target.value);
  };

  const canRedeemReward = (reward) => {
    return points >= reward.cost;
  };

  const redeemReward = (reward) => {
    setPoints(points - reward.cost);
  };

  const handleReturnToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="rewards-container">
      <h1>Rewards</h1>
      <div className="points-box">
        <h2>Points: {points}</h2>
        
      </div>
      <br />
      <ul className="rewards-list">
        {mockRewards.map((reward) => (
          <li key={reward.id} className="reward-item">
            <h2>{reward.title}</h2>
            <p>Cost: {reward.cost} Points</p>
            <img src={reward.image} alt={reward.title} />
            {canRedeemReward(reward) ? (
              <button type="button" onClick={() => redeemReward(reward)}>
                Redeem
              </button>
            ) : (
              <button type="button" disabled>
                Redeem
              </button>
            )}
          </li>
        ))}
      </ul>
      <button type="button" className="home-button" onClick={() => handleReturnToDashboard()}>
        Home
      </button>
      <button type="button" className="points-button">
        Earn more points
      </button>
    </div>
  );
};

export default Rewards;
