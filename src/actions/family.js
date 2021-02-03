import { db } from '../database/firebase-config';
import { loadFamilyData } from '../helpers/loadFamily';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

export const startLoadingFamilyData = guestId => async dispatch => {
    dispatch( startLoading() );
    const guest = await loadFamilyData(guestId);
    dispatch(setFamily(guest));
    dispatch( finishLoading() );
};

export const setFamily = guest => ({
    type: types.familyLoad,
    payload: guest
});

export const startConfirm = (familyId, guestId, goes) => async dispatch => {
    dispatch( startLoading() );
    await db.doc(`families/${familyId}/guests/${guestId}`).update({ goes: goes });
    dispatch(updateGoes(guestId, goes));
    dispatch( finishLoading() );
};

export const updateGoes = (guestId, goes) => ({
    type: types.guestGoesUpdate,
    payload: {
        guestId,
        goes
    }
});