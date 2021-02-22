import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollRestoration from 'react-scroll-restoration';
import Navbar from './components/navbar/Navbar';
import ParticuliersPage from './components/Particuliers/v1/Page';
import Pro from './components/Pros/v1/Page';
import SelectCity from './components/Particuliers/v1/SelectCity';
import Footer from './components/footer/Footer';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollRestoration />
        <Navbar/>
          <Switch>
            <Route path='/choisir_sa_ville' children={<SelectCity/>}/>
            <Route path='/pro' children={<Pro/>} />
            <Route path='/' children={<ParticuliersPage/>} />
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
