import firebase from '../../utils/firebase';
import style from './Login.module.css';

const Login = () => {
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log(username, password);

        //from firebase docs
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                console.log(userCredential);
            });
    };

    return(
        <div id="loginForm">
            <h1>Login</h1>
            <form onSubmit={onLoginFormSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            <button type="submit" className={style.buttonstyle} value="Login">Login</button>
            </form>
        </div>
    )
}

export default Login;