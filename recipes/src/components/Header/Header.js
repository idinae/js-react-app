import firebase from '../../utils/firebase';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = ({
  isAuthenticated,
  username
}) => {
    useEffect(() => {
      if(!isAuthenticated) {
        return;
      }

      firebase.auth().currentUser.getIdToken()
        .then(function(idToken) {
          console.log(idToken);
          // return fetch('http://localhost:5000', {
          return fetch('https://recipes-666.herokuapp.com', {
            headers: {
              'Authorization': idToken
            }
          })
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(function(error) {
        console.log(error);
      });    
    }, [isAuthenticated]);

    return (
      <div>
        <div className={style.container}>
          <div className={style.header}>
            <div className={style.logo}>
              <h1><Link to="/"><span>Cook</span>Book</Link></h1>
            </div>
            <div className={style.menu}>
              <ul>
                {isAuthenticated ? <li className={style.welcome}>Welcome, {username.split('@')[0]}!</li> : ''}
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/blog">Blog</Link></li> */}
                {isAuthenticated ? '' : <li><Link to="/login">Login</Link></li>}
                {isAuthenticated ? '' : <li><Link to="/register">Register</Link></li>}
                {isAuthenticated ? <li><Link to="/recipes/create">Create</Link></li> : ''}
                {isAuthenticated ? <li><Link to="/logout">Logout</Link></li> : ''}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;