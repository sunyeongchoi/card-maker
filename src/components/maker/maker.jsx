import React from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards, setCards] = React.useState([
        {
            id: '1',
            name: 'snchoi',
            company: 'Google',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'snchoi@gmail.com',
            message: 'go for it',
            fileName: 'snchoi',
            fileURL: null
        },
        {
            id: '2',
            name: 'snchoi2',
            company: 'Google',
            theme: 'light',
            title: 'Software Engineer',
            email: 'snchoi@gmail.com',
            message: 'go for it',
            fileName: 'snchoi',
            fileURL: null
        },
        {
            id: '3',
            name: 'snchoi3',
            company: 'Google',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'snchoi@gmail.com',
            message: 'go for it',
            fileName: 'snchoi',
            fileURL: null
        }
    ])
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    };

    React.useEffect(() => {
        authService.onAuthChange((user) => {
            if (!user) {
                navigate('/');
            }
        })
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
};

export default Maker;