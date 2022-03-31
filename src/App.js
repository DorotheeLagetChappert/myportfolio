import './App.scss';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import PortfliosPage from './pages/PortfoliosPage';
import BlogsPage from './pages/BlogsPage';
import { useState} from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);
  
  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className="nav-bar">
        <div className={`sidebar ${navToggle ? 'nav-toggle': ""}`} >
          <NavBar />
        </div>
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/portfolios" exact>
                <PortfliosPage />
              </Route>
              <Route path="/blogs" exact>
                <BlogsPage />
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
