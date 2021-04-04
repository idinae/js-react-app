import firebase from '../../utils/firebase';
import style from './Login.module.css';

const Login = ({
    history
}) => {
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log(username, password);

        //from firebase docs
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                console.log(userCredential);
                history.push('/');
            });
    };

    return(
        <div className={style.articlewrapper}>
            <h1>Влез</h1>
            <form onSubmit={onLoginFormSubmitHandler}>
                <label htmlFor="username">Имейл:</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Парола:</label>
                <input type="password" name="password" id="password" />
            <button type="submit" className={style.buttonstyle} value="Login">Вход</button>
            </form>
        </div>
    )
}

export default Login;