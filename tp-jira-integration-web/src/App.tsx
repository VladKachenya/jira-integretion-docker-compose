import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Info';
import './styles/base.less';
import './styles/App.less';
import Home from './components/Home';
import About from './components/About';

ReactDOM.render(
  <Router>
    <div className="App">
      <nav >
        <div className='menu-bar'>
          <div className='menu-item'>
            <Button component={Link} to="/" className='menu-item-link'>
              <HomeIcon />
              <span>Home</span>
            </Button>
            {/* <Link className='menu-item-link' to="/">Home</Link> */}
          </div>
          <div className='menu-item'>
            <Button component={Link} to="/about" className='menu-item-link'>
              <AboutIcon />
              <span>About</span>
            </Button>
          </div>
        </div>
      </nav>
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </div>
  </Router>,
  document.getElementById("root")
);