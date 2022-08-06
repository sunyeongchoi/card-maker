import React from 'react';
import { auth } from '../../fBase';
import CardMakerForm from '../card_maker/cardMakerForm';
import CardMakerView from '../card_maker/cardMakerView';

const Home = ({ user }) => (
    <div className="home">
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
      <CardMakerForm />
      <CardMakerView />
    </div>
);

export default Home;