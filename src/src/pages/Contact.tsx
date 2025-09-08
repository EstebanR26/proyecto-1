import React from 'react';

const Contact: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contacto</h1>
      <p>Ponte en contacto con nosotros aquí.</p>
      
      <div style={{ 
        display: 'grid', 
        gap: '2rem', 
        marginTop: '2rem',
        maxWidth: '600px'
      }}>
        <div>
          <h3>Información de Contacto</h3>
          <p><strong>Email:</strong> contacto@ejemplo.com</p>
          <p><strong>Teléfono:</strong> +57 (123) 456-7890</p>
          <p><strong>Dirección:</strong> Pasto, Nariño, Colombia</p>
        </div>

        <div>
          <h3>Formulario de Contacto</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="Tu nombre"
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <input 
              type="email" 
              placeholder="Tu email"
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <textarea 
              placeholder="Tu mensaje"
              rows={4}
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <button 
              type="submit"
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '0.75rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;