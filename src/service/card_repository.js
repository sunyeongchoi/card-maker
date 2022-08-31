import { firebaseDatabase } from './firebase';

class CardRepository {
    syncCards(userId, onUndate) {
        const ref = firebaseDatabase.ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const val = snapshot.val();
            val && onUndate(val);
        });
        return () => ref.off();
    }
    saveCard(userId, card) {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
    }
    removeCard(userId, card) {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
    }
};

export default CardRepository;
