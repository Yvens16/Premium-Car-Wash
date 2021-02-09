import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import ParticuliersPage from './components/Particuliers/v1/Page';
import SelectCity from './components/Particuliers/v1/SelectCity';
import Footer from './components/footer/Footer';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/choisir_sa_ville'>
          <SelectCity/>
          </Route>
          <Route path='/'>
            <ParticuliersPage/>
          </Route>
        </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
