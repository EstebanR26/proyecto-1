import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Página de Inicio</h1>
      <p>Bienvenido a la página principal de nuestra aplicación.</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>¿Qué puedes hacer aquí?</h2>
        <ul>
          <li>Navegar por diferentes secciones</li>
          <li>Conocer más sobre nosotros</li>
          <li>Ponerte en contacto</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;