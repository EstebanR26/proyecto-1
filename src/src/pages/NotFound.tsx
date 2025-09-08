import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '8rem', marginBottom: '1rem' }}>
        
      </div>
      <h1 style={{ 
        fontSize: '3rem', 
        color: '#e74c3c', 
        marginBottom: '1rem',
        fontWeight: 'bold'
      }}>
        404
      </h1>
      <h2 style={{ 
        marginBottom: '1rem',
        color: '#2c3e50'
      }}>
        Página no encontrada
      </h2>
      <p style={{ 
        marginBottom: '2rem', 
        color: '#666',
        fontSize: '1.1rem'
      }}>
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link 
        to="/"
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '1rem 2rem',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: '500',
          fontSize: '1.1rem',
          transition: 'background-color 0.3s ease'
        }}
      >
         Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
