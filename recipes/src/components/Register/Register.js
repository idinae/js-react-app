import firebase from '../../utils/firebase';
import style from './Register.module.css';

const Register = ({
    history
}) => {
    const onRegisterSubmitHanlder = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        
        firebase.auth().createUserWithEmailAndPassword(username, password)
            .then(userCredential => {
                console.log('Register');
                history.push('/');
            });
    }

    return (
        <div id="registerForm">
            <h1>Register</h1>
            <form onSubmit={onRegisterSubmitHanlder}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" name="repeatPassword" id="repeatPassword"></input>
                <button type="submit" value="Register" className={style.buttonstyle}>Register</button>
            </form>
</div>
    )
}

export default Register;