import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../App.css'; // Или '../App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Для иконок Font Awesome

// Компонент для отдельной карточки фичи
const FeatureCard = ({ iconClass, bgColor, title, description, isActive }) => {
    // isActive будет использоваться, если вы захотите анимировать карточки по очереди,
    // но для scroll-snap чаще используется IntersectionObserver для появления
    // или просто CSS transition при изменении свойств наведения/активности.
    // Для анимации появления при скролле IntersectionObserver остается в App.js/общих стилях.

    // Для анимации иконки (как раньше)
    const cardRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.5 } // 50% элемента должно быть видно
        );

        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);



    return (
        <div className="feature-card animated-card" ref={cardRef}>
            <div className="icon-wrapper" style={{ backgroundColor: bgColor }}>
                <i className={iconClass}></i>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};


// Основной компонент Features
const Features = ({ openModal }) => {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0); // Состояние для активной карточки
    const features = [ // Массив с данными для карточек
        {
            iconClass: "fas fa-chart-line",
            bgColor: "var(--color-saturated-blue)",
            title: "Трекинг эмоций",
            description: "Отслеживайте ваше эмоциональное состояние, визуализируйте изменения и понимайте себя глубже с помощью интуитивных графиков и отчетов."
        },
        {
            iconClass: "fas fa-book-open",
            bgColor: "var(--color-neon-green)",
            title: "Личный дневник",
            description: "Ваше безопасное пространство для записи мыслей, чувств и переживаний. Просматривайте прошлые записи и замечайте свои изменения."
        },
        {
            iconClass: "fas fa-cat",
            bgColor: "var(--color-bright-pink)",
            title: "Тамагочи-медитации",
            description: "Ваш уникальный питомец-компаньон проведет вас через персонализированные медитации, помогая расслабиться и сосредоточиться."
        },
        {
            iconClass: "fas fa-brain",
            bgColor: "var(--color-saturated-violet)",
            title: "AI-гештальт терапия",
            description: "Загружайте фото из переломных моментов, и наш AI сгенерирует видео с альтернативными исходами, помогая вам 'закрыть гештальт' и отпустить негатив."
        }
    ];

    // Функция для прокрутки к следующей/предыдущей карточке
    const scrollToCard = useCallback((index) => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.clientWidth; // Ширина видимой области
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
        }
    }, []);

    // Обработчик для кнопки "Вперед"
    const scrollNext = () => {
        const nextIndex = Math.min(activeIndex + 1, features.length - 1);
        scrollToCard(nextIndex);
        setActiveIndex(nextIndex);
    };

    // Обработчик для кнопки "Назад"
    const scrollPrev = () => {
        const prevIndex = Math.max(activeIndex - 1, 0);
        scrollToCard(prevIndex);
        setActiveIndex(prevIndex);
    };

    // Обновление activeIndex при прокрутке вручную (с помощью Intersection Observer)
    useEffect(() => {
        const observerOptions = {
            root: scrollContainerRef.current, // Наблюдатель будет смотреть внутри этого элемента
            rootMargin: '0px',
            threshold: 0.9 // Когда 90% элемента видно, он считается активным
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.dataset.index, 10);
                    setActiveIndex(index);
                }
            });
        }, observerOptions);

        // Наблюдаем за каждой карточкой
        const cards = scrollContainerRef.current.querySelectorAll('.feature-card');
        cards.forEach((card, index) => {
            card.dataset.index = index; // Добавляем data-атрибут для индекса
            observer.observe(card);
        });

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, []); // Запускаем только при монтировании

    // Для галереи скриншотов (осталась прежней)
    const galleryItemRefs = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        galleryItemRefs.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => galleryItemRefs.current.forEach(item => {
            if (item) observer.unobserve(item);
        });
    }, []);


    return (
        <>
            <section id="features" className="features-section">
                <div className="container">
                    <h2>Ключевые особенности Emberi</h2>
                    <div className="features-horizontal-scroll" ref={scrollContainerRef}>
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                iconClass={feature.iconClass}
                                bgColor={feature.bgColor}
                                title={feature.title}
                                description={feature.description}
                                isActive={index === activeIndex}
                            />
                        ))}
                    </div>
                    {/* Навигационные стрелки */}
                    <div className="features-navigation">
                        <button onClick={scrollPrev} disabled={activeIndex === 0}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button onClick={scrollNext} disabled={activeIndex === features.length - 1}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                    {/* Индикаторы (точки) */}
                    <div className="features-pagination">
                        {features.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => {
                                    scrollToCard(index);
                                    setActiveIndex(index);
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Галерея скриншотов теперь ОТДЕЛЬНАЯ секция */}
            <section id="screenshots" className="screenshots-gallery">
                <div className="container">
                    <h3>Посмотрите, как это выглядит!</h3>
                    <div className="gallery-placeholder">
                        <img
                            src="https://via.placeholder.com/200x350/E3FCB7/253A82?text=UI+Screenshot+1"
                            data-full-src="https://via.placeholder.com/600x1050/E3FCB7/253A82?text=UI+Screenshot+1"
                            alt="UI Screenshot 1"
                            className="gallery-item"
                            onClick={(e) => openModal(e.target.dataset.fullSrc)}
                            ref={el => galleryItemRefs.current[0] = el}
                        />
                        <img
                            src="https://via.placeholder.com/200x350/FFB2F7/253A82?text=UI+Screenshot+2"
                            data-full-src="https://via.placeholder.com/600x1050/FFB2F7/253A82?text=UI+Screenshot+2"
                            alt="UI Screenshot 2"
                            className="gallery-item"
                            onClick={(e) => openModal(e.target.dataset.fullSrc)}
                            ref={el => galleryItemRefs.current[1] = el}
                        />
                        <img
                            src="https://via.placeholder.com/200x350/AB9DFF/253A82?text=UI+Screenshot+3"
                            data-full-src="https://via.placeholder.com/600x1050/AB9DFF/253A82?text=UI+Screenshot+3"
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