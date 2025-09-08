import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Acerca de Nosotros</h1>
      <p>Esta es la página sobre nosotros.</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Nuestra Misión</h2>
        <p>
          Nos dedicamos a crear experiencias web increíbles usando las 
          mejores tecnologías disponibles.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Nuestro Equipo</h2>
        <p>
          Somos un equipo de desarrolladores apasionados por la tecnología 
          y el diseño.
        </p>
      </section>
    </div>
  );
};

export default About;