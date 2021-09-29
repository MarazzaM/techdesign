import './App.css';
import Navbar from './components/Navbar';
import {
  Switch,
  Route
} from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import About from './pages/About';
import HowTo from './pages/HowTo';
import Advice from './pages/Advice';
import Resources from './pages/Resources';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <main>
              <Switch>
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
          </main>
    </div>
  );
}

export default App;
