import { types } from "../types/types";

const initialState = {
    guest: {}
};

export const guestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.guestsLoad:
            return {
                ...state,
                guest: {...action.payload}
            };
        default:
            return state;
    }
};