import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import './Newuser.css';
import HomeImage from '../assets/homeimg.jpg';

function Newuser() {
    return (


          <div  className="newuser" >
          <Jumbotron  style={{height:"80vh",width:"80vw",marginLeft:"auto",marginRight:"auto",marginTop:"30px"}}>
          

          <div className="jumbotron__div">
          <div className="jumbotron__left">
          <h1>Welcome to TurnSkill</h1>
          <p>
           TURN YOUR SKILLS WITH ACCURACY
          </p>
          <p>
          <Link to="/register"> <Button style={{width:"200px"}}  className="btn btn-dark mt-4">Register</Button></Link>
            <Link to="/login"><Button style={{width:"200px"}} className="btn btn-success ml-4 mt-4">Login</Button></Link>
          </p>
          </div>

          <div className="jumbotron__right">

          <img className="home__img" src={HomeImage} alt="img"/>
          
          </div>


          </div>
          
      
      </Jumbotron>
      </div>
       
    )
}

export default Newuser
