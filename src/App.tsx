import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Componentes inline para evitar problemas de importación
const NavBar: React.FC = () => (
  <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
    <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
    <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
    <Link to="/contact" style={{ marginRight: '1rem' }}>Contact</Link>
  </nav>
);

const Home: React.FC = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Home Page</h1>
    <p>Esta es la página de inicio.</p>
  </div>
);

const About: React.FC = () => (
  <div style={{ padding: '2rem' }}>
    <h1>About Page</h1>
    <p>Esta es la página sobre nosotros.</p>
  </div>
);

const Contact: React.FC = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Contact Page</h1>
    <p>Esta es la página de contacto.</p>
  </div>
);

const NotFound: React.FC = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>404 - Page Not Found</h1>
    <Link to="/">Volver al inicio</Link>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

