import { auth, provider } from '../../fBase';


const onGoggleClick = async(event) => { 
  await auth.signInWithPopup(provider).then((result) => {
    console.log(result);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = provider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    console.log(error);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = provider.credentialFromError(error);
    // ...
  });
}

const Login = () => {
    return (
      <button onClick={onGoggleClick}>
        Login
      </button>
    );
};

export default Login;