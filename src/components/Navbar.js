
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import { auth } from './Firebase';
import Button from 'react-bootstrap/Button'
import './Navbar.css';
import { darkTheme, lightTheme, selectTheme } from '../features/themeSlice';



function Navbar() {
    
    const user = useSelector(selectUser);
    const history = useHistory();
    const dispatch = useDispatch();

    const theme  = useSelector(selectTheme);
   

    const changeThemetoDark =()=>{

        dispatch(darkTheme());
    }
    const changeThemetoLight =()=>{

        dispatch(lightTheme());
    }
    const handleLogOut = ()=>{

        auth.signOut()
        .then(history.push("/"));
    }
   
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
       {user?<Link><li onClick={handleLogOut}>SignOut</li></Link>:  <Link to="/"><li>SignIn</li> </Link>}

        </ul>
        </div>
          
     {theme.theme_type==="dark"?  <Button onClick={changeThemetoLight} className="navbar__theme btn btn-sm btn-dark ">Light Theme</Button>:
    
     <Button onClick={changeThemetoDark} className="navbar__theme btn btn-sm btn-dark ">Dark Theme</Button>
    }
       

            
        </nav>
    )
}

export default Navbar
