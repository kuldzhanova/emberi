import React, { useState, useEffect } from 'react';
import '../App.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu  = () => setIsMenuOpen(false);

    // закрываем меню, если ширина > 768 px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) closeMenu();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    return (
        <header className="main-header">
            <div className="container">
                {/* логотип */}
                <div className="logo">
                    <img src="/images/logo.PNG" alt="Emberi Logo" />
                    <h1>Emberi</h1>
                </div>

                {/* навигация */}
                <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#features" onClick={closeMenu}>О проекте</a></li>
                        <li><a href="#team"     onClick={closeMenu}>Команда</a></li>
                        <li><a href="#contact"  onClick={closeMenu}>Контакты</a></li>
                    </ul>
                </nav>

                <button
                    className="menu-btn"
                    aria-label="Открыть меню"
                    onClick={toggleMenu}               /* было строкой — сделал функцией */
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                        preserveAspectRatio="xMidYMid meet" /* фиксируем ориентацию */
                        stroke="currentColor"
                        strokeWidth="2"                    /* camelCase в JSX */
                        strokeLinecap="round"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path d="M3 6h18M3 12h18M3 18h18" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
