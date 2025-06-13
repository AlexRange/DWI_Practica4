import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {}
            <header style={{ 
                padding: '15px 20px', 
                backgroundColor: '#1a2a6c', 
                color: '#fff', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                        fontSize: '24px', 
                        fontWeight: 'bold', 
                        marginRight: '20px',
                        color: '#f9a826' 
                    }}>
                        EliteBasket
                    </span>
                </div>
                <nav style={{ display: 'flex', gap: '20px' }}>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600' }}>Inicio</Link>
                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>Acerca de</Link>
                </nav>
            </header>

            {/* Contenido principal */}
            <main style={{ padding: '30px', flex: '1', backgroundColor: '#f8f9fa' }}>
                <Outlet />
            </main>

            {/* Footer */}
            <footer style={{ 
                padding: '20px', 
                backgroundColor: '#1a2a6c', 
                color: '#fff', 
                textAlign: 'center',
                borderTop: '2px solid #f9a826'
            }}>
                <div style={{ marginBottom: '10px' }}>
                    <a href="https://facebook.com" style={{ margin: '0 10px' }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" width="30" />
                    </a>
                    <a href="https://instagram.com" style={{ margin: '0 10px' }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="30" />
                    </a>
                    <a href="https://twitter.com" style={{ margin: '0 10px' }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="30" />
                    </a>
                </div>
                <p style={{ margin: '0', fontSize: '14px' }}>
                    © 2025 <strong>EliteBasket</strong> - Todos los derechos reservados | Creado por <strong>Alejandro Rangel</strong>
                </p>
            </footer>
        </div>
    );
};

export default Layout;