import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import { MdPhotoCamera } from "react-icons/md";
import { MdAirplay } from "react-icons/md";
import { MdPublic } from "react-icons/md";
import { MdAndroid } from "react-icons/md";
import { MdVideocam } from "react-icons/md";
import {Link} from 'react-router-dom';
import { auth } from './Firebase';
import { selectTheme } from '../features/themeSlice';
import { useSelector } from 'react-redux';

function Sidebar() {

    const theme = useSelector(selectTheme);

    const handleSignOut = ()=>{

        auth.signOut();
    }

    return (
        <div className="main">
        <Container fluid>
            <Row>
            <Col style={{padding:"0"}} className="sidebar">
                        <div className="logo">
                            <h4>Turnskill</h4>
                        </div>
                        <div className="menu">
                            <h6>MENU</h6>
                            <div  >
                            
                                <MdPublic />&nbsp;
                                <Link  style={{color:theme.color,fontSize:"12px",textDecoration:"none",color:"grey"}} to="/"><div style={{width:"100%"}}><div className="nav--links">Dashboard</div></div></Link>
                            </div>
                            <div >
                                <MdVideocam />&nbsp;
                               <Link style={{color:theme.color,fontSize:"12px",textDecoration:"none",color:"grey"}} to ="/live-sessions"><div className="nav--links">Live Sessions</div></Link>
                            </div>
                            <div >
                                < MdAndroid/>&nbsp;
                                <Link  style={{color:theme.color,fontSize:"12px",textDecoration:"none",color:"grey"}} to="/1-1"><div className="nav--links">1-1 Sessions</div></Link>
                            </div>
                            <div >
                                <MdAirplay />&nbsp;
                               <Link style={{color:theme.color,fontSize:"12px",textDecoration:"none",color:"grey"}}  to="/courses"> <div className="nav--links">My Courses</div></Link>
                            </div>
                            <div >
                                <MdPhotoCamera  />&nbsp;
                               <Link style={{color:theme.color,fontSize:"12px",textDecoration:"none",color:"grey"}}  to="/editprofile"><div className="nav--links">Settings</div></Link>
                            </div>
                            <div>
                            <span style={{fontSize:"12px",textDecoration:"none",color:"grey"}}onClick={handleSignOut}><div className="nav--links">SignOut</div></span>
                           
                           </div>
                           
                            
                        </div>
                       
                    </Col>

            </Row>
        </Container>
        </div>
    )
}

export default Sidebar
