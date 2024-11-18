import React, { useState } from 'react';
import { MdOutlineNotifications } from 'react-icons/md'; 
import { FaSearch, FaDollarSign } from 'react-icons/fa'; 
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineDollarCircle, AiOutlineClockCircle } from 'react-icons/ai'; 
import './Header.css';
import UserImage from '../assets/pexels-jay-ybarra-1587808679-27383289.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const cards = [
    { title: "Monthly Sales", value: "$1,234.00 ", trend: 12, icon: <GiShoppingCart style={{ color: '#f6a723', fontSize: '1.5rem' }} /> },
    { title: "Total Revenue", value: "$10,566.01 ", trend: 35, icon: <FaDollarSign style={{ color: '#2563eb', fontSize: '1.5rem' }} /> },
    { title: "Returns", value: "$958.00 ", trend: -5, icon: <AiOutlineClockCircle style={{ color: '#ed4f9d', fontSize: '1.5rem' }} /> },
    { title: "Ad Spend", value: "$5,566.01 ", trend: 15, icon: <AiOutlineDollarCircle style={{ color: '#38bdf8', fontSize: '1.5rem' }} /> },
  ];

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="header d-flex flex-column w-100">
      <div className="d-flex justify-content-between align-items-center p-2 bg-light">
        <div className="header-left">
          <h2 className="header-title">Overview</h2>
          <p className="header-subtitle">Detailed information about your store</p>
        </div>
        <div className="header-right d-flex align-items-center">
          <form className="search-form d-flex">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search anything..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          <div className="notification-bell mx-3">
            <MdOutlineNotifications size={24} />
          </div>
          <div className="user-menu dropdown">
            <img 
              src={UserImage} 
              alt="User Avatar" 
              className="user-avatar rounded-circle dropdown-toggle" 
              data-bs-toggle="dropdown" 
              aria-expanded="false" 
              style={{ width: '35px', height: '35px'}}
            />
            <div className="dropdown-menu dropdown-menu-end">
              <p className="dropdown-item">Profile</p>
              <p className="dropdown-item">Settings</p>
              <p className="dropdown-item">Log Out</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-summary d-flex justify-content-around align-items-center bg-light" style={{ maxHeight: '112px', height: '100%', padding: '0rem' }}>
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <DashboardCard 
              key={index} 
              title={card.title} 
              value={card.value} 
              trend={card.trend} 
              icon={card.icon}
            />
          ))
        ) : (
          <p>No results found for "{searchQuery}"</p>
        )}
      </div>
    </header>
  );
};

const DashboardCard = ({ title, value, trend, icon }) => {
  const trendSymbol = trend > 0 ? '+' : '-';
  const trendColor = trend > 0 ? '#3fd777' : '#ff69b4';

  return (
    <div className="card text-center" style={{ width: 'calc(100% / 4)', padding: '0rem', height: '50px', border: 'none' }}>
  <div className="d-flex justify-content-center align-items-center pr-3">
    {icon} 
    <h6 className="card-title ms-2 mb-1 text-muted"> {title}</h6> 
  </div>
  <p className="card-value " style={{ fontSize: '1.2rem', fontWeight: 'bold', marginRight: '-50px'}}>
    {value}
    <span
      className="font-weight-bold"
      style={{
        fontSize: '0.8rem',
        color: trendColor,
      }}
    >
      {trendSymbol} {Math.abs(trend)}%
    </span>
  </p>
</div>
  );
};

export default Header;