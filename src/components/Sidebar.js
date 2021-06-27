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
                               <Link style={{color:theme.color}} to="/">Dashboard</Link>
                            </div>
                            <div >
                                <MdVideocam />&nbsp;
                               <Link style={{color:theme.color}} to ="/live-sessions">Live Sessions</Link>
                            </div>
                            <div >
                                < MdAndroid/>&nbsp;
                                <Link  style={{color:theme.color}} to="/1-1">1-1 Sessions</Link>
                            </div>
                            <div >
                                <MdAirplay />&nbsp;
                               <Link style={{color:theme.color}}  to="/courses"> My Courses</Link>
                            </div>
                            <div >
                                <MdPhotoCamera  />&nbsp;
                               <Link style={{color:theme.color}}  to="/usersetting"> Settings</Link>
                            </div>
                            <div>
                            <span onClick={handleSignOut}>SignOut</span>
                           
                           </div>
                           
                            
                        </div>
                       
                    </Col>

            </Row>
        </Container>
        </div>
    )
}

export default Sidebar
