import { db } from '../database/firebase-config';

export const loadFamilyData = async familyId => {
    const familySnapshot = (await db.doc(`families/${familyId}`).get()).data();
    if (familySnapshot) {
        const guestsSnapshot = await db.collection(`families/${familyId}/guests`).get();

        const guests = [];

        guestsSnapshot.forEach( snapHijo => guests.push({
            id: snapHijo.id,
            ...snapHijo.data()
        }));

        return { ...familySnapshot, id: familyId, guests };
    }
    return {};
};