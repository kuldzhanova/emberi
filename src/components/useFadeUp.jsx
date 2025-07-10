import { useEffect } from 'react';

export default function useFadeUp() {
    useEffect(() => {
        const els = document.querySelectorAll('.fade-up');
        const io = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add('is-visible');
                        io.unobserve(e.target);         // анимируем только один раз
                    }
                });
            },
            { threshold: 0.15 }                  // элемент виден ≥ 15 %
        );

        els.forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);
}
