import { types } from '../types/types';

const initialState = {
    showForm: false,
    loading: false,
    msgError: null
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.showConfirm:
            return {
                ...state,
                showForm: true
            };
        case types.hideConfirm:
            return {
                ...state,
                showForm: false
            };
        case types.setError:
            return {
                ...state,
                msgError: action.payload
            };
        case types.removeError:
            return {
                ...state,
                msgError: null
            };
        case types.startLoading:
            return {
                ...state,
                loading: true
            };
        case types.finishLoading:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};