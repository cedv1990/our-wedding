import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError, setHideForm } from '../actions/ui';
import { useForm } from '../hooks/useForm';

export const ConfirmScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        surname: ''
    });

    const { loading, msgError } = useSelector(state => state.ui);

    const { name, surname } = formValues;

    const handleBackClick = () => {
        const container = document.querySelector('.confirm-container');
        container.classList.remove('animate__backInRight');
        container.classList.add('animate__backOutRight');
        setTimeout(() => dispatch( setHideForm() ), 200);
    };

    const handleSearch = e => {
        e.preventDefault();

        if (isFormValid()) {

        }
    };

    const isFormValid = () => {
        if ( name.trim().length === 0 && surname.trim().length === 0 ) {
            dispatch(setError('Debes diligenciar al menos un campo'));
            return false;
        }
        dispatch(removeError());
        return true;
    };

    return (
        <aside className="confirm-container animate__animated animate__backInRight animate__faster">
            <div className="description">
                <h2>¿Nos acompañas?</h2>
                <span>Para confirmar tu asistencia, escribe tu nombre y apellido (o uno de los dos) y dale Buscar. Aparecerán los nombres que coincidan y solo debes decir si vas o no a nuestra boda.</span>
                <span className="icon">🥰</span>
            </div>
            <hr />
            <form onSubmit={ handleSearch }>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre(s)"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                        disabled={ loading }
                    />
                    <input
                        type="text"
                        name="surname"
                        placeholder="Apellido(s)"
                        autoComplete="off"
                        value={ surname }
                        onChange={ handleInputChange }
                        disabled={ loading }
                    />
                </div>
                <button
                    type="submit"
                    disabled={ loading }
                >
                    Buscar
                </button>
                <span className="error" style={ { display: msgError == null && 'none' } }>
                    <i class="fas fa-exclamation-triangle"></i> { msgError }
                </span>
            </form>
            <button onClick={ handleBackClick }>
                Regresar
            </button>
        </aside>
    )
}
