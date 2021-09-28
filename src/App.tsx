import './App.css';
import Navbar from './components/Navbar';
import {
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <main>
              <Switch>
                <Route path='/Home' exact>
                  <Home />
                </Route>
                <Route path='/About' exact>
                  <About />
                </Route>
              </Switch>
          </main>
    </div>
  );
}

export default App;
