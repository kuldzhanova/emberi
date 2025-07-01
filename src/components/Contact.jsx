import React from 'react';
import '../App.css'; // Или '../App.css'

const Contact = () => {
    // В реальном приложении здесь будет логика обработки формы (отправка на сервер)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Спасибо за подписку! Мы свяжемся с вами.'); // Заглушка
        // Здесь вы можете интегрировать Formspree, Netlify Forms или свой API
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Оставайтесь на связи с Emberi</h2>
                <div className="contact-content">
                    <p>Подпишитесь на нашу рассылку, чтобы первыми узнавать о новостях проекта и запуске приложения.</p>
                    <form className="subscribe-form" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Ваш email" required />
                        <button type="submit" className="button primary">Подписаться</button>
                    </form>
                    <p>Есть вопросы или предложения? Свяжитесь с нами напрямую:</p>
                    <a href="mailto:your.email@example.com" className="button secondary">Связаться с нами</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;