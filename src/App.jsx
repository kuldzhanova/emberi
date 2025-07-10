import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features'; // Этот компонент теперь включает только карточки
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import useFadeUp from './components/useFadeUp.jsx';
import CallToAction from "./components/CallToAction.jsx";

import './App.css'; // Или './App.css'


function App() {
    useFadeUp();
    const [modalImageUrl, setModalImageUrl] = useState(null);

    const openModal = (url) => {
        setModalImageUrl(url);
    };

    const closeModal = () => {
        setModalImageUrl(null);
    };

    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <Features openModal={openModal} /> {/* Features теперь включает в себя галерею скриншотов внутри себя */}
                <Team />
                <TestimonialsCarousel />
                <CallToAction onSubscribe={()=>setOpen(true)} />
            </main>
            <Footer />
            {modalImageUrl && (                /* условный рендер */
                <Modal onClose={closeModal}>
                    <img src={modalImageUrl} alt="UI screenshot enlarged" />
                </Modal>
            )}
        </div>
    );
}


export default App;
