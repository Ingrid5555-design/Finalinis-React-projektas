import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <div className='header'>
      <p className='logo'>Client management App</p>
      <div className='header-right'>
        <Link to='/'>
          <p
            className={`${activeTab === 'Home' ? 'active' : ''}`}
            onclick={() => setActiveTab('Home')}
          >
            Home
          </p>
        </Link>
        <Link to='/add'>
          <p
            className={`${activeTab === 'AddUser' ? 'active' : ''}`}
            onclick={() => setActiveTab('AddUser')}
          >
            Add user
          </p>
        </Link>
        <Link to='/users'>
          <p
            className={`${activeTab === 'Users' ? 'active' : ''}`}
            onclick={() => setActiveTab('Users')}
          >
            Users
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
