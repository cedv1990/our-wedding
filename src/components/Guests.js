import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../types/types';
import { useForm } from '../hooks/useForm';

export const Guests = ({ families, showCopiedLink }) => {
    const dispatch = useDispatch();

    const { filtered } = useSelector(state => state.ui);

    const [ { name }, handleInputChange ] = useForm( { name: '' } );

    const calculateClass = guests => {
        const dif = guests.length - guests.filter(g => g.goes).length;
        if (dif === 0) {
            return 'all';
        }
        else if (dif === guests.length) {
            return 'nobody';
        }
        return 'mix';
    };

    const getInviteUrl = id => `${window.location.protocol}//${window.location.host}/?id=${id}`;

    const filter = () => dispatch({ type: types.setFiltered, payload: !filtered });

    const filterName = text => new RegExp(`${name}`, 'ig').test(text);

    const filterGuestName = ({ firstName, middleName, lastName, secondLastName, nickname }) => filterName(`${firstName} ${middleName} ${lastName} ${secondLastName} ${nickname}`);
    
    const familiesView = families
        .filter(({ familyName, guests }) => 
            ((filtered && guests.filter(g => g.goes).length > 0) || !filtered)
            && (
                (name && (filterName(familyName) || guests.filter(filterGuestName).length > 0))
                || !name
            )
        )
        .map(f => ({
            ...f,
            guests: (name ? f.guests.filter(filterGuestName) : f.guests)
        }))
        .map(f => f.guests.length === 0 ? families.find(h => h.id === f.id) : f);

    const counts = {
        families: familiesView.length,
        guests: familiesView.reduce((ac, f) => ac + f.guests.length, 0),
        confirmed: familiesView.reduce((ac, f) => ac + f.guests.filter(g => g.goes).length, 0)
    };

    return (
        <>
            <div className="admin__guests-title">
                Lista de invitados
            </div>
            <div className="admin__guests-detail">
                <div className="input">
                    <input
                        type="text"
                        name="name"
                        placeholder="Filtro: nombre, familia..."
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </div>
                <div><strong>Familias:</strong> { counts.families }</div>
                <div><strong>Invitados:</strong> { counts.guests }</div>
                <div 
                    className="admin__guests-filter"
                    onClick={filter}
                >
                    <strong>Confirmados:</strong> { counts.confirmed }
                </div>
            </div>
            <div className="admin__guests-container">
            {
                familiesView.length > 0
                && familiesView
                    .map(({ id, familyName, guests }) => (
                        <CopyToClipboard
                            key={ id }
                            text={getInviteUrl(id)}
                            onCopy={showCopiedLink}>
                            <div className={`admin__guests-container-row ${ calculateClass(guests) }`}>
                                <h1>{familyName}</h1>
                                <ul>
                                {
                                    guests.map(({ firstName, middleName, lastName, secondLastName, nickname, goes }) => (
                                        <li key={ nickname } className={ goes ? 'yes' : 'no' }>({nickname}) {firstName} {middleName} {lastName} {secondLastName}</li>
                                    ))
                                }
                                </ul>
                            </div>
                        </CopyToClipboard>
                    ))
            }
            { familiesView.length === 0 && <div className="admin__guests-container-row error">😅 No se encontraron invitados por el filtro.</div> }
            </div>
        </>
    );
}

Guests.propTypes = {
    families: PropTypes.array.isRequired,
    showCopiedLink: PropTypes.func.isRequired
}
