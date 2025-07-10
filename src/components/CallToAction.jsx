// components/CallToAction.jsx
import React from 'react';
import '../App.css';

export default function CallToAction({ onSubscribe }) {
    return (
        <section className="cta-bar fade-up">
            <div className="container">
                <h2 className="cta-title">Откройте свои эмоции уже сегодня</h2>
                <p className="cta-sub">
                    Скачайте Emberi и начните путь к эмоциональному благополучию!
                </p>

                <div className="cta-actions">
                    <a href="#" className="button secondary">Скачать</a>
                    <button className="button secondary" onClick={onSubscribe}>
                        Узнать больше
                    </button>
                </div>
            </div>
        </section>
    );
}
