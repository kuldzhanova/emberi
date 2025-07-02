import React, { useState, useRef, useEffect } from 'react';
import '../App.css'; // Или '../index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Features = ({ openModal }) => {
    // Состояние для активного элемента аккордеона
    const [activeIndex, setActiveIndex] = useState(null); // null означает, что ничего не открыто

    // Данные для фич
    const features = [
        {
            iconClass: "fas fa-chart-line",
            bgColor: "var(--color-soft-blue)",
            title: "Трекинг эмоций",
            description: "Отслеживайте ваше эмоциональное состояние, визуализируйте изменения и понимайте себя глубже с помощью интуитивных графиков и отчетов."
        },
        {
            iconClass: "fas fa-book-open",
            bgColor: "var(--color-soft-pink)",
            title: "Личный дневник",
            description: "Ваше безопасное пространство для записи мыслей, чувств и переживаний. Просматривайте прошлые записи и замечайте свои изменения."
        },
        {
            iconClass: "fas fa-cat",
            bgColor: "var(--color-soft-violet)",
            title: "Тамагочи-медитации",
            description: "Ваш уникальный питомец-компаньон проведет вас через персонализированные медитации, помогая расслабиться и сосредоточиться."
        },
        {
            iconClass: "fas fa-brain",
            bgColor: "var(--color-deep-purple)",
            title: "AI-гештальт терапия",
            description: "Загружайте фото из переломных моментов, и наш AI сгенерирует видео с альтернативными исходами, помогая вам 'закрыть гештальт' и отпустить негатив."
        }
    ];

    // Функция для переключения аккордеона
    const handleAccordionToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Если кликнули по открытому, закрываем; иначе - открываем
    };

    // Для анимации появления элементов при скролле (теперь для элементов аккордеона)
    const accordionRefs = useRef([]);
    const galleryItemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('has-appeared')) {
                    entry.target.classList.add('is-visible');
                    entry.target.classList.add('has-appeared'); // Помечаем, что уже появился
                    observer.unobserve(entry.target); // Останавливаем наблюдение после первого появления
                }
            });
        }, { threshold: 0.1 }); // Порог видимости

        accordionRefs.current.forEach(item => {
            if (item) observer.observe(item);
        });
        galleryItemRefs.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => {
            accordionRefs.current.forEach(item => { if (item) observer.unobserve(item); });
            galleryItemRefs.current.forEach(item => { if (item) observer.unobserve(item); });
        };
    }, []);

    return (
        <>
            <section id="features" className="features-section">
                <div className="container">
                    <h2>Ключевые особенности Emberi</h2>
                    <div className="accordion-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`accordion-item animated-card`}
                                ref={el => accordionRefs.current[index] = el} // Привязываем ref для Intersection Observer
                                style={{
                                    backgroundColor: feature.bgColor,
                                    color: (index === 2 || index === 3) ? 'var(--color-text-light)' : 'var(--color-text-dark)'
                                }}
                            >
                                <button
                                    className="accordion-header"
                                    onClick={() => handleAccordionToggle(index)}
                                    aria-expanded={activeIndex === index}
                                >
                                    <div className="icon-wrapper" style={{ backgroundColor: (index === 2 || index === 3) ? 'rgba(255,255,255,0.2)' : 'var(--color-deep-purple)' }}> {/* Изменяем фон иконки в зависимости от фона карточки */}
                                        <i className={feature.iconClass}></i>
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <i className={`fas fa-chevron-down accordion-icon ${activeIndex === index ? 'open' : ''}`}></i>
                                </button>
                                <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Галерея скриншотов остается отдельной секцией */}
            <section id="screenshots" className="screenshots-gallery">
                <div className="container">
                    <h3>Посмотрите, как это выглядит!</h3>
                    <div className="gallery-placeholder">
                        <img
                            src="/images/screenshots/screenshot1.jpg"
                            data-full-src="/images/screenshots/screenshot1_large.jpg"
                            alt="UI Screenshot 1"
                            className="gallery-item"
                            onClick={(e) => openModal(e.target.dataset.fullSrc)}
                            ref={el => galleryItemRefs.current[0] = el}
                        />
                        <img
                            src="/images/screenshots/screenshot2.jpg"
                            data-full-src="/images/screenshots/screenshot2_large.jpg"
                            alt="UI Screenshot 2"
                            className="gallery-item"
                            onClick={(e) => openModal(e.target.dataset.fullSrc)}
                            ref={el => galleryItemRefs.current[1] = el}
                        />
                        <img
                            src="/images/screenshots/screenshot3.jpg"
                            data-full-src="/images/screenshots/screenshot3_large.jpg"
                            alt="UI Screenshot 3"
                            className="gallery-item"
                            onClick={(e) => openModal(e.target.dataset.fullSrc)}
                            ref={el => galleryItemRefs.current[2] = el}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;