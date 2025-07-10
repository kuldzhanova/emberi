import React from 'react';
import '../App.css'; // Или '../App.css'

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container">
                <div className="hero-content fade-up">
                    <h1>Ваш путь к ментальной гармонии с Emberi</h1>
                    <p>Инновационное приложение для отслеживания эмоций, личного дневника и уникальных медитаций с AI-питомцем.</p>
                    <div className="hero-buttons">
                        <a href="#features" className="button secondary animated-button">Узнать больше</a>
                        <a href="#" className="button secondary animated-button">Вакансии в команду</a>
                    </div>
                </div>
                <div className="hero-image fade-up">
                    {/* Используем HTML5 video tag для воспроизведения вашего видео */}
                    <video
                        className="hero-pet-video" // Класс для стилизации (добавим в CSS)
                        autoPlay    // Автоматическое воспроизведение при загрузке страницы
                        loop        // Видео будет постоянно зацикливаться
                        muted       // Обязательно отключаем звук, иначе браузеры могут блокировать autoplay
                        playsInline // Улучшает воспроизведение на мобильных устройствах
                        preload="auto" // Начинает загрузку видео сразу
                        poster="/images/emberi-logo.jpeg" // Необязательно: изображение, которое отобразится до загрузки видео
                    >
                        {/* Укажите путь к вашему MP4 файлу */}
                        <source src="/videos/emberi-pet-animation.mp4" type="video/mp4" />
                        {/* Если у вас есть версия в WebM (для лучшей совместимости/оптимизации), добавьте ее тоже: */}
                        {/* <source src="/videos/emberi-pet-animation.webm" type="video/webm" /> */}
                        Ваш браузер не поддерживает HTML5 видео.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default Hero;