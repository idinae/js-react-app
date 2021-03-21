import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />

      <Switch>
        <Route path="./test" component />
      
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
