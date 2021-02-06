import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { finishInitialLoading } from '../actions/ui';

export const Loader = () => {
    const dispatch = useDispatch();

    const { loading, initialLoadingEnded } = useSelector(state => state.ui);

    if (!initialLoadingEnded) {
        setTimeout(() => {
            const className = !loading ? 'animate__animated animate__fadeOut animate__faster' : '';
            const loader = document.querySelector('.loader');
            if (initialLoadingEnded || !loader) return;
            loader.className = `loader ${ className } no-pointer`;
            dispatch( finishInitialLoading() );
        }, 2000);

        return (
            <div className='loader'>
            </div>
        );
    }
    return (<></>);
}
