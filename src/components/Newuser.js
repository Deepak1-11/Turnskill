import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './Newuser.css';

import image1 from '../assets/turnskilllogoimage.PNG';
import image2 from '../assets/turnskillimg2.PNG';
import image3 from '../assets/turnskillimg3.PNG';


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
          <div className="FirstPage-buttons">
            <div className="FirstPage-buttonbox"><Link to="/register"> <Button style={{width:"200px"}}  >Register</Button></Link></div>
            <div className="FirstPage-buttonbox"> <Link to="/login"><Button style={{width:"200px"}}>Login</Button></Link></div>
            <div className="FirstPage-buttonbox"> <Link to="/adminaccount">Are you an admin?</Link></div>
          
         
         
            
          </div>
          </div>

          <div className="jumbotron__right imageslider">

          {/* <Carousel fade  style={{height:"350",width:"900",overflow:"hidden"} }> */}
           <Carousel fade  className="carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"     
      // style={{width: "null",
      // overflow:"hidden"
      // }}
      // width={900} height={350}
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
      // style={{width: "null",
      // overflow:"hidden"
      // }}
      // width={900} height={350}
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
      // style={{width: "null",
      // overflow:"hidden"
      // }}
      // width={900} height={350}
    />

   
  </Carousel.Item>
</Carousel>
          </div>


          </div>
          
      
      </Jumbotron>
      </div>
       
    )
}

export default Newuser
