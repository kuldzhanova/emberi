import React, { useState, useEffect } from 'react';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Закрытие меню при изменении размера экрана, если оно открыто
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    return (
        <header className="main-header">
            <div className="container">
                <div className="logo">
                    <img src="../public/images/logo.PNG" alt="Emberi Logo" />
                    <h1>Emberi</h1>
                </div>
                <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#features" onClick={closeMenu}>О проекте</a></li>
                        <li><a href="#team" onClick={closeMenu}>Команда</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Контакты</a></li>
                    </ul>
                </nav>
                <button className="menu-toggle" aria-label="Toggle navigation" onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>
        </header>
    );
};

export default Header;