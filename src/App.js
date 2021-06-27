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
import UserSetting from './components/FormTemplate/UserSetting';
import AdminFirstPage from './components/adminAccount/AdminFirstPage';
import { useEffect } from 'react';
import { auth } from './components/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, selectUser } from './features/userSlice';
import { darkTheme, lightTheme, selectTheme } from './features/themeSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import VideoPage from './components/videoComponents/VideoPage';


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
                  <Col lg={10} style={{padding:"0"}}><Courses/></Col>
                </Route>
                <Route exact path="/live-sessions"> 
                  <Col lg={10} style={{padding:"0"}}><LiveSessions/></Col>                
                </Route>
                <Route path="/videodisplay" component={VideoPage}/> 
                <Route path="/1-1">
                  <Col lg={10} style={{padding:"0"}}><Onetwoone/></Col>
                </Route>
                <Route exact path="/usersetting">
                  <Col lg={10} style={{padding:"0"}}><UserSetting/></Col>
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
