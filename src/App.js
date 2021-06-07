import './App.css';
import {BrowserRouter as Router , Link ,Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Courses from './components/Courses';
import Onetwoone from './components/Onetwoone';
import Login from './components/Login';
import LiveSessions from './components/LiveSessions';

function App() {
 
  return (
    <div className="App">

    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/">

    <Homepage/>
    
    </Route>
    <Route path="/courses">
    <Courses/>
    </Route>
    <Route exact path="/live-sessions">

    <LiveSessions/>
    
    </Route>

    <Route path="/1-1">
    <Onetwoone/>
    </Route>

    <Route path="/sign-in">

  <Login/>
    
    </Route>
 
     </Switch>

     </Router>
   
    </div>
  );
}

export default App;
