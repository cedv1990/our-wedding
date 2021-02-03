import React from 'react';
import { useSelector } from 'react-redux';

export const Loader = () => {
    const { loading } = useSelector(state => state.ui);

    const className = !loading ? 'animate__animated animate__fadeOut animate__faster' : '';

    setTimeout(() => {
        document.querySelector('.loader').className = `loader ${ className }`;
    }, 2000);

    return (
        <div className='loader'>
        </div>
    )
}
