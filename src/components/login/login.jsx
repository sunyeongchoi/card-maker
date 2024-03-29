import * as React from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';

const Login = ({authService}) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate('/maker', { state: {id: userId}})
  }
  const handleLogin = (e) => {
    authService.login(e.currentTarget.textContent)
    .then(data => goToMaker(data.user.uid));
  }

  React.useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    })
  }, []);

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