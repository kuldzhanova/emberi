import React, { useRef, useEffect } from 'react';
import '../App.css';

const Team = () => {
    const memberCardRefs = useRef([]);
    const partnerLogoRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        memberCardRefs.current.forEach(item => {
            if (item) observer.observe(item);
        });
        partnerLogoRefs.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => {
            memberCardRefs.current.forEach(item => { if (item) observer.unobserve(item); });
            partnerLogoRefs.current.forEach(item => { if (item) observer.unobserve(item); });
        };
    }, []);

    return (
        <section id="team" className="team-section">
            <div className="container">
                <h2>Наша команда</h2>
                <div className="team-members fade-up">
                    <div className="member-card" ref={el => memberCardRefs.current[0] = el}>
                        <img src="https://via.placeholder.com/150/8BA2FF/FFFFFF?text=Team+Member+1" alt="Фото члена команды" />
                        <h3>Имя Фамилия 1</h3>
                        <p>Основатель, CEO</p>
                    </div>
                    <div className="member-card" ref={el => memberCardRefs.current[1] = el}>
                        <img src="https://via.placeholder.com/150/AB9DFF/FFFFFF?text=Team+Member+2" alt="Фото члена команды" />
                        <h3>Имя Фамилия 2</h3>
                        <p>Ведущий разработчик</p>
                    </div>
                    {/* Добавьте больше членов команды по мере необходимости */}
                </div>
                <div className="partners-logo">
                    <h3>Наши партнёры</h3>
                    <div className="partner-placeholder">
                        <img src="https://via.placeholder.com/120x60/C0E0FF/253A82?text=Partner+Logo+1" alt="Логотип партнёра 1" ref={el => partnerLogoRefs.current[0] = el} />
                        <img src="https://via.placeholder.com/120x60/E3FCB7/253A82?text=Partner+Logo+2" alt="Логотип партнёра 2" ref={el => partnerLogoRefs.current[1] = el} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;