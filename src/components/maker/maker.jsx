import React from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
    const historyState = useNavigate().state;
    const [cards, setCards] = React.useState({});
    const [userId, setUserId] = React.useState(historyState && historyState.id);
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    };

    React.useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = cardRepository.syncCards(userId, (val) => {
            setCards(val);
        });
        return () => {
            stopSync();
        }
    }, [userId]);

    React.useEffect(() => {
        authService.onAuthChange((user) => {
            if (user) {
                setUserId(user.uid)
            } else {
                navigate('/');
            }
        })
    });

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        })
        cardRepository.saveCard(userId, card);
    };

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        })
        cardRepository.removeCard(userId, card);
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
                    FileInput={FileInput}
                    cards={cards}
                    addCard={createOrUpdateCard}
                    updateCard={createOrUpdateCard}
                    deleteCard={deleteCard}
                />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
};

export default Maker;