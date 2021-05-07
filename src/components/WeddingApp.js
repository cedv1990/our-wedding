import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingFamilyData } from '../actions/family';

import { ConfirmScreen } from './confirm/ConfirmScreen';
import { Frame } from './Frame';
import { Loader } from './Loader';
import { WelcomeScreen } from './WelcomeScreen';
import { AdminScreen } from './AdminScreen';
import { extractQueryString } from '../helpers/uri';

export const WeddingApp = () => {
    const isAdmin = extractQueryString('admin') === 'true';

    const guestId = extractQueryString('id');

    const dispatch = useDispatch();

    const { showForm } = useSelector(state => state.ui);

    useEffect(() => {
        if (guestId !== '')
            dispatch( startLoadingFamilyData(guestId) );
    }, [ dispatch, guestId ]);

    if (isAdmin) {
        return <AdminScreen />;
    } else if (guestId !== '') {
        return (
            <> 
                <Loader />
                <Frame />
                {(showForm ? <ConfirmScreen /> : <WelcomeScreen />)}
            </>
        );
    }

    return (
        <>
            <Loader />
            <Frame />
            <WelcomeScreen />
        </>
    );
}
