import React from 'react';
import '../App.css';

const Modal = ({ imageUrl, onClose }) => {
    if (!imageUrl) return null; // Не рендерить, если нет изображения

    return (
        <div className="modal" style={{ display: imageUrl ? 'flex' : 'none' }} onClick={onClose}>
            <span className="close-button" onClick={onClose}>&times;</span>
            <img className="modal-content" src={imageUrl} alt="Full size" onClick={e => e.stopPropagation()} />
        </div>
    );
};

export default Modal;