// src/components/ContactSection.jsx
import React, { useState } from 'react';
import Modal from './Modal';

export default function ContactSection() {
    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        /* TODO: отправить email */
        setOpen(false);
    };

    return (
        <>
            <section id="contact" className="contact-section">
                <div className="container fade-up">
                    <h2>Всегда на связи с Emberi</h2>
                    <p>Подпишитесь, чтобы узнать о запуске первым.</p>

                    <button className="button subscribe-btn" onClick={() => setOpen(true)}>
                        Подписаться
                    </button>
                </div>
            </section>

            {/* модал рендерится ТОЛЬКО когда open === true */}
            {open && (
                <Modal onClose={() => setOpen(false)}>
                    <form className="subscribe-modal" onSubmit={handleSubmit}>
                        <h3>Будьте в курсе!</h3>

                        <input type="email" required placeholder="Ваш e-mail" autoFocus />
                        <button type="submit" className="button primary send-btn">
                            Отправить
                        </button>
                    </form>
                </Modal>
            )}
        </>
    );
}
