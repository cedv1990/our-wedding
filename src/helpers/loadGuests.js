import { db } from '../database/firebase-config';

export const loadGuestData = async guestId => {
    const guestSnapshot = (await db.doc(`guests/${guestId}`).get()).data();
    if (guestSnapshot)
        return { ...guestSnapshot, id: guestId };
    return {};
};