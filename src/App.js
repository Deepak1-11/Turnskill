import './App.css';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Courses from './components/Courses';
import Onetwoone from './components/Onetwoone';
import LiveSessions from './components/LiveSessions';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Sidebar from './components/Sidebar';
import Newuser from './components/Newuser';
import { useEffect } from 'react';
import { auth } from './components/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, selectUser } from './features/userSlice';
import { selectTheme } from './features/themeSlice';


function App() {

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const theme = useSelector(selectTheme);

 useEffect(()=>{

    auth.onAuthStateChanged((authUser)=>{

      if(authUser)
      {

        dispatch(logIn({

          uid:authUser.uid,
          photo:authUser.profileURL,
          email:authUser.email,
          displayName:authUser.displayName,
          
        }));

      }

      else{  

        dispatch(logOut());

      
      };

    });


   

  },[]);
  
 
  return (

   <div className="App">
    <div  style={{backgroundColor:`${theme.background__color}`, color:theme.color}} >



    <Router>
    {/* <Navbar/> */}
    <Sidebar />
    <Switch>
    <Route exact path="/">

      {/* {user?<Homepage/>:<Newuser/>} */}

      <Homepage />
    
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

    <Route path="/register">
 <Signup/>

    </Route>
    <Route path="/login">
    <SignIn/>

    </Route>
    
 
     </Switch>

     </Router>
   
    </div>
    </div>


    
  );
}


export default App;
