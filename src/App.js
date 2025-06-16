import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

function Home() {
    return (
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <h1 style={{ color: '#1a2a6c', fontSize: '2.5rem', marginBottom: '20px' }}>
                ¡Bienvenidos a <span style={{ color: '#f9a826' }}>EliteBasket</span>!
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 30px', lineHeight: '1.6' }}>
                La academia líder en entrenamiento de basketball para jugadores de todos los niveles. 
                Ofrecemos programas personalizados, clínicas con profesionales y competencias de alto rendimiento.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <button style={{
                    padding: '12px 25px',
                    backgroundColor: '#f9a826',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    Ver Entrenamientos
                </button>
                <button style={{
                    padding: '12px 25px',
                    backgroundColor: '#1a2a6c',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    Contactar
                </button>
            </div>
            <img 
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Equipo de basketball" 
                style={{ 
                    width: '100%', 
                    maxWidth: '800px', 
                    borderRadius: '10px', 
                    marginTop: '40px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }} 
            />
        </div>
    );
}

function About() {
    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
            <h1 style={{ color: '#1a2a6c', borderBottom: '2px solid #f9a826', paddingBottom: '10px' }}>
                Nuestra Historia
            </h1>
            <div style={{ display: 'flex', gap: '30px', margin: '40px 0', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h2 style={{ color: '#1a2a6c' }}>¿Quiénes Somos?</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                        Fundada en 2020, <strong>EliteBasket</strong> nació de la pasión por desarrollar el potencial de jóvenes talentos. 
                        Hoy somos reconocidos como la academia más innovadora en formación deportiva, con más de 
                        50 jugadores reclutados por ligas profesionales.
                    </p>
                </div>
                <img 
                    src="https://concepto.de/wp-content/uploads/2014/10/baloncesto-1-e1551134233923.jpg" 
                    alt="Entrenamiento" 
                    style={{ 
                        flex: '1', 
                        minWidth: '300px', 
                        maxWidth: '450px', 
                        borderRadius: '10px', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                    }} 
                />
            </div>
            <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '10px', marginTop: '40px' }}>
                <h2 style={{ color: '#1a2a6c', marginTop: '0' }}>Nuestro Equipo</h2>
                <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                    Contamos con <strong>entrenadores certificados</strong> por la FIBA y exjugadores profesionales 
                    que brindan mentoría personalizada. Nos enfocamos en:
                </p>
                <ul style={{ paddingLeft: '20px', fontSize: '1.1rem' }}>
                    <li>Técnica individual avanzada</li>
                    <li>Preparación física especializada</li>
                    <li>Desarrollo de inteligencia deportiva</li>
                </ul>
            </div>
        </div>
    );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;