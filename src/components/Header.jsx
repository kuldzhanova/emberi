import { useState } from 'react';
import logo from './images/logo.PNG';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="main-header">
            <div className="container">
                <a href="#top" className="logo">
                    <img src={logo} alt="Emberi logo" />
                    <h1>Emberi</h1>
                </a>

                {/* burger – виден только ≤ 768 px */}
                <button
                    className={`menu-toggle${open ? ' active' : ''}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Навигация"
                >
                    <span />
                </button>

                {/* навигация */}
                <nav className={`main-nav${open ? ' active' : ''}`}>
                    <ul onClick={() => setOpen(false)}>
                        <li><a href="#features">Особенности</a></li>
                        <li><a href="#screenshots">О приложении</a></li>
                        <li><a href="#team">Команда</a></li>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

