import './App.css';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Courses from './components/Courses';
import Onetwoone from './components/Onetwoone';
import LiveSessions from './components/LiveSessions';
import VideoPage from './components/videoComponents/VideoPage';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Sidebar from './components/Sidebar';
import Newuser from './components/Newuser';
import Feedback from './components/FormTemplate/Feedback';
import AdminFirstPage from './components/adminAccount/AdminFirstPage';
import { useEffect } from 'react';
import { auth } from './components/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, selectUser } from './features/userSlice';
import { darkTheme, lightTheme, selectTheme } from './features/themeSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import EditProfile from './components/EditProfileComponent/EditProfile';



function App() {

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const theme = useSelector(selectTheme);




 

  const changeThemetoDark =()=>{

      dispatch(darkTheme());
  }
  const changeThemetoLight =()=>{

      dispatch(lightTheme());
  }

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
    <div  style={{backgroundColor:`${theme.background__color}`, color:theme.color,}} >

      <div className="theme__toggler">
        {
        theme.theme_type==="dark"?  
          <Button onClick={changeThemetoLight} className="navbar__theme btn btn-sm btn-dark ">Light Theme</Button>
          :    
          <Button onClick={changeThemetoDark} className="navbar__theme btn btn-sm btn-dark ">Dark Theme</Button>
        }      
      </div>
      <Container fluid>
      <Row>
      <Router>
              {
               user? <Col  lg={2} style={{padding:"0"}}>
               <Sidebar />
               </Col >:""
              }
             <Switch>
                <Route exact path="/">
                   {user?<Col lg={10} style={{padding:"0"}}>
                      <Homepage/>
                      </Col>:<Newuser/>
                   }

                </Route>
                <Route path="/courses"> 
                 {user? <Col lg={10} style={{padding:"0"}}><Courses/></Col>:<Newuser/>}
                </Route>
                <Route exact path="/live-sessions"> 
                  {user?<Col lg={10} style={{padding:"0"}}><LiveSessions/></Col>:<Newuser/>}                
                </Route>
                <Route path="/videodisplay" > 
                {user?<Col lg={10} style={{padding:"0"}}><VideoPage/></Col>:<Newuser/>}           
                </Route>
                <Route path="/1-1">
                  {user?<Col lg={10} style={{padding:"0"}}><Onetwoone/></Col>:<Newuser/>}   
                </Route>
                <Route path="/editprofile">
                  {user?<EditProfile  />:<Newuser/>}
                </Route>
                <Route path="/register">
                <Col lg={0} style={{padding:"0"}}><Signup/></Col>
                </Route>
                <Route path="/login">
                <Col lg={10} style={{padding:"0"}}><SignIn/></Col>
                </Route>     
                <Route path="/adminaccount">
                  <Col lg={10} style={{padding:"0"}}><AdminFirstPage/></Col>

                </Route>           
              </Switch>
      </Router>


     </Row>
     </Container>
    </div>
    </div>


    
  );
}


export default App;
