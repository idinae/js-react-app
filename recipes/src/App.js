import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/type/:type" component={Main} />
        <Route path="/recipes/details/:recipeId" component={Details} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
