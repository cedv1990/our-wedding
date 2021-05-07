import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHideForm } from '../../actions/ui';
import { Location } from '../Location';
import { GuestsConfirmation } from './GuestsConfirmation';


export const ConfirmScreen = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.ui);

    const { family } = useSelector(state => state.family);

    const { family_name, guests } = family;

    const handleBackClick = () => {
        const container = document.querySelector('.confirm-container');
        container.classList.remove('animate__backInRight');
        container.classList.add('animate__backOutRight');
        setTimeout(() => dispatch( setHideForm() ), 200);
    };

    const confirmedGuests = guests.filter(g => g.goes);
    const unconfirmedGuests = guests.filter(g => !g.goes);

    const formatText = t => {
        if (t.length > 1) {
            return t.slice(0, t.length - 1).join(', ') + ' y ' + t[t.length - 1];
        }
        return t[0];
    };

    const textConfirmedGuests = formatText(confirmedGuests.map(c => c.nickname));
    
    const textUnconfirmedGuests = formatText(unconfirmedGuests.map(c => c.nickname));

    const allaNosVeremos = (<><br />{'¡Nos vemos el 25 de Julio 😋!'}<br />{'Yo veré, la mejor pinta ese día 🕺🏻💃🏻🤭'}</>);

    return (
        <aside className="confirm-container animate__animated animate__backInRight animate__faster">
            <div className="description">
                <h2>{ family_name }<br />¿Nos acompaña{ guests.length > 1 ? 'n' : 's' }?</h2>
                <span>Para confirmar { guests.length > 1 ? 'la' : 'tu' } asistencia, solo debes decir { guests.length > 1 ? 'quién va' : 'si vas' } o no a nuestra boda.</span>
                <span className="icon">🥰</span>
            </div>
            <hr />
            <div className="bus-info">
                <strong>¿No tienes transporte? 😕</strong>
                <br />
                <br />
                Dependiendo la cantidad de personas que confirmen asistencia y <i><u>NO cuenten con medio de transporte</u></i>, pondremos a su disposición un bus que saldrá
                desde el portal de la 80.
            </div>
            <form>
                <GuestsConfirmation />
            </form>
            <div className="message">
            {
                guests.length === confirmedGuests.length
                ?
                    (
                        <>
                            {`¡Gracias ${ textConfirmedGuests } por acompañarnos 🤗!`}
                            <br />
                            {
                                `Estamos ansiosos porque este día llegue 🥰 y tener el placer de contar 
                                con ${ confirmedGuests.length === 1 ? 'tu' : 'su' } compañía en este momento tan especial para nosotros 😃`
                            }
                            <br />
                            {allaNosVeremos}
                        </>
                    )
                :
                (
                    confirmedGuests.length === 0
                    ?
                    `Qué mal que no nos acompaña${ guests.length === 1 ? 's' : 'n' } 😕, pero sabemos que podemos contar con${ guests.length === 1 ? 'tigo' : ' ustedes' } para cualquier otra ocasión 💪🏻`
                    :
                    (
                        <>
                            {`¡Gracias ${ textConfirmedGuests } por acompañarnos!`}
                            <br />
                            {allaNosVeremos}
                            <br />
                            <br />
                            {`Es una pena que ${ textUnconfirmedGuests } no nos acompañe${ unconfirmedGuests.length !== 1 ? 'n' : '' } 🥺, pero sabemos 
                            que podemos contar con${ unconfirmedGuests.length === 1 ? 'tigo' : ' ustedes' } para cualquier otra ocasión 💪🏻`}
                        </>
                    )
                )
            }
            </div>
            <button onClick={ handleBackClick } disabled={ loading }>
                Regresar
            </button>
            <Location />
        </aside>
    )
}
