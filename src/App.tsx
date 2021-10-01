import './App.css';
import Navbar from './components/Navbar';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import About from './pages/About';
import HowTo from './pages/HowTo';
import Advice from './pages/Advice';
import Resources from './pages/Resources';
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation();
  return (
    <div className="App">
          <Navbar/>
          <main>
          <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
              <Route path='/' exact>
                  <Welcome />
                </Route>
                <Route path='/Home' exact>
                  <Home />
                </Route>
                <Route path='/About' exact>
                  <About />
                </Route>
                <Route path='/Howto' exact>
                  <HowTo />
                </Route>
                <Route path='/Advice' exact>
                  <Advice />
                </Route>
                <Route path='/Resources' exact>
                  <Resources />
                </Route>
              </Switch>
              </AnimatePresence>
              <footer>
  <svg viewBox="0 0 120 28">
    <defs>
      <mask id="xxx">
        <circle cx="7" cy="12" r="40" fill="#fff" />
      </mask>

      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
      <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
    </defs>

    <use id="wave3" className="wave" xlinkHref="#wave" x="0" y="-2"></use>
    <use id="wave2" className="wave" xlinkHref="#wave" x="0" y="0"></use>

    </svg>

</footer>
          </main>
    </div>
  );
}

export default App;
