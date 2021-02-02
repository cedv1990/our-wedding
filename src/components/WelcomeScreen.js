import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowForm } from '../actions/ui';

export const WelcomeScreen = () => {
    const dispatch = useDispatch();

    const handleClickMap = () => {
        window.open('https://goo.gl/maps/yPgs66VkgaipSVf37', '_blank');
    };

    const handleShowForm = () => {
        const container = document.querySelector('.container');
        container.classList.remove('animate__backInLeft');
        container.classList.add('animate__backOutLeft');
        setTimeout(() => dispatch( setShowForm() ), 200);
    };

    return (
        <aside className="container animate__animated animate__backInLeft animate__faster">
            <div className="notice">
                ¡Nos Casamos!
            </div>
            <div className="couple-names">
                Carlos
                <br />
                &
                <br />
                Mónica
            </div>
            <div className="words">
                "La vida una a las personas adecuadas en el momento adecuado.<br />Que este sea nuestro destino: amar, vivir y empezar cada día juntos"
            </div>
            <div className="date">
                <div className="cute">Domingo</div>
                <div className="hour">
                    <h2>25</h2>
                    <span>2021</span>
                    <span>3:00 PM</span>
                </div>
                <div className="cute">Julio</div>
            </div>
            <div 
                className="location"
                onClick={ handleClickMap }
            >
                <i className="fas fa-map-marked-alt"></i> Hacienda San Sebastián, Kilómetro 3, vía El Rosal - Subachoque
            </div>
            <div className="buttons">
                <button onClick={ handleShowForm }>
                    Confirmar asistencia
                </button>
            </div>
        </aside>
    )
}
