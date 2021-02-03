import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingGuestData } from '../actions/guests';
import { ConfirmScreen } from './ConfirmScreen';
import { WelcomeScreen } from './WelcomeScreen';

export const WeddingApp = () => {
    const guestId = window.location.pathname.split('/invite/').join('').split('/').join('');

    const dispatch = useDispatch();

    const { showForm } = useSelector(state => state.ui);

    useEffect(() => {
        if (guestId !== '')
            dispatch( startLoadingGuestData(guestId) );
    }, [ dispatch, guestId ]);

    if (guestId !== '') {
        return showForm ? <ConfirmScreen /> : <WelcomeScreen />;
    }

    return <WelcomeScreen />;
}
