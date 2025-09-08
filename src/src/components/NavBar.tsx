import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav style={{ 
      padding: '1rem', 
      borderBottom: '1px solid #ccc',
      backgroundColor: '#f8f9fa'
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '2rem', 
        margin: 0, 
        padding: 0,
        alignItems: 'center'
      }}>
        <li>
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              color: '#333',
              fontWeight: '500'
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about"
            style={{ 
              textDecoration: 'none', 
              color: '#333',
              fontWeight: '500'
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact"
            style={{ 
              textDecoration: 'none', 
              color: '#333',
              fontWeight: '500'
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

