import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingFamilyData } from '../actions/family';

import { ConfirmScreen } from './ConfirmScreen';
import { Loader } from './Loader';
import { WelcomeScreen } from './WelcomeScreen';

export const WeddingApp = () => {
    const guestId = window.location.search.split('?id=').join('').split('/').join('');

    const dispatch = useDispatch();

    const { showForm } = useSelector(state => state.ui);

    useEffect(() => {
        if (guestId !== '')
            dispatch( startLoadingFamilyData(guestId) );
    }, [ dispatch, guestId ]);

    if (guestId !== '') {
        return (
            <> 
                <Loader />
                {(showForm ? <ConfirmScreen /> : <WelcomeScreen />)}
            </>
        );
    }

    return (
        <>
            <Loader />
            <WelcomeScreen />
        </>
    );
}
