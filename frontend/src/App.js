import './App.css';
import Admin from './components/admin';
import Users from './components/users';
import { Switch, Route, Link } from 'react-router-dom'
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Link to="/about" className='link'>About</Link>
        <Link to="/" className='link'>Services</Link>
      </header>
      <Switch>
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/" component={Users} />
      </Switch>
    </div>
  );
}

export default App;
