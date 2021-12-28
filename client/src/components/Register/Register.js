import { useState } from 'react';
import firebase from '../../utils/firebase';
import style from './Register.module.css';

const Register = ({
    history
}) => {
    const [username, setUsername] = useState('@');
    const [password, setPassword] = useState('123456');
    const [repeatPassword, setRepeatPassword] = useState('123456');

    const onUsernameChangeHandler = (e) => {
        setUsername(e.target.value)
    };

    const onPasswordChangeHandler = (e) => {
        setPassword(e.target.value)
    };

    const onRepeatPasswordChangeHandler = (e) => {
        setRepeatPassword(e.target.value)
    };

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
        <div className={style.articlewrapper}>

            <h1>Регистрирай се</h1>
            <form onSubmit={onRegisterSubmitHanlder}>
                <label htmlFor="username">Имейл:</label>
                <input type="text" name={username} id="username" onChange={onUsernameChangeHandler} />
                <div className={`${style.validation} ${!username.includes('@') && style.show}`}>Please enter a valid email address.</div>
                <label htmlFor="password">Парола:</label>
                <input type="password" name={password} id="password" onChange={onPasswordChangeHandler} />
                <div className={`${style.validation} ${password.length<6 && style.show}`}>Password length should be minimum 6 characters.</div>
                <label htmlFor="repeatPassword">Повтори паролата:</label>
                <input type="password" name={repeatPassword} id="repeatPassword" onChange={onRepeatPasswordChangeHandler}></input>
                <div className={`${style.validation} ${password !== repeatPassword && style.show}`}>Passwords do not match.</div>
                <button type="submit" value="Register" className={style.buttonstyle}>Изпрати</button>
            </form>
        </div>
    )
}

export default Register;