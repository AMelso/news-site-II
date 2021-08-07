import navItems from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import ArticlePage from './pages/ArticlePage.js'

function App() {
  return (
    <div>
      <AppNav navItems={navItems} handleNavClick={(clickedItem) => console.log(clickedItem)} />
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/articles/:articleID" component={ArticlePage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
