// src/components/ScreenshotsCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';

export default function ScreenshotsCarousel({ openModal }) {
    return (
        <section id="screenshots" className="screenshots-section fade-up">
            <div className="container ">
                <h3>Посмотрите, как это выглядит!</h3>

                {/* стрелки */}
                <button className="nav-btn prev" aria-label="Prev" />
                <button className="nav-btn next" aria-label="Next" />

                <Swiper
                    modules={[Pagination, Navigation, Keyboard, Autoplay]}
                    slidesPerView={1.1}
                    centeredSlides
                    loop
                    navigation={{ prevEl: '.prev', nextEl: '.next' }}
                    keyboard
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640:  { slidesPerView: 1.3 },
                        992:  { slidesPerView: 2.2 },
                        1280: { slidesPerView: 3   },
                    }}
                    className="ui-carousel"
                >
                    {/* просто четыре слайда подряд */}
                    <SwiperSlide className="ui-slide">
                        <img
                            src="../../public/image/screenshot1.jpg"
                            alt="UI 1"
                            onClick={() => openModal('../../public/image/screenshot1.jpg')}
                        />
                    </SwiperSlide>

                    <SwiperSlide className="ui-slide">
                        <img
                            src="../../public/image/screenshot2.jpg"
                            alt="UI 2"
                            onClick={() => openModal('../../public/image/screenshot2.jpg')}
                        />
                    </SwiperSlide>
                    <SwiperSlide className="ui-slide">
                        <img
                            src="../../public/image/screenshot3.jpg"
                            alt="UI 2"
                            onClick={() => openModal('../../public/image/screenshot3.jpg')}
                        />
                    </SwiperSlide>

                    <SwiperSlide className="ui-slide">
                        <img
                            src="../../public/image/screenshot4.jpg"
                            alt="UI 3"
                            onClick={() => openModal('../../public/image/screenshot4.jpg')}
                        />
                    </SwiperSlide>

                    <SwiperSlide className="ui-slide">
                        <img
                            src="../../public/image/screenshot3.jpg"
                            alt="UI 4"
                            onClick={() => openModal('../../public/image/screenshot4.jpg')}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
