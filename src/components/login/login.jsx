import * as React from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = ({authService}) => {
  const handleLogin = (e) => {
    authService.login(e.currentTarget.textContent)
    .then(console.log);
  }
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={handleLogin}>Google</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={handleLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  )
}
export default Login;