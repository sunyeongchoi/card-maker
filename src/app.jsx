import * as React from 'react';
import './app.css';
import Login from './components/login/login';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { auth } from './fBase';
import Home from './components/home/home';

function App() {
  const [user, setUser] = React.useState(undefined);
  React.useEffect(() => {
    auth.onAuthStateChanged(userInfo => {
      setUser(userInfo);
    })
  }, [])

  return (
    <div className='app'>
      {user ? <Home user={user} /> : <Login />}
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/login' element={<Login />} />
    //     <Route path='/cardmaker' element={<CardMakerForm user={user} />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
