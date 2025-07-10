// src/components/Modal.jsx
import React from 'react';
import '../App.css';

export default function Modal({ children, onClose }) {
    return (
        <div className="modal" onClick={onClose}>
            <div
                className="modal-content"
                onClick={e => e.stopPropagation()}   /* клик внутри — не закрывать */
            >
                {/* ← 1. КРЕСТИК */}
                <button
                    className="close-button"
                    aria-label="Закрыть окно"
                    onClick={onClose}
                >
                    ×
                </button>

                {/* 2. Ваши children (форма / картинка) */}
                {children}
            </div>
        </div>
    );
}

