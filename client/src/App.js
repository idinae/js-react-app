import { Route, Switch, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Details from './components/Details';
import Create from './components/Create';
import Login from './components/Login';
import Register from './components/Register';
import firebase from './utils/firebase';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //         console.log('Logged In:');
  //         console.log(user);
  //         setUser(authUser);
  //     } else {
  //         console.log('Logged Out');
  //         setUser(null);
  //     }
  //   });
  // }, []) //по този начин ще се изпълни веднъж, onMount

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser) //сетваме юзъра, който вече имаме
  }, []);
  
  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email
  };

  return (
    <div className="App">
      {/* <Header user={user} /> */}
      {/* <h1>{user?.email}</h1> */}
      {/* <Header username={user?.email} isAuthenticated={Boolean(user)} /> */}
      <Header {...authInfo} />
      
      <Switch>
        <Route path="/" exact render={props => <Main {...props} {...authInfo} />} />
        <Route path="/type/:type" render={props => <Main {...props} {...authInfo} />} />
        <Route path="/recipes/details/:recipeId" render={props => <Details {...props} {...authInfo} />} />
        <Route path="/recipes/create" render={props => <Create {...props} {...authInfo} />} />
        <Route path="/login" render={props => <Login {...props} {...authInfo} />} />
        <Route path="/register" render={props => <Register {...props} {...authInfo} />} />
        <Route path="/logout" render={() => {
          firebase.auth().signOut();
          return (<Redirect to="/" />)
        }} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
