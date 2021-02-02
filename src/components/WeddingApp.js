import React from 'react';
import { useSelector } from 'react-redux';
import { ConfirmScreen } from './ConfirmScreen';
import { WelcomeScreen } from './WelcomeScreen';

export const WeddingApp = () => {

    const { showForm } = useSelector(state => state.ui);

    return showForm ? <ConfirmScreen /> : <WelcomeScreen />;
}
