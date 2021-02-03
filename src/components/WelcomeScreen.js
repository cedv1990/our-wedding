import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowForm } from '../actions/ui';

export const WelcomeScreen = () => {
    const dispatch = useDispatch();

    const handleClickMap = () => {
        window.open('https://goo.gl/maps/XkoCP9FdpzKGYFE37', '_blank');
    }

    const { family } = useSelector(state => state.family);

    const { loading } = useSelector(state => state.ui);

    const handleShowForm = () => {
        const container = document.querySelector('.container');
        container.classList.remove('animate__backInLeft');
        container.classList.add('animate__backOutLeft');
        setTimeout(() => dispatch( setShowForm() ), 200);
    };

    const valid = Object.keys(family).length;

    if (valid) {
        document.title = `¡Bienveni@ ${ family.family_name }!`;
    }

    return (
        <aside className="container animate__animated animate__backInLeft animate__faster">
            <div className="notice">
                ¡Hola { family.family_name }!
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
            {
                valid > 0 && 
                (
                    <div className="buttons">
                        <button onClick={ handleShowForm } disabled={ loading }>
                            Confirmar asistencia
                        </button>
                    </div>
                )
            }
        </aside>
    )
}
