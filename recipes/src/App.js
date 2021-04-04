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
  

  return (
    <div className="App">
      <Header user={user} />
      {/* <h1>{user?.email}</h1> */}
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/type/:type" component={Main} />
        <Route path="/recipes/details/:recipeId" component={Details} />
        <Route path="/recipes/create" component={Create} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" render={props => {
          firebase.auth().signOut();
          return (<Redirect to="/" />)
        }} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
