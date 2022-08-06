import { signInWithGoogle } from '../../fBase';
import * as React from 'react';

const Login = () => {
    return (
      <div className='login'>
        <button onClick={signInWithGoogle}>
          Login
        </button>
      </div>
    );
};

export default Login;