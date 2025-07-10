// src/components/Footer.jsx
import '../App.css';

export default function Footer() {
    return (
        <footer className="site-footer fade-up">
            <div className="footer-inner container">

                {/* ===== Subscribe row ===== */}
                <div className="subscribe-row">
                    <div className="subscribe-text">
                        <h4>Подпишитесь на обновления</h4>
                        <p>Будьте в курсе новых функций и новостей.</p>
                    </div>

                    <form
                        className="subscribe-form"
                        onSubmit={e => { e.preventDefault(); /* TODO */ }}
                    >
                        <input
                            type="email"
                            placeholder="Ваш e-mail"
                            required
                        />
                        <button type="submit">Присоединиться</button>
                    </form>
                </div>

                {/* ===== Columns (4–5 списков) ===== */}
                <div className="links-grid">
                    <div>
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="#about">О нас</a></li>
                            <li><a href="#contact">Контакты</a></li>
                            <li><a href="#privacy" >Политика конфиденц.</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Follow Us</h5>
                        <ul>
                            <li><a href="#">Telegram</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter / X</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Resources</h5>
                        <ul>
                            <li><a href="#">Блог</a></li>
                            <li><a href="#">Кейсы</a></li>
                            <li><a href="#">Гайд по приложению</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Company</h5>
                        <ul>
                            <li><a href="#">Наша команда</a></li>
                            <li><a href="#">Вакансии</a></li>
                            <li><a href="#">Пресс-релизы</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Legal</h5>
                        <ul>
                            <li><a href="#">Файлы cookie</a></li>
                            <li><a href="#">Доступность</a></li>
                            <li><a href="#">Польз. соглашение</a></li>
                        </ul>
                    </div>
                </div>

                <p className="copyright">
                    © 2025 Emberi. Все права защищены.
                </p>
            </div>
        </footer>
    );
}
