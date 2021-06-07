
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
   
    return (
        <nav className="navbar">

        <div className="navbar__logo">
        <h2>TurnSkill</h2>
        </div>
        
        <div className="navbar__links">
        <ul>

       <Link to="/"><li>Home</li></Link>
       <Link to="/courses"> <li>Courses</li></Link>
       <Link to="/live-sessions"><li>Live Sessions</li></Link> 
      <Link to="/1-1">  <li>1-1 Sessions</li></Link>
       <Link to="/sign-in"> <li>Sign In</li></Link>
      
        </ul>
        </div>


        <button className="navbar__theme">Dark Theme</button>

            
        </nav>
    )
}

export default Navbar
