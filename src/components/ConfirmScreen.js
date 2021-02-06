import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHideForm } from '../actions/ui';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { startConfirm } from '../actions/family';


export const ConfirmScreen = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.ui);

    const { family } = useSelector(state => state.family);

    const { id, family_name, guests } = family;

    const handleBackClick = () => {
        const container = document.querySelector('.confirm-container');
        container.classList.remove('animate__backInRight');
        container.classList.add('animate__backOutRight');
        setTimeout(() => dispatch( setHideForm() ), 200);
    };

    const handleOnChange = guestId => e => {
        dispatch( startConfirm(id, guestId, e.target.checked) );
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
                <h2>{ family_name }, ¿Nos acompaña{ guests.length > 1 ? 'n' : 's' }?</h2>
                <span>Para confirmar { guests.length > 1 ? 'la' : 'tu' } asistencia, solo debes decir { guests.length > 1 ? 'quién va' : 'si vas' } o no a nuestra boda.</span>
                <span className="icon">🥰</span>
            </div>
            <hr />
            <form>
                {
                    guests.map(({ first_name, middle_name, last_name, second_last_name, goes, id }, i) => (
                        <div key={ i }>
                            <span className="name">{ `${`${ first_name } ${ middle_name }`.trim()} ${`${ last_name } ${ second_last_name }`.trim()}` }</span>
                            <FormControlLabel label={ goes ? '😊' : '🥺' } title="Clic para cambiar" control={<Switch onChange={ handleOnChange(id) } checked={ goes } name="goes" color={ 'secondary' } />} disabled={ loading } />
                        </div>
                    ))
                }
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
        </aside>
    )
}
