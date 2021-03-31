import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import ScrollRestoration from 'react-scroll-restoration';
import Navbar from './components/navbar/Navbar';
import SelectCity from './components/Particuliers/v1/SelectCity';
import Footer from './components/footer/Footer';

import NavBarDeux from './components_2/navbar/SmallNavBar';
import NavBarDeuxLarge from './components_2/navbar/LargeNavBar';
import './index.scss';
const Pro = lazy(() => import('./components/Pros/v1/Page'));
const ParticuliersPage = lazy(() => import('./components/Particuliers/v1/Page'));
const Home = lazy(() => import('./components_2/homepage_2/Homepage'));

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollRestoration />
        <NavBarDeux />
        <NavBarDeuxLarge />
        {/* <Navbar/> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
            <Route path='/' children={<Home/>} />
              {/* <Route path='/choisir_sa_ville' children={<SelectCity/>}/>
              <Route path='/pro' children={<Pro/>} />
              <Route path='/' children={<ParticuliersPage/>} /> */}
            </Switch>
          </Suspense>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
