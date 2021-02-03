import { db } from '../database/firebase-config';
import { loadGuestData } from '../helpers/loadGuests';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

export const startLoadingGuestData = guestId => async dispatch => {
    dispatch( startLoading() );
    const guest = await loadGuestData(guestId);
    dispatch(setGuests(guest));
    dispatch( finishLoading() );
};

export const setGuests = guest => ({
    type: types.guestsLoad,
    payload: guest
});

export const startConfirm = (guestId, guest) => async dispatch => {
    dispatch( startLoading() );
    const guestToFS = { ...guest };
    await db.doc(`guests/${guestId}`).update({ goes: guestToFS.goes });
    dispatch(setGuests(guestToFS));
    dispatch( finishLoading() );
};