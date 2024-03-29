import React from 'react';
import styles from './footer.module.css';

const Footer = React.memo(() => (
    <footer className={styles.footer}>
        <p className={styles.title}>Code your dream</p>
    </footer>
));

export default Footer;