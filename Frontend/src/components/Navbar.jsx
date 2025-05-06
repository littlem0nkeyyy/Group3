import React from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UseAuthContext';
import '../assets/Styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='logo' />
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/product'><li>Products</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/about'><li>About</li></Link>

        {user ? (
          <div className="dropdown">
            <li>Profile</li>
            <div className="dropdown-content">
              <button onClick={() => navigate('/profile')}>View Profile</button>
              <button>Wallet</button>
              <button>Cart</button>
              <button onClick={handleLogout}>Sign Out</button>
            </div>
          </div>
        ) : (
          <Link to='/signin'><li>Sign In</li></Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
