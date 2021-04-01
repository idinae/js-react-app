import { Route, Switch, Redirect } from 'react-router-dom';

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
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/type/:type" component={Main} />
        <Route path="/recipes/details/:recipeId" component={Details} />
        <Route path="/recipes/create" component={Create} />
        <Route path="/login" component={Login} />
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
