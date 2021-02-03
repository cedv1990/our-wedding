import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHideForm } from '../actions/ui';
import { useForm } from '../hooks/useForm';
import { startConfirm } from '../actions/guests';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


export const ConfirmScreen = () => {

    const dispatch = useDispatch();

    const { loading, msgError } = useSelector(state => state.ui);

    const { guest } = useSelector(state => state.guests);

    const { first_name, middle_name, last_name, second_last_name, goes, id } = guest;

    const handleBackClick = () => {
        const container = document.querySelector('.confirm-container');
        container.classList.remove('animate__backInRight');
        container.classList.add('animate__backOutRight');
        setTimeout(() => dispatch( setHideForm() ), 200);
    };

    const [ values, handleChange ] = useForm({ goes });
    const { goes: checked } = values;
    
    const guestId = useRef( guest.goes );

    useEffect(() => {
        if (checked !== guestId.current) {
            dispatch( startConfirm(guest.id, { ...guest, goes: checked }) );
            guestId.current = checked;
        }
    }, [ guest, checked, loading, dispatch ]);

    return (
        <aside className="confirm-container animate__animated animate__backInRight animate__faster">
            <div className="description">
                <h2>¿Nos acompañas { first_name || middle_name }?</h2>
                <span>Para confirmar tu asistencia, solo debes decir si vas o no a nuestra boda.</span>
                <span className="icon">🥰</span>
            </div>
            <hr />
            <form>
                <span className="name">{ `${`${ first_name } ${ middle_name }`.trim()} ${`${ last_name } ${ second_last_name }`.trim()}` }</span>
                <FormControlLabel label={ checked ? '😊' : '🥺' } title="Clic para cambiar" control={<Switch checked={ checked } onChange={ handleChange } name="goes" color={ 'secondary' } />} disabled={ loading } />
            </form>
            <div className="message">
            {
                checked ?
                'Gracias por acompañarnos! Recuerda... bla bla bla'
                :
                'Si no nos puedes acompañar... bla bla'
            }
            </div>
            <button onClick={ handleBackClick }>
                Regresar
            </button>
        </aside>
    )
}
