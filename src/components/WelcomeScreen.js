import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowForm } from '../actions/ui';
import { ConfirmButton } from './confirm/ConfirmButton';
import { Location } from './Location';

export const WelcomeScreen = () => {
    const dispatch = useDispatch();

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
                ¡{ valid ? `Hola ${ family.family_name }` : (<>Bienvenid<small>@</small> a nuestra boda</>) }!
            </div>
            {
                family.guests
                ?
                    <div className="little-words">
                        Nos llena de emoción celebrar nuestra unión junto a { family.guests.length > 1 ? 'ustedes' : 'ti' },
                        <br />
                        que { family.guests.length > 1 ? 'son' : 'eres' } especial{ family.guests.length > 1 ? 'es' : '' } para nosotros.
                    </div>
                :
                    <div className="little-words">
                        Nos llena de emoción celebrar nuestra unión junto a ustedes.
                    </div>
            }
            <div className="couple-names">
                Carlos
                <br />
                &
                <br />
                Mónica
            </div>
            <div className="words">
                "La vida une a las personas adecuadas en el momento adecuado.<br />Que este sea nuestro destino: amar, vivir y empezar cada día juntos"
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
            <ConfirmButton
                valid={ valid > 0 }
                handleShowForm={ handleShowForm }
                disabled={ loading }
            />
            <Location />
        </aside>
    )
}
