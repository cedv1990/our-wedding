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
            {/* <div className="message">
            {
                checked ?
                'Gracias por acompañarnos! Recuerda... bla bla bla'
                :
                'Si no nos puedes acompañar... bla bla'
            }
            </div> */}
            <button onClick={ handleBackClick } disabled={ loading }>
                Regresar
            </button>
        </aside>
    )
}
